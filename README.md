# 📝 Nortte Blog

Um portal moderno de artigos e conhecimento construído com as mais recentes tecnologias web, focado em **performance extrema** e **otimização SEO**. O Nortte Blog utiliza **Static Site Generation (SSG)** para entregar conteúdo ultrarrápido aos leitores.

---

## 🎯 Sobre o Projeto

O **Nortte Blog** é uma plataforma de publicação de artigos que combina:
- **Frontend de alta performance**: Gerado estaticamente para máxima velocidade
- **Backend robusto**: API REST gerenciada com Spring Boot e PostgreSQL
- **Infraestrutura cloud-native**: Hospedagem em Google Cloud com armazenamento de assets e observabilidade

O projeto é otimizado para:
- ⚡ **Performance**: Nota 90+ no Lighthouse
- 🔍 **SEO**: Meta tags completas, sitemaps e Open Graph
- 📱 **Responsividade**: Mobile-first, adaptável a todos os dispositivos
- 🛡️ **Segurança**: Sanitização de HTML, proteção contra XSS, JWT para autenticação

---

## 🛠️ Stack Frontend

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Nuxt** | 4.3.1+ | Framework Vue.js meta-framework com SSG |
| **Vue** | 3.5.22+ | Framework JavaScript reativo |
| **TypeScript** | 5.2.2+ | Tipagem estática rigorosa (strict mode) |
| **SCSS/Sass** | 1.66.1+ | Pré-processador CSS com variáveis e mixins |
| **@nuxt/image** | 1.11.0+ | Otimização automática de imagens (WebP, AVIF) |
| **@nuxt/fonts** | 0.11.4+ | Gerenciamento e otimização de tipografia |
| **@nuxtjs/seo** | 3.4.0+ | SEO automático (meta tags, sitemap, robots.txt) |
| **@nuxt/ui** | 4.10.0+ | Componentes UI modernos e acessíveis |
| **Cypress** | 15.16.0+ | Testes E2E para validação de funcionalidades |
| **ESLint** | 9.37.0+ | Linter para qualidade de código |

### Node.js Requirement
- **Mínimo**: Node.js 22+ (obrigatório para Nuxt 4)

---

## 🖥️ Stack Backend

O backend é construído com **Spring Boot** e fornece uma API REST robusta para o frontend.

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Spring Boot** | 3.3.0 | Framework Java para APIs REST |
| **Java** | 21 | Linguagem de programação (LTS) |
| **PostgreSQL** | 14+ | Banco de dados relacional principal |
| **Spring Security** | Integrado | Autenticação e autorização |
| **Spring Data JPA** | Integrado | ORM para persistência de dados |
| **JWT (JJWT)** | 0.12.5 | Tokens para autenticação stateless |
| **Flyway** | Integrado | Versionamento de migrations do banco |
| **CommonMark** | 0.21.0 | Processamento de Markdown |
| **OWASP HTML Sanitizer** | 20240325.1 | Sanitização de HTML contra XSS |
| **Spring Mail** | Integrado | Envio de emails transacionais |

**Nota**: O backend roda via **Docker** (docker-compose.yml) ou localmente com PostgreSQL instalado.

---

## ☁️ Serviços Cloud & Observabilidade

### Google Cloud
- **Cloud Storage**: Armazenamento de assets estáticos (imagens, fontes, etc.)
- **Cloud Run**: Deploy serverless do backend para escalabilidade automática

### Sentry
- **Error Tracking**: Captura e monitoramento de erros em tempo real (frontend e backend)
- **Performance Monitoring**: Rastreamento de transações e gargalos

### Upstash
- **Redis Cache**: Cache distribuído para otimização de performance
- **Rate Limiting**: Controle de taxa de requisições à API

---

## 🚀 Setup Local

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js 22+** (para o frontend)
- **Java 21** (para o backend)
- **Docker & Docker Compose** (opcional, para PostgreSQL)
- **PostgreSQL 14+** (se não usar Docker)
- **Git**

### 1. Clonar o Repositório

```bash
# Frontend
git clone <frontend-repo-url>
cd frontend
```

### 2. Setup Frontend

```bash
# Instalar dependências (usando pnpm)
pnpm install

# Criar arquivo .env baseado em .env.example
cp .env.example .env.local

# Configurar variáveis de ambiente
# NUXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
# NUXT_PUBLIC_SITE_URL=http://localhost:3000
# NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=seu_id_aqui (opcional)
```

**Executar em desenvolvimento:**
```bash
# Iniciar servidor de desenvolvimento (http://localhost:3000)
pnpm dev
```

**Build para produção:**
```bash
# Gerar site estático (SSG)
pnpm generate

# Visualizar build localmente
pnpm preview
```

### 3. Setup Backend

