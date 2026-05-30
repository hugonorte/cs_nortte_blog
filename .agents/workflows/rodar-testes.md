---
description: Executa a suíte de testes E2E/Componentes com o Cypress no Frontend.
---

# Workflow: Executar Testes do Sistema (Cypress)

Este workflow automatiza a execução de testes E2E (End-to-End) e/ou componentes para validar a integridade das interfaces e fluxos do usuário após alterações no projeto Frontend.

## Passos:

// turbo

1. Executa o comando de testes em modo headless no diretório raiz:

   ```bash
   npx cypress run
   ```
   *(Nota: Caso existam testes unitários vitest que devam rodar em conjunto, execute `npm run test:unit` primeiro).*

2. Exibe o resultado da execução dos testes (passes, fails, pending) para o usuário.
3. Se houver falhas, sugere a análise dos logs de erro no terminal e vídeos/screenshots (gerados pelo Cypress na pasta `cypress/screenshots` ou `cypress/videos`) para correção do componente.
