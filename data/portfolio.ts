export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  name: string;
  githubLink: string;
  technologies: string;
  description: string;
  features: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
  details?: string;
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
}

export const portfolioData: PortfolioData = {
  
  "name": "JOSÉ ANDERSON DA SILVA COSTA",
  "title": "Desenvolvedor Júnior | Java | Spring Boot | AWS | React",
  "summary": "Graduado em Sistemas de Informação, atualmente desenvolvendo competências em Cloud (através do programa AWS re/Start) e Backend Java (pelo Oracle ONE). Busco minha primeira oportunidade formal para aplicar os conhecimentos que estou adquirindo na criação de APIs RESTful com Spring Boot, na utilização de serviços AWS e na configuração de ambientes com Docker.",
  "contact": {
    "email": "j.anderson.sc.dev@gmail.com",
    "phone": "+55 88 99235-3236",
    "linkedin": "https://linkedin.com/in/dessim",
    "github": "https://github.com/dessima"
  },
  "education": [
    {
      "degree": "Bacharelado em Sistemas de Informação",
      "institution": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)",
      "details": "jan de 2017 - abr de 2025. Formação sólida em análise de sistemas, engenharia de software, banco de dados e arquitetura de soluções."
    }
  ],
  "skills": [
    { "name": "Java", "category": "Linguagens" },
    { "name": "SQL", "category": "Linguagens" },
    { "name": "JavaScript", "category": "Linguagens" },
    { "name": "Python (Básico)", "category": "Linguagens" },
    { "name": "Shell Script (Básico)", "category": "Linguagens" },
    { "name": "Spring Boot", "category": "Backend" },
    { "name": "API REST", "category": "Backend" },
    { "name": "JPA / Hibernate", "category": "Backend" },
    { "name": "Maven", "category": "Backend" },
    { "name": "Spring Security (Conceitos)", "category": "Backend" },
    { "name": "React.js", "category": "Frontend" },
    { "name": "Next.js", "category": "Frontend" },
    { "name": "HTML5 & CSS3", "category": "Frontend" },
    { "name": "AWS (EC2, S3, RDS, VPC, IAM)", "category": "Cloud & DevOps" },
    { "name": "Oracle Cloud (OCI) (Básico)", "category": "Cloud & DevOps" },
    { "name": "Docker", "category": "Cloud & DevOps" },
    { "name": "Docker Compose", "category": "Cloud & DevOps" },
    { "name": "Linux (Administração Básica)", "category": "Cloud & DevOps" },
    { "name": "PostgreSQL", "category": "Banco de Dados" },
    { "name": "MySQL (Stored Procedures, Triggers)", "category": "Banco de Dados" },
    { "name": "Modelagem de Dados (ER)", "category": "Banco de Dados" },
    { "name": "Inteligência Artificial (Conceitos)", "category": "IA & Metodologias" },
    { "name": "Engenharia de Prompts", "category": "IA & Metodologias" },
    { "name": "AWS AI Services (Bedrock, Lex)", "category": "IA & Metodologias" },
    { "name": "Design Patterns", "category": "IA & Metodologias" },
    { "name": "Arquitetura MVC", "category": "IA & Metodologias" },
    { "name": "Git / GitHub", "category": "Ferramentas" },
    { "name": "Postman", "category": "Ferramentas" },
    { "name": "IntelliJ IDEA / VS Code", "category": "Ferramentas" }
  ],
  "projects": [
    {
      "name": "Sistema de Delivery (Backend)",
      "githubLink": "https://github.com/dessima/delivery_system",
      "technologies": "Java 17, Spring Boot, PostgreSQL, Spring Security, JPA/Hibernate",
      "description": "API REST completa para sistema de delivery, priorizando a arquitetura e segurança. Implementação de autenticação, autorização e CRUD de entidades com relacionamentos complexos.",
      "features": [
        "Autenticação e autorização com Spring Security (JWT)",
        "CRUD completo de Usuários, Produtos e Pedidos",
        "Relacionamentos complexos com JPA/Hibernate",
        "Validação de dados com Bean Validation",
        "PostgreSQL como banco de dados principal",
        "Testes unitários e de integração"
      ]
    },
    {
      "name": "Simulador de Terminal Bancário",
      "githubLink": "https://github.com/dessima/bank-simulator",
      "technologies": "Java 17, Maven, JUnit, Docker, Clean Architecture, SOLID",
      "description": "Simulador de terminal bancário refatorado para seguir os princípios de Clean Architecture e SOLID. Foco em testes robustos (JUnit) e containerização (Docker).",
      "features": [
        "Aplicação em linha de comando (CLI)",
        "Implementação dos princípios SOLID",
        "Testes unitários com JUnit",
        "Gerenciamento de dependências com Maven",
        "Containerização com Docker",
        "Simulação de operações bancárias (saque, depósito, transferência)"
      ]
    },
    {
      "name": "Conversor de Moedas",
      "githubLink": "https://github.com/dessima/Conversor-de-Moedas",
      "technologies": "Java 17, Gson, Lombok, REST API",
      "description": "Aplicação Java console para conversão de valores entre moedas e criptomoedas, utilizando taxas de câmbio em tempo real de APIs externas. Inclui histórico de conversões.",
      "features": [
        "Conversão entre 15 moedas e 10 criptomoedas",
        "Integração com API de cotação em tempo real",
        "Histórico de conversões persistido localmente",
        "Interface de console amigável",
        "Tratamento de erros de API"
      ]
    },
    {
      "name": "Gerenciador de Chaves (Full Stack)",
      "githubLink": "https://github.com/dessima/gerenciador-chaves",
      "technologies": "Go, React, SQLite, Docker, Docker Compose, Nginx",
      "description": "Aplicação full stack para gerenciamento seguro de credenciais com backend em Go, frontend em React, banco PostgreSQL e deploy completo com Docker Compose + Nginx.",
      "features": [
        "Backend RESTful em Go com arquitetura em camadas",
        "Frontend React com Context API",
        "Autenticação JWT",
        "Deploy containerizado com Docker Compose",
        "Nginx como reverse proxy e load balancer",
        "Banco de dados SQLite"
      ]
    },
    {
      "name": "Currículo Web Interativo",
      "githubLink": "https://github.com/dessima/meu_cv",
      "technologies": "Next.js 14, TypeScript, Framer Motion, Zod, React Hook Form, SEO",
      "description": "Aplicação web profissional com Next.js 14, TypeScript, validação de formulários (Zod + React Hook Form), animações (Framer Motion) e otimização para SEO e performance.",
      "features": [
        "Static Site Generation (SSG) com Next.js 14",
        "TypeScript para type safety",
        "Validação robusta com Zod",
        "Formulário de contato com React Hook Form",
        "Animações suaves com Framer Motion",
        "SEO otimizado (meta tags, sitemap)",
        "Performance otimizada (Lighthouse 90+)"
      ]
    },
    {
      "name": "Galeria NASA",
      "githubLink": "https://github.com/dessima/NASA_Galery",
      "technologies": "React 18, Axios, Context API, CSS3",
      "description": "SPA interativa em React consumindo múltiplas APIs da NASA (APOD, Mars Rovers), com Context API para gerenciamento de estado, sistema de favoritos e design responsivo.",
      "features": [
        "Consumo de múltiplas APIs NASA (APOD, Mars Rovers)",
        "Context API para gerenciamento de estado global",
        "Sistema de favoritos com localStorage",
        "Design responsivo e mobile-first",
        "Tratamento de estados assíncronos",
        "Interface moderna e intuitiva"
      ]
    },
    {
      "name": "Aventura do Herói (Game)",
      "githubLink": "https://github.com/DessimA/classificador-de-nivel-de-heroi",
      "technologies": "JavaScript, HTML5, CSS3, DOM Manipulation, Canvas",
      "description": "Jogo de corrida infinita 2D com temática cyberpunk, desenvolvido com JavaScript puro e Canvas. Demonstra manipulação de DOM, física básica e animações CSS complexas.",
      "features": [
        "Desenvolvimento de jogo com JavaScript puro",
        "Uso do elemento Canvas para renderização",
        "Implementação de física e colisão básica",
        "Animações CSS3 complexas",
        "Layout responsivo e otimizado para mobile"
      ]
    },
    {
      "name": "Amigo Secreto - Cyberpunk Edition",
      "githubLink": "https://github.com/dessima/amigo-secreto",
      "technologies": "JavaScript, HTML5, CSS3, DOM Manipulation, OOP",
      "description": "Aplicação web interativa para sorteio de Amigo Secreto com estética Cyberpunk. Demonstra manipulação avançada de DOM e Programação Orientada a Objetos em JavaScript.",
      "features": [
        "Programação orientada a objetos (OOP) em JavaScript",
        "Manipulação avançada de DOM",
        "Animações CSS3 e layout temático",
        "Validação de dados no frontend",
        "Sorteio aleatório de participantes"
      ]
    }
  ],
  "experience": [
    {
      "title": "Desenvolvedor de Software (Projetos de Estudo & Autônomo)",
      "company": "Atividades Autônomas",
      "period": "2022 - Presente",
      "location": "Remoto",
      "responsibilities": [
        "Desenvolvimento de projetos práticos para aprimorar competências em Java, Spring Boot, AWS e Docker.",
        "Criação de APIs RESTful, modelagem de bancos de dados (PostgreSQL/MySQL) e desenvolvimento de interfaces com React.",
        "Dedicação integral aos programas de especialização AWS re/Start e Oracle Next Education (ONE).",
        "Atuação em atividades esporádicas de consultoria de TI, aplicando conhecimentos de infraestrutura e sistemas."
      ]
    },
    {
      "title": "Atendente de Caixa",
      "company": "Panificadora Pão e Trigo",
      "period": "2012 - 2013",
      "location": "Aracati, CE",
      "responsibilities": [
        "Atendimento ao cliente, gestão de caixa e trabalho em ambiente dinâmico."
      ]
    }
  ],
  "certifications": [
    {
      "name": "Programa AWS re/Start",
      "institution": "Escola da Nuvem",
      "date": "Cursando (previsão de conclusão: mar de 2026)",
      "details": "Formação intensiva em Cloud Computing, cobrindo fundamentos de redes, segurança, operação de serviços AWS (EC2, S3, RDS), administração Linux, automação com Python e introdução a serviços de IA como Bedrock."
    },
    {
      "name": "Oracle Next Education (ONE) - Trilha Backend",
      "institution": "Alura",
      "date": "Cursando (previsão de conclusão: mar de 2026)",
      "details": "Especialização em desenvolvimento Backend com Java e Spring Framework, focando na criação de APIs RESTful, prática com bancos de dados MySQL (triggers, procedures), introdução à Oracle Cloud (OCI) e aplicação de IA com Engenharia de Prompts."
    },
    {
      "name": "AWS Knowledge: Data Migration",
      "institution": "Amazon Web Services (AWS)",
      "date": "nov de 2025",
      "details": "Valida o conhecimento técnico em serviços de armazenamento da AWS, com foco em estratégias de migração de dados e no uso do serviço AWS DataSync."
    },
    {
      "name": "AWS Knowledge: Cloud Essentials",
      "institution": "Amazon Web Services (AWS)",
      "date": "out de 2025",
      "details": "Valida o conhecimento em conceitos fundamentais da Nuvem AWS, cobrindo os pilares de Computação, Armazenamento, Redes, Bancos de Dados, segurança e arquitetura."
    }
  ],
  "languages": [
    { "name": "Português", "level": "Nativo" },
    { "name": "Inglês", "level": "Intermediário" }
  ]
};
