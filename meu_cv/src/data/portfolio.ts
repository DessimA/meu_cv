export const portfolioData = {
  personalInfo: {
    name: "JOSÉ ANDERSON DA SILVA COSTA",
    title: "Desenvolvedor Júnior | Backend (Java) & Frontend (ReactJS)",
    phone: "+55 88 99235-3236",
    email: "j.anderson.mect@gmail.com",
    linkedin: "https://linkedin.com/in/dessim",
    github: "https://github.com/dessima",
    location: "Cedro, Ceará, Brasil",
    availability: "Integral",
    summary: "Recém-graduado em Sistemas de Informação, buscando ativamente a primeira oportunidade como Desenvolvedor Júnior, sou proativo, colaborativo e possuo forte capacidade analítica, movido pelo aprendizado contínuo, busco constantemente novas habilidades e ferramentas para entregar soluções cada vez mais eficientes. Sou adaptável, sem apego a tecnologias específicas, focando em utilizar a abordagem mais eficaz para cada contexto e desafio, estou entusiasmado para aplicar meus conhecimentos, contribuir efetivamente em equipe e crescer na área de TI."
  },
  
  education: {
    degree: "Bacharelado em Sistemas de Informação",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) Campus Cedro",
    year: "2025"
  },
  
  skills: {
    languages: ["Java", "JavaScript", "SQL", "Python (Básico)", "PHP (Básico)", "HTML5", "CSS3"],
    frameworks: ["Spring Boot", "ReactJS", "Node.js"],
    databases: ["PostgreSQL", "MySQL", "Conceitos NoSQL"],
    cloudDevOps: ["Azure (Fundamentos AZ-900)", "AWS (Conceitos Fundamentais)", "Docker", "Git", "GitHub"],
    methodologies: ["APIs REST", "Testes Unitários", "Metodologias Ágeis (Scrum)", "ITIL 4 (Visão Geral)", "LGPD (Conceitos)"],
    tools: ["VS Code", "IntelliJ (Java/Spring)", "Postman", "Docker Desktop", "Git Bash/CLI", "LaTeX"],
    operatingSystems: ["Windows", "Linux (Distribuições comuns - Instalação, Uso Básico/Intermediário)"]
  },
  
  projects: [
    {
      name: "Restaurante Delivery (Sistema Web de Pedidos)",
      type: "Backend/Full-Stack",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "API REST"],
      github: "delivery_system",
      description: "Desenvolvimento de API REST para gerenciamento completo de pedidos de delivery. Funcionalidades: Autenticação/Autorização (básico), CRUD de Usuários/Produtos/Pedidos, Histórico."
    },
    {
      name: "NASA Gallery (Galeria de Imagens da NASA)",
      type: "Frontend",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS", "Consumo de API Externa (NASA API)"],
      github: "NASA_Galery",
      description: "Aplicação interativa para visualização de conteúdo da API da NASA. Funcionalidades: Exibição da Imagem do Dia (APOD), Busca de fotos de Rovers (Mars)."
    }
  ],
  
  experience: [
    {
      position: "Consultor de TI Autônomo",
      company: "Atuação Própria",
      location: "Cedro, Ceará",
      period: "Jan 2020 – Ago 2024",
      activities: [
        "Diagnóstico de gargalos e ineficiências em processos/sistemas via entrevistas, análise documental e observação.",
        "Elaboração de relatórios técnicos com propostas de ações corretivas, planos de ação e análise de custo-benefício.",
        "Apresentação de recomendações a stakeholders e acompanhamento da implementação.",
        "Desenvolvimento de habilidades em: Análise crítica, Resolução de problemas, Comunicação e Documentação técnica."
      ]
    },
    {
      position: "Atendente de Caixa / Atendimento ao Cliente",
      company: "Panificadora Pão e Trigo",
      location: "Araruna, Paraíba",
      period: "Jan 2012 – Jan 2013",
      activities: [
        "Atendimento direto ao cliente, operação de caixa e processamento de transações."
      ]
    }
  ],
  
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      institution: "Microsoft (via Ka Solution)",
      date: "Fev 2022",
      id: "10962-53752"
    },
    {
      name: "Fundamentos de Computação em Nuvem AWS",
      institution: "DIO (Conteúdo Oficial AWS)",
      date: "Jul 2023",
      duration: "12h"
    },
    {
      name: "Formação Java",
      institution: "DIO",
      date: "Mai 2022 - Out 2022",
      duration: "20h+",
      details: "Inclui Lógica, OOP, Métodos, Coleções, Exceptions, Debugging"
    },
    {
      name: "Formação JavaScript & Frontend",
      institution: "DIO",
      date: "Out 2022 - Ago 2023",
      duration: "30h+"
    },
    {
      name: "Formação Python (Fundamentos)",
      institution: "DIO",
      date: "Jul 2023",
      duration: "10h",
      details: "Inclui Operadores, Estruturas, Strings, Listas, Dicts, Funções"
    }
  ],
  
  languages: [
    {
      language: "Português",
      level: "Nativo"
    },
    {
      language: "Inglês",
      level: "Intermediário",
      details: "Leitura técnica avançada; escrita e compreensão intermediárias; conversação básica/intermediária - Aprimorando"
    },
    {
      language: "Espanhol",
      level: "Básico"
    }
  ]
};

