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
  name: "JOSÉ ANDERSON DA SILVA COSTA",
  title: "Desenvolvedor de Software | Java | Spring Boot | React | AWS | Docker",
  summary:
`
Desenvolvedor Full Stack focado em transformar desafios de negócio complexos em soluções técnicas escaláveis e cloud-native, minha especialidade é o backend, onde utilizo Java/Spring Boot para construir microsserviços de alto desempenho e arquiteturas robustas, seguindo princípios SOLID e Clean Code, no frontend, atuo com React e Next.js para criar interfaces otimizadas.
Possuo experiência em arquitetura de infraestrutura na AWS e automação de CI/CD com Docker e GitHub Actions, atualmente, estou explorando ativamente IA Generativa (AWS AI Services) e aplicando Python para automação.

`,
  contact: {
    email: "j.anderson.sc.dev@gmail.com",
    phone: "+55 88 99235-3236",
    linkedin: "https://linkedin.com/in/dessim",
    github: "https://github.com/dessima",
  },
  education: [
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)",
      details: "Concluído em abr de 2025. Formação em análise de sistemas, engenharia de software, banco de dados e arquitetura de soluções. Período: jan de 2017 - abr de 2025.",
    },
    {
      degree: "Programa AWS re/Start + Inteligência Artificial",
      institution: "Escola da Nuvem",
      details: "Em andamento (out de 2025 - mar de 2026). Programa intensivo de Cloud Computing e IA, com foco em empregabilidade, infraestrutura AWS e proficiência em Python e Linux.",
    },
    {
      degree: "Especialização Back End - G9 (ONE)",
      institution: "Alura Latam",
      details: "Em andamento (out de 2025 - mar de 2026). Domínio em Java, POO e Spring Framework, com foco em desenvolvimento Back-end seguro e eficiente, e integração de IA com Java.",
    },
  ],
  skills: [
    // Linguagens de Programação
    { name: "Java 17+", category: "Linguagens" },
    { name: "Go (Básico)", category: "Linguagens" },
    { name: "JavaScript", category: "Linguagens" },
    { name: "TypeScript", category: "Linguagens" },
    { name: "Python (Básico)", category: "Linguagens" },
    { name: "SQL", category: "Linguagens" },
    { name: "HTML5", category: "Linguagens" },
    { name: "CSS3", category: "Linguagens" },
    { name: "Shell Script", category: "Linguagens" },
    
    // Backend & APIs
    { name: "Spring Boot", category: "Backend & APIs" },
    { name: "Spring Security", category: "Backend & APIs" },
    { name: "Spring Data JPA", category: "Backend & APIs" },
    { name: "Hibernate", category: "Backend & APIs" },
    { name: "REST API", category: "Backend & APIs" },
    { name: "Microsserviços", category: "Backend & APIs" },
    { name: "JSON / HTTP/HTTPS", category: "Backend & APIs" },
    { name: "Node.js", category: "Backend & APIs" },
    { name: "Postman", category: "Backend & APIs" },
    
    // Frontend & FullStack
    { name: "React.js", category: "Frontend & FullStack" },
    { name: "Next.js 14", category: "Frontend & FullStack" },
    { name: "Angular", category: "Frontend & FullStack" },
    { name: "TypeScript", category: "Frontend & FullStack" },
    { name: "Tailwind CSS", category: "Frontend & FullStack" },
    { name: "Framer Motion", category: "Frontend & FullStack" },
    { name: "Context API / Hooks", category: "Frontend & FullStack" },
    { name: "Design Responsivo", category: "Frontend & FullStack" },
    
    // Cloud & DevOps
    { name: "AWS (EC2, S3, RDS, VPC, IAM)", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Docker Compose", category: "Cloud & DevOps" },
    { name: "Nginx", category: "Cloud & DevOps" },
    { name: "CI/CD", category: "Cloud & DevOps" },
    { name: "GitHub Actions", category: "Cloud & DevOps" },
    { name: "Linux", category: "Cloud & DevOps" },
    { name: "Infraestrutura como Código (IaC)", category: "Cloud & DevOps" },
    
    // Banco de Dados
    { name: "PostgreSQL", category: "Banco de Dados" },
    { name: "MySQL", category: "Banco de Dados" },
    { name: "DynamoDB (Básico)", category: "Banco de Dados" },
    { name: "SQL Query Optimization", category: "Banco de Dados" },
    { name: "Database Design (ORM/JPA)", category: "Banco de Dados" },
    
    // Metodologias & Conceitos
    { name: "Clean Code", category: "Metodologias & Conceitos" },
    { name: "SOLID", category: "Metodologias & Conceitos" },
    { name: "Design Patterns", category: "Metodologias & Conceitos" },
    { name: "TDD (Test-Driven Development)", category: "Metodologias & Conceitos" },
    { name: "Agile (Scrum, Kanban)", category: "Metodologias & Conceitos" },
    { name: "Component-Based Architecture", category: "Metodologias & Conceitos" },
    { name: "ITIL 4 Foundation", category: "Metodologias & Conceitos" },
    
    // Inteligência Artificial & ML
    { name: "AWS AI Services (Bedrock, Textract, Lex)", category: "Inteligência Artificial & ML" },
    { name: "Machine Learning Fundamentals", category: "Inteligência Artificial & ML" },
    { name: "IA Generativa", category: "Inteligência Artificial & ML" },
    { name: "Python", category: "Inteligência Artificial & ML" },
    
    // Ferramentas & Outros
    { name: "Git / GitHub", category: "Ferramentas & Outros" },
    { name: "VS Code / IntelliJ IDEA", category: "Ferramentas & Outros" },
    { name: "Notion / Figma (Básico)", category: "Ferramentas & Outros" },
    { name: "Problem Solving", category: "Ferramentas & Outros" },
    { name: "Análise Técnica", category: "Ferramentas & Outros" },
    { name: "Trabalho em Equipe", category: "Ferramentas & Outros" },
  ],
  projects: [
    {
      name: "Sistema de Delivery (Backend)",
      githubLink: "https://github.com/dessima/delivery_system",
      technologies: "Java 17, Spring Boot, PostgreSQL, Spring Security, JPA/Hibernate",
      description: "API REST completa para sistema de delivery, priorizando a arquitetura e segurança. Implementação de autenticação, autorização e CRUD de entidades com relacionamentos complexos.",
      features: [
        "Autenticação e autorização com Spring Security (JWT)",
        "CRUD completo de Usuários, Produtos e Pedidos",
        "Relacionamentos complexos com JPA/Hibernate",
        "Validação de dados com Bean Validation",
        "PostgreSQL como banco de dados principal",
        "Testes unitários e de integração"
      ],
    },
    {
      name: "Simulador de Terminal Bancário",
      githubLink: "https://github.com/dessima/bank-simulator",
      technologies: "Java 17, Maven, JUnit, Docker, Clean Architecture, SOLID",
      description: "Simulador de terminal bancário refatorado para seguir os princípios de Clean Architecture e SOLID. Foco em testes robustos (JUnit) e containerização (Docker).",
      features: [
        "Aplicação em linha de comando (CLI)",
        "Implementação dos princípios SOLID",
        "Testes unitários com JUnit",
        "Gerenciamento de dependências com Maven",
        "Containerização com Docker",
        "Simulação de operações bancárias (saque, depósito, transferência)"
      ],
    },
    {
      name: "Conversor de Moedas",
      githubLink: "https://github.com/dessima/Conversor-de-Moedas",
      technologies: "Java 17, Gson, Lombok, REST API",
      description: "Aplicação Java console para conversão de valores entre moedas e criptomoedas, utilizando taxas de câmbio em tempo real de APIs externas. Inclui histórico de conversões.",
      features: [
        "Conversão entre 15 moedas e 10 criptomoedas",
        "Integração com API de cotação em tempo real",
        "Histórico de conversões persistido localmente",
        "Interface de console amigável",
        "Tratamento de erros de API"
      ],
    },
    {
      name: "Gerenciador de Chaves (Full Stack)",
      githubLink: "https://github.com/dessima/gerenciador-chaves",
      technologies: "Go, React, SQLite, Docker, Docker Compose, Nginx",
      description: "Aplicação full stack para gerenciamento seguro de credenciais com backend em Go, frontend em React, banco PostgreSQL e deploy completo com Docker Compose + Nginx.",
      features: [
        "Backend RESTful em Go com arquitetura em camadas",
        "Frontend React com Context API",
        "Autenticação JWT",
        "Deploy containerizado com Docker Compose",
        "Nginx como reverse proxy e load balancer",
        "Banco de dados SQLite"
      ],
    },
    {
      name: "Currículo Web Interativo",
      githubLink: "https://github.com/dessima/meu_cv",
      technologies: "Next.js 14, TypeScript, Framer Motion, Zod, React Hook Form, SEO",
      description: "Aplicação web profissional com Next.js 14, TypeScript, validação de formulários (Zod + React Hook Form), animações (Framer Motion) e otimização para SEO e performance.",
      features: [
        "Static Site Generation (SSG) com Next.js 14",
        "TypeScript para type safety",
        "Validação robusta com Zod",
        "Formulário de contato com React Hook Form",
        "Animações suaves com Framer Motion",
        "SEO otimizado (meta tags, sitemap)",
        "Performance otimizada (Lighthouse 90+)"
      ],
    },
    {
      name: "Galeria NASA",
      githubLink: "https://github.com/dessima/NASA_Galery",
      technologies: "React 18, Axios, Context API, CSS3",
      description: "SPA interativa em React consumindo múltiplas APIs da NASA (APOD, Mars Rovers), com Context API para gerenciamento de estado, sistema de favoritos e design responsivo.",
      features: [
        "Consumo de múltiplas APIs NASA (APOD, Mars Rovers)",
        "Context API para gerenciamento de estado global",
        "Sistema de favoritos com localStorage",
        "Design responsivo e mobile-first",
        "Tratamento de estados assíncronos",
        "Interface moderna e intuitiva"
      ],
    },
    {
      name: "Aventura do Herói (Game)",
      githubLink: "https://github.com/DessimA/classificador-de-nivel-de-heroi",
      technologies: "JavaScript, HTML5, CSS3, DOM Manipulation, Canvas",
      description: "Jogo de corrida infinita 2D com temática cyberpunk, desenvolvido com JavaScript puro e Canvas. Demonstra manipulação de DOM, física básica e animações CSS complexas.",
      features: [
        "Desenvolvimento de jogo com JavaScript puro",
        "Uso do elemento Canvas para renderização",
        "Implementação de física e colisão básica",
        "Animações CSS3 complexas",
        "Layout responsivo e otimizado para mobile"
      ],
    },
    {
      name: "Amigo Secreto - Cyberpunk Edition",
      githubLink: "https://github.com/dessima/amigo-secreto",
      technologies: "JavaScript, HTML5, CSS3, DOM Manipulation, OOP",
      description: "Aplicação web interativa para sorteio de Amigo Secreto com estética Cyberpunk. Demonstra manipulação avançada de DOM e Programação Orientada a Objetos em JavaScript.",
      features: [
        "Programação orientada a objetos (OOP) em JavaScript",
        "Manipulação avançada de DOM",
        "Animações CSS3 e layout temático",
        "Validação de dados no frontend",
        "Sorteio aleatório de participantes"
      ],
    },
  ],
  experience: [
    {
      title: "Desenvolvedor de Software | Java | Spring Boot | React | AWS | Docker",
      company: "Freelancer/Projetos Pessoais",
      period: "2023 - Atual",
      location: "Remoto",
      responsibilities: [
        "Desenvolvimento de APIs RESTful utilizando Java e Spring Boot, implementando segurança com Spring Security e persistência de dados com JPA/Hibernate.",
        "Criação de aplicações front-end modernas com React e Next.js, focando em performance, SEO e experiência do usuário.",
        "Implementação de práticas DevOps, incluindo containerização com Docker e CI/CD com GitHub Actions.",
        "Modelagem e otimização de bancos de dados relacionais (PostgreSQL) e NoSQL (DynamoDB).",
        "Estudo e aplicação de serviços AWS (EC2, S3, RDS, VPC) em arquiteturas cloud-native.",
        "Aplicação de metodologias ágeis (Scrum/Kanban), Clean Code e princípios SOLID em todos os projetos.",
      ],
    },
    {
      title: "Consultor de TI / Analista de Sistemas",
      company: "Diversas Empresas (Consultoria)",
      period: "2019 - 2023",
      location: "Fortaleza, CE",
      responsibilities: [
        "Análise e levantamento de requisitos para sistemas de gestão empresarial (ERP).",
        "Elaboração de documentação técnica, manuais de usuário e planos de teste.",
        "Suporte e manutenção de sistemas legados, garantindo a continuidade das operações.",
        "Treinamento de usuários finais e equipes de suporte técnico.",
        "Otimização de processos de negócio através da implementação de soluções de TI.",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Knowledge: Cloud Essentials - Training Badge",
      institution: "Amazon Web Services (AWS)",
      date: "out de 2025",
      details: "Competências: Amazon Web Services (AWS)",
    }   
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário (Avançando)" },
    { name: "Espanhol", level: "Básico" },
  ],
};
