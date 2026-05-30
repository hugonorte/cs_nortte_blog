# Workflow for Agent: Setting Up Nuxt CI/CD on Hostinger

This document provides instructions for an AI agent to create or modify a GitHub Actions workflow for a Nuxt project (SSG) to be deployed to Hostinger with a manual approval gate.

## Objective
Create a `.github/workflows/deploy.yml` file that:
1. Builds the Nuxt application on every `push` and `pull_request`.
2. Deploys to a Hostinger server via `rsync` **only** after a Pull Request is merged into `master` or via a manual trigger.
3. Uses a single unified job (`build-and-deploy`) to run build, tests, and deploy without generating intermediate GitHub artifacts, preventing "Artifact storage quota has been hit" errors.
4. **Implements an automatic retry mechanism** to handle transient network failures with the server.

## Git Flow Strategy
This project follows a Git Flow-inspired branching model:
- **`dev` Branch**: The main integration branch. All development branches must be created from `dev`.
- **`feature/*`, `bugfix/*`, `refactor/*` Branches**: Temporary branches for specific tasks. They must always target `dev` in Pull Requests.
- **`master` Branch**: The stable production branch. The `dev` branch is merged into `master` only when a new release is ready for production.

**Deployment Rule**: The production deployment is **only** triggered when code is merged into the `master` branch. Merges into `dev` will trigger a build for validation but will not result in a production upload.

## 1. Triggers
The workflow should listen to:
- `push` on the `master` and `dev` branches.
- `pull_request` targeting the `master` and `dev` branches.
- `workflow_dispatch` (manual button).

## 2. GitHub Secrets
The agent must inform the user that the following secrets are required in the repository settings:
- `HOSTINGER_USER`: The Hostinger SSH username (e.g., `u123456789`).
- `HOSTINGER_DOMAIN`: The target domain name (e.g., `exemplo.com`).
- `HOSTINGER_IP`: The IP address of the server (numeric IP is recommended for speed/stability).
- `HUGONORTE_PRIVATE_SSH_KEY`: The private SSH key for authentication.
- `HOSTINGER_PORT` (optional, default 65002): The SSH port.

## 3. Workflow Structure

### Job: Build and Deploy (Single Unified Job)
- **Environment**: `ubuntu-latest`.
- **Rationale**: Do NOT split the pipeline into separate `build` and `deploy` jobs requiring `actions/upload-artifact` and `actions/download-artifact`. Uploading/downloading static outputs consumes GitHub Actions Artifact Storage Quota extremely quickly, leading to `Error: Failed to CreateArtifact: Artifact storage quota has been hit` failures. A single unified job runs faster and uses zero artifact storage.
- **Steps**:
    - **Checkout code**: Using `actions/checkout@v4`.
    - **Setup Node.js**: Version 22+ using `actions/setup-node@v4` (caching: `npm`).
    - **Install dependencies**: `npm install --legacy-peer-deps`.
    - **Run tests**: `npm run test:unit`.
    - **Generate static site**: `npm run generate` (produces `.output/public/`).
    - **Deploy with Retry**: Wrap the rsync shell command with `nick-fields/retry@v3`.
        - **Conditional**: Run the deploy step only if `github.event_name != 'pull_request' && (github.ref == 'refs/heads/master' || github.event_name == 'workflow_dispatch')`.
        - **Attempts**: 3
        - **Delay**: 120s (2 minutes)
        - **Command**:
            ```bash
            eval $(ssh-agent -s)
            echo "${{ secrets.HUGONORTE_PRIVATE_SSH_KEY }}" | tr -d '\r' | ssh-add -
            rsync -avzr --delete -e "ssh -p 65002 -o StrictHostKeyChecking=no" .output/public/ ${{ secrets.HOSTINGER_USER }}@${{ secrets.HOSTINGER_IP }}:/home/${{ secrets.HOSTINGER_USER }}/domains/${{ secrets.HOSTINGER_DOMAIN }}/public_html/
            ```

## 4. Critical Implementation Detail
> [!IMPORTANT]
> **Why use a direct shell command for deployment instead of an Action wrapper?**
> When dealing with multiline secrets like Private SSH Keys, nesting them inside a YAML-based retry wrapper (like `Wandalen/wretry.action`) often causes **YAML parsing errors** (`block mapping entry error`). This happens because the secret expansion breaks the indentation of the wrapper's block string.
> 
> **Solution**: Using `nick-fields/retry` with a direct `command` block is the most robust method. It treats the secret as a simple string expansion inside a bash script, avoiding all YAML indentation issues.

## 5. Nuxt Configuration Hints
- Ensure `nuxt.config.ts` does not have a hardcoded `baseURL` if deploying to a subdirectory, or adjust the `remote_path` accordingly.
- The project must be configured as SSG (Static Site Generation), which occurs during `npm run generate`.
