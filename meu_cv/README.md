# Portfolio José Anderson - NextJS

Um portfolio profissional moderno desenvolvido com NextJS, TypeScript e Tailwind CSS, apresentando um design minimalista com tema escuro e cores vibrantes que transmitem alegria.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema Escuro**: Interface elegante com cores harmoniosas (ciano, rosa, verde)
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Formulário de Contato**: Sistema funcional de envio de mensagens
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **SEO Otimizado**: Metadados configurados para melhor indexação

## 🛠️ Tecnologias Utilizadas

- **NextJS 15.3.4** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - Gerenciamento de estado moderno
- **CSS Animations** - Animações personalizadas

## 📁 Estrutura do Projeto

```
portfolio-jose-anderson/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e tema
│   │   ├── layout.tsx       # Layout principal e metadados
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── Header.tsx       # Cabeçalho e navegação
│   │   ├── About.tsx        # Seção sobre mim
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   ├── Projects.tsx     # Projetos desenvolvidos
│   │   ├── Experience.tsx   # Experiência e certificações
│   │   ├── Contact.tsx      # Formulário de contato
│   │   └── Footer.tsx       # Rodapé
│   ├── data/
│   │   └── portfolio.ts     # Dados do portfolio
│   └── types/
│       └── index.ts         # Definições TypeScript
├── public/                  # Arquivos estáticos
├── package.json            # Dependências do projeto
└── README.md              # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone ou extraia o projeto**
   ```bash
   cd portfolio-jose-anderson
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🎨 Personalização

### Cores do Tema

As cores principais estão definidas em `src/app/globals.css`:

```css
:root {
  --accent-primary: #00d4ff;    /* Azul ciano vibrante */
  --accent-secondary: #ff6b6b;  /* Coral alegre */
  --accent-tertiary: #4ecdc4;   /* Verde-azulado */
  --accent-quaternary: #ffe66d; /* Amarelo suave */
}
```

### Dados Pessoais

Para atualizar as informações pessoais, edite o arquivo `src/data/portfolio.ts`:

- Informações de contato
- Resumo profissional
- Habilidades técnicas
- Projetos
- Experiência profissional
- Certificações

### Componentes

Cada seção do portfolio é um componente independente em `src/components/`, facilitando manutenção e customização.

## 📱 Responsividade

O portfolio foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 📧 Formulário de Contato

O formulário utiliza a funcionalidade `mailto:` do navegador, abrindo automaticamente o cliente de email padrão com os dados preenchidos.

Para implementar envio via API/servidor, substitua a lógica em `src/components/Contact.tsx`.

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git
2. Conecte o repositório na [Vercel](https://vercel.com)
3. O deploy será automático

### Netlify

1. Execute `npm run build`
2. Faça upload da pasta `out/` para o Netlify

### Outros Provedores

1. Execute `npm run build`
2. Faça upload dos arquivos gerados conforme documentação do provedor

## 🔧 Configurações Avançadas

### SEO

Os metadados estão configurados em `src/app/layout.tsx`. Atualize conforme necessário:

- Title e description
- Open Graph tags
- Twitter cards
- Keywords

### Performance

O projeto já inclui otimizações:

- Lazy loading de componentes
- Otimização de imagens
- Minificação automática
- Tree shaking

## 📞 Suporte

Para dúvidas ou suporte:

- **Email**: j.anderson.mect@gmail.com
- **LinkedIn**: [José Anderson](https://linkedin.com/in/jose-anderson)
- **GitHub**: [jose-anderson](https://github.com/jose-anderson)

## 📄 Licença

Este projeto foi desenvolvido para uso pessoal de José Anderson da Silva Costa.

---

**Desenvolvido com ❤️ por José Anderson**