```bash
# Clonar repositório do backend
git clone <backend-repo-url>
cd backend

# Criar arquivo .env para variáveis de ambiente
cp .env.example .env

# Configurar variáveis de banco de dados
# DB_URL=jdbc:postgresql://localhost:5432/nortteblog
# DB_USER=postgres
# DB_PASSWORD=sua_senha
```

**Opção A: Com Docker Compose**
```bash
# Inicia PostgreSQL e todas as dependências
docker-compose up -d

# Rodar o backend
./gradlew bootRun
```

**Opção B: Com PostgreSQL Local**
```bash
# Certifique-se de que PostgreSQL está rodando
# Criar banco de dados
createdb nortteblog

# Rodar o backend (migrations são executadas automaticamente via Flyway)
./gradlew bootRun
```

Backend estará disponível em: `http://localhost:8080`

### 4. Validar Setup

```bash
# 1. Verificar se o frontend está respondendo
curl http://localhost:3000

# 2. Verificar se o backend está respondendo
curl http://localhost:8080/api/health

# 3. Verificar posts disponíveis
curl http://localhost:8080/api/post/published
```

---

## 📁 Estrutura do Projeto

### Frontend (`/app`)
```
app/
├── components/          # Componentes Vue reutilizáveis
├── pages/              # Páginas (roteamento automático)
├── composables/        # Lógica compartilhada
├── assets/             # SCSS, imagens, fontes
├── types/              # TypeScript types globais
└── app.vue             # Componente raiz
```

### Backend
```
src/
├── main/java/          # Código-fonte
│   ├── controller/     # Endpoints REST
│   ├── service/        # Lógica de negócio
│   ├── repository/     # Acesso a dados
│   └── entity/         # Modelos de banco
├── resources/          # Configurações e migrations
└── test/               # Testes automatizados
```

---

## 🔧 Comandos Úteis

### Frontend
```bash
# Desenvolvimento
pnpm dev                  # Iniciar servidor dev

# Build
pnpm build               # Build para servidor (SSR)
pnpm generate            # Gerar site estático (SSG)
pnpm preview             # Visualizar build

# Qualidade de código
pnpm lint               # Verificar com ESLint

# Testes
pnpm test               # Rodar testes (se configurado)
```

### Backend
```bash
# Build e run
./gradlew bootRun        # Executar em desenvolvimento
./gradlew build          # Build para produção
./gradlew test           # Rodar testes

# Database
./gradlew flywayMigrate  # Rodar migrations manualmente
```

---

## 🔐 Variáveis de Ambiente

### Frontend (`.env.local`)
```
NUXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=Nortte Blog
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXX (opcional)
NUXT_PUBLIC_SENTRY_DSN=https://... (opcional)
```

### Backend (`.env`)
```
DB_URL=jdbc:postgresql://localhost:5432/nortteblog
DB_USER=postgres
DB_PASSWORD=sua_senha
JWT_SECRET=sua_chave_secreta_muito_longa
SENTRY_DSN=https://... (opcional)
UPSTASH_REDIS_URL=redis://... (opcional)
```

---

## 📊 Critérios de Qualidade

- ✅ **Lighthouse Score**: 90+ (Performance, SEO, Accessibility)
- ✅ **SSG**: Todas as rotas de posts pré-renderizadas durante build
- ✅ **SEO**: Meta tags e Open Graph em todas as páginas
- ✅ **TypeScript**: Strict mode, sem `any` injustificado
- ✅ **Responsividade**: Mobile-first, testado em todos os breakpoints

---

## 🚢 Deploy em Produção

### Frontend (Google Cloud Run)
```bash
# Build da imagem Docker
docker build -t gcr.io/seu-projeto/nortte-blog-frontend .

# Push para Google Cloud Registry
docker push gcr.io/seu-projeto/nortte-blog-frontend

# Deploy em Cloud Run
gcloud run deploy nortte-blog-frontend \
  --image gcr.io/seu-projeto/nortte-blog-frontend \
  --platform managed
```

### Backend (Google Cloud Run)
```bash
# Build da imagem Docker
docker build -t gcr.io/seu-projeto/nortte-blog-backend .

# Push para Google Cloud Registry
docker push gcr.io/seu-projeto/nortte-blog-backend

# Deploy em Cloud Run
gcloud run deploy nortte-blog-backend \
  --image gcr.io/seu-projeto/nortte-blog-backend \
  --platform managed
```

---

## 📚 Documentação Adicional

- [Technical Specification](./Technical_Specification.md) - Especificação técnica detalhada
- [Nuxt Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)

---

## 🤝 Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit suas mudanças: `git commit -am 'Adiciona minha feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para detalhes.

---

## 📞 Suporte

Para questões, bugs ou sugestões, abra uma issue no repositório ou entre em contato com o time de desenvolvimento.

**Última atualização**: Julho de 2026
