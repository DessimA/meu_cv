# Meu Currículo Web

Este é um projeto de currículo web moderno e responsivo, desenvolvido com Next.js, TypeScript e Tailwind CSS. Ele serve como um portfólio digital interativo, otimizado para performance, SEO e experiência do usuário.

## Visão Geral do Projeto

O objetivo principal deste projeto é apresentar as informações profissionais de forma clara, concisa e visualmente atraente. A aplicação é construída com foco em:

- **Performance Otimizada**: Carregamento rápido e eficiente para uma excelente experiência do usuário.
- **Design Responsivo**: Compatibilidade total com dispositivos móveis e desktops, garantindo uma visualização perfeita em qualquer tela.
- **SEO Otimizado**: Estrutura semântica e metadados configurados para melhor ranqueamento em mecanismos de busca.
- **Acessibilidade**: Conformidade com padrões WCAG para garantir que o conteúdo seja acessível a todos os usuários.
- **Manutenibilidade**: Código limpo, modular e bem estruturado, facilitando futuras atualizações e expansões.

## Tecnologias Utilizadas

O projeto utiliza um conjunto de tecnologias modernas para garantir robustez, escalabilidade e uma ótima experiência de desenvolvimento:

### Core Frameworks

- **Next.js (v14.x)**: Framework React para renderização server-side, geração estática e roteamento.
- **React (v18.x)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript (v5.x)**: Superset do JavaScript que adiciona tipagem estática.

### Estilização e Design

- **Tailwind CSS (v3.x)**: Framework CSS utilitário para construção rápida de interfaces responsivas.
- **Framer Motion (v10.x)**: Biblioteca para animações fluidas e interativas.
- **Lucide React (v0.300.x)**: Conjunto de ícones SVG otimizados para React.

### Funcionalidades e Interação

- **React Hook Form (v7.x)**: Para gerenciamento de formulários com validação eficiente.
- **Zod (v3.x)**: Biblioteca de validação de esquemas TypeScript-first.
- **Nodemailer (v6.x)**: Para envio de e-mails através do formulário de contato (via API Route).

### Ferramentas de Desenvolvimento e Qualidade

- **ESLint (v8.x)**: Ferramenta de linting para manter a qualidade e consistência do código.
- **Prettier (v3.x)**: Formatador de código automático para padronização do estilo.
- **Husky (v8.x)**: Para configurar Git Hooks e automatizar tarefas pré-commit/pré-push.
- **Lint-staged (v15.x)**: Executa linters apenas em arquivos modificados.

## Estrutura do Projeto

A estrutura de pastas segue as convenções do Next.js, com uma organização modular para facilitar a navegação e manutenção:

```
meu_cv/
├── app/                  # Rotas e layouts principais da aplicação
│   ├── api/              # Rotas de API (ex: formulário de contato)
│   ├── globals.css       # Estilos globais
│   └── layout.tsx        # Layout principal da aplicação
│   └── page.tsx          # Página inicial
├── components/           # Componentes reutilizáveis, organizados por funcionalidade
│   ├── About/            # Seção Sobre
│   ├── Certifications/   # Seção de Certificações
│   ├── ContactForm/      # Formulário de Contato
│   ├── Education/        # Seção de Educação
│   ├── ExperienceTimeline/ # Linha do tempo de Experiência
│   ├── Footer/           # Rodapé
│   ├── HeroSection/      # Seção Hero (introdução)
│   ├── Navbar/           # Barra de Navegação
│   ├── Projects/         # Seção de Projetos
│   ├── SkillsCloud/      # Nuvem de Habilidades
│   └── TypewriterEffect/ # Efeito de digitação
├── data/                 # Dados estáticos do currículo (ex: portfolio.ts)
├── public/               # Ativos estáticos (imagens, ícones)
├── .next/                # Diretório de build do Next.js
├── node_modules/         # Dependências do projeto
├── package.json          # Metadados e scripts do projeto
├── tailwind.config.js    # Configuração do Tailwind CSS
├── tsconfig.json         # Configuração do TypeScript
└── ...                   # Outros arquivos de configuração (.gitignore, Dockerfile, etc.)
```

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local:

### Pré-requisitos

- Node.js (versão 18 ou superior) e npm (ou yarn/pnpm) instalados.
- Git instalado.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/meu_cv.git
   cd meu_cv
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou yarn install
   # ou pnpm install
   ```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis para a funcionalidade de envio de e-mail:

```env
SMTP_HOST=seu-servidor-smtp
SMTP_PORT=587 # ou a porta do seu servidor SMTP
SMTP_USER=seu-email@exemplo.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=seu-email@exemplo.com # O email que aparecerá como remetente
CONTACT_EMAIL=email-de-destino@exemplo.com # O email para onde as mensagens serão enviadas
```

**Nota**: Para `SMTP_PASS` em serviços como Gmail, você precisará gerar uma senha de aplicativo, não use sua senha principal.

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
# ou pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

### Build para Produção

Para construir a aplicação para produção:

```bash
npm run build
# ou yarn build
# ou pnpm build
```

Para iniciar a aplicação em modo de produção (após o build):

```bash
npm run start
# ou yarn start
# ou pnpm start
```

## Deploy Online

Este projeto está publicado no GitHub Pages e pode ser acessado através do seguinte link:

[https://joseanderson.github.io/meu_cv/](https://joseanderson.github.io/meu_cv/)



## Scripts Úteis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia a aplicação em modo de produção.
- `npm run lint`: Executa o ESLint para verificar problemas de código.
- `npm run lint:fix`: Executa o ESLint e tenta corrigir automaticamente os problemas.
- `npm run format`: Formata o código usando Prettier.
- `npm run format:check`: Verifica se o código está formatado corretamente.
- `npm run type-check`: Verifica os tipos TypeScript.

## Correções Futuras / Problemas Conhecidos

- **Botão de Tema Dark/Light**: O botão para alternar entre o tema claro e escuro atualmente não está funcionando como esperado. É necessário investigar e corrigir a funcionalidade para que a alternância de temas ocorra corretamente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Autor:** José Anderson da Silva Costa
**Data:** 14 de julho de 2025
**Versão:** 1.0