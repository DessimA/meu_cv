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
  title: "Desenvolvedor FullStack | Java / Node.js",
  summary:
    "Recém-graduado em Sistemas de Informação, buscando ativamente a primeira oportunidade como Desenvolvedor Júnior. Sou proativo, colaborativo e possuo forte capacidade analítica, movido pelo aprendizado contínuo, busco constantemente novas habilidades e ferramentas para entregar soluções cada vez mais eficientes. Sou adaptável, sem apego a tecnologias específicas, focando em utilizar a abordagem mais eficaz para cada contexto e desafio. Estou entusiasmado para aplicar meus conhecimentos, contribuir efetivamente em equipe e crescer na área de TI.",
  contact: {
    email: "j.anderson.mect@gmail.com",
    phone: "+55 88 99235-3236",
    linkedin: "https://linkedin.com/in/dessim",
    github: "https://github.com/dessima",
  },
  education: [
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)",
      details: "Concluído em 2025. Campus Cedro, Ceará.",
    },
  ],
  skills: [
    { name: "Java", category: "Linguagens" },
    { name: "JavaScript", category: "Linguagens" },
    { name: "SQL", category: "Linguagens" },
    { name: "Python (Básico)", category: "Linguagens" },
    { name: "PHP (Básico)", category: "Linguagens" },
    { name: "HTML5", category: "Linguagens" },
    { name: "CSS3", category: "Linguagens" },
    { name: "Spring Boot", category: "Frameworks & Bibliotecas" },
    { name: "ReactJS", category: "Frameworks & Bibliotecas" },
    { name: "Node.js", category: "Frameworks & Bibliotecas" },
    { name: "PostgreSQL", category: "Banco de Dados" },
    { name: "MySQL", category: "Banco de Dados" },
    { name: "Conceitos NoSQL", category: "Banco de Dados" },
    { name: "Azure (Fundamentos AZ-900)", category: "Cloud & DevOps" },
    { name: "AWS (Conceitos Fundamentais)", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Git", category: "Cloud & DevOps" },
    { name: "GitHub", category: "Cloud & DevOps" },
    { name: "APIs REST", category: "Metodologias & Conceitos" },
    { name: "Testes Unitários", category: "Metodologias & Conceitos" },
    { name: "Metodologias Ágeis (Scrum)", category: "Metodologias & Conceitos" },
    { name: "ITIL 4 (Visão Geral)", category: "Metodologias & Conceitos" },
    { name: "LGPD (Conceitos)", category: "Metodologias & Conceitos" },
    { name: "VS Code", category: "Ferramentas" },
    { name: "IntelliJ (Java/Spring)", category: "Ferramentas" },
    { name: "Postman", category: "Ferramentas" },
    { name: "Docker Desktop", category: "Ferramentas" },
    { name: "Git Bash/CLI", category: "Ferramentas" },
    { name: "LaTeX", category: "Ferramentas" },
    { name: "Windows", category: "Sistemas Operacionais" },
    { name: "Linux", category: "Sistemas Operacionais" },
    { name: "Next.js Static Export", category: "Cloud & DevOps" },
    { name: "GitHub Pages Deployment", category: "Cloud & DevOps" },
    { name: "Environment Variable Management", category: "Cloud & DevOps" },
    { name: "Frontend Deployment Strategies", category: "Metodologias & Conceitos" },
    { name: "Formspree Integration", category: "Frameworks & Bibliotecas" },
  ],
  projects: [
    {
      name: "Restaurante Delivery (Backend/Full-Stack)",
      githubLink: "https://github.com/dessima/delivery_system",
      technologies: "Java, Spring Boot, PostgreSQL, API REST",
      description: "Desenvolvimento de API REST para gerenciamento completo de pedidos de delivery.",
      features: ["Autenticação/Autorização (básico)", "CRUD de Usuários/Produtos/Pedidos", "Histórico"],
    },
    {
      name: "NASA Gallery (Frontend)",
      githubLink: "https://github.com/dessima/NASA_Galery",
      technologies: "ReactJS, JavaScript, HTML, CSS, Consumo de API Externa (NASA API)",
      description: "Aplicação interativa para visualização de conteúdo da API da NASA.",
      features: ["Exibição da Imagem do Dia (APOD)", "Busca de fotos de Rovers (Mars)"],
    },
  ],
  experience: [
    {
      title: "Consultor de TI Autônomo",
      company: "Atuação Própria",
      period: "Jan 2020 - Ago 2024",
      location: "Cedro, Ceará",
      responsibilities: [
        "Diagnóstico de gargalos e ineficiências em processos/sistemas via entrevistas, análise documental e observação.",
        "Elaboração de relatórios técnicos com propostas de ações corretivas, planos de ação e análise de custo-benefício.",
        "Apresentação de recomendações a stakeholders e acompanhamento da implementação.",
        "Desenvolvimento de habilidades em: Análise crítica, Resolução de problemas, Comunicação e Documentação técnica.",
      ],
    },
    {
      title: "Atendente de Caixa / Atendimento ao Cliente",
      company: "Panificadora Pão e Trigo",
      period: "Jan 2012 - Jan 2013",
      location: "Araruna, Paraíba",
      responsibilities: ["Atendimento direto ao cliente, operação de caixa e processamento de transações."],
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      institution: "Microsoft (via Ka Solution)",
      date: "Fev 2022",
      details: "ID: 10962-53752",
    },
    {
      name: "Fundamentos de Computação em Nuvem AWS",
      institution: "DIO (Conteúdo Oficial AWS)",
      date: "Jul 2023 / 12h",
    },
    {
      name: "Formação Java",
      institution: "DIO",
      date: "Mai 2022-Out 2022 / 20h+",
      details: "Inclui Lógica, OOP, Métodos, Coleções, Exceptions, Debugging",
    },
    {
      name: "Formação JavaScript & Frontend",
      institution: "DIO",
      date: "Out 2022-Ago 2023 / 30h+",
    },
    {
      name: "Formação Python (Fundamentos)",
      institution: "DIO",
      date: "Jul 2023 / 10h",
      details: "Inclui Operadores, Estruturas, Strings, Listas, Dicts, Funções",
    },
    {
      name: "Formação Git & GitHub",
      institution: "DIO",
      date: "Mar 2022-Jul 2023 / 8h+",
      details: "Inclui Conceitos, Comandos, Repositórios, Versionamento",
    },
    {
      name: "Formação Linux (Básico/Intermediário)",
      institution: "DIO",
      date: "Out 2022 / 6h",
      details: "Inclui Instalação, Acesso Remoto, Manipulação de Arquivos",
    },
    {
      name: "Formação Agilidade & Scrum",
      institution: "Ka Solution/DIO",
      date: "Fev 2022-Jan 2024 / 25h+",
      details: "Inclui Scrum Overview, Princípios Ágeis, Trabalho em Equipe",
    },
    { name: "Visão Geral do ITIL4®", institution: "Ka Solution", date: "Jul 2022 / 3h" },
    { name: "DPO & LGPD na Prática", institution: "Ka Solution (EXIN)", date: "Mai 2022 / 4h" },
    { name: "Workshop: Primeiros Passos com Docker", institution: "FLISOL IFCE", date: "Abr 2018 / 2h" },
    { name: "Curso de Inglês Completo", institution: "Kultivi", date: "Mar 2023 / 115h" },
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
    { name: "Espanhol", level: "Básico" },
  ],
};