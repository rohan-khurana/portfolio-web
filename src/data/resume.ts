// ---------------------------------------------------------------------------
// Central content file — edit THIS file to update the site's resume content.
// Nothing here is fabricated: every fact is sourced from Rohan's resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Rohan Khurana',
  title: 'Senior Software Engineer',
  tagline: 'Full-Stack Engineer — Backend, Cloud & AI systems, from architecture to production.',
  location: 'Delhi NCR, India',
  email: 'rohankhurana.cse@gmail.com',
  phone: '+91-8630015985',
  linkedin: 'https://www.linkedin.com/in/rohan-khurana-cse',
  github: 'https://github.com/rohan-khurana',
  yearsExperience: '4+',
  resumeUrl: `${import.meta.env.BASE_URL}assets/resume.pdf`,
  heroKeywords: ['C# / .NET', 'Cloud (Azure · AWS · GCP)', 'RAG & LLM Systems', 'Enterprise Security'],
}

export const preferredLocations = {
  cities: ['Delhi NCR (Noida)', 'Delhi NCR (Gurgaon)', 'Bengaluru'],
  modes: ['Hybrid', 'Fully Remote / WFH'],
}

export const about = `Rohan is a Senior Software Engineer with 4+ years of experience building scalable,
high-performance enterprise applications in C# and .NET, and architecting secure, highly
available infrastructure across GCP, Azure, and AWS. He has led enterprise authentication and
security modernization efforts — including IdP migrations, GitHub Advanced Security rollout, and
a company-wide OAuth/SAML/JWT standardization initiative — for clinical scheduling products used
at enterprise scale.

More recently, he's worked as a Forward Deployed Engineer building and productionizing AI-powered,
multi-tenant chatbot platforms that run across cloud, single-tenant, and air-gapped on-premises
environments — combining RAG pipelines, vector search, and document ingestion with the same
production rigor (CI/CD, IaC, observability) he's applied throughout his backend and cloud work.
He also holds two peer-reviewed publications in applied machine learning.`

export type Experience = {
  company: string
  location: string
  roles: { title: string; period: string }[]
  bullets: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    company: 'Embrace Software Pvt. Ltd.',
    location: 'Chennai, Tamil Nadu',
    roles: [{ title: 'Senior Software Developer', period: 'Jun 2026 – Present' }],
    bullets: [
      'Forward Deployed Engineer building and productionizing AI-powered chatbot platforms for multi-tenant, single-tenant, cloud, and on-prem deployments.',
      'Developed and operated RAG-based AI systems using OpenAI, Pinecone, Redis, and vector search for document ingestion and context-aware responses.',
      'Owned cloud infrastructure, CI/CD, and deployment automation across Azure and AWS using GitHub Actions and infrastructure-as-code.',
      'Built and maintained production-ready on-prem installers for air-gapped/customer environments, improving build reliability and reproducibility.',
      'Implemented secure deployment practices using Key Vault, Managed Identity, OIDC, secrets management, and containerized services.',
    ],
    tech: ['OpenAI', 'RAG', 'Pinecone', 'Redis', 'Azure', 'AWS', 'GitHub Actions', 'Docker', 'Key Vault', 'OIDC'],
  },
  {
    company: 'Ultimate Kronos Group (UKG)',
    location: 'Noida, Uttar Pradesh',
    roles: [
      { title: 'Senior Software Engineer', period: 'Jan 2024 – May 2026' },
      { title: 'Software Engineer', period: 'Jul 2022 – Dec 2023' },
    ],
    bullets: [
      'Led enterprise-wide security modernization by implementing GitHub Advanced Security and establishing proactive vulnerability governance across BlackDuck, Checkmarx, and SonarQube, reducing critical security risks and improving remediation SLAs.',
      'Directed large-scale IdP migration from ForgeRock to Ping Identity with zero downtime, and implemented authentication integrations with Okta, Keycloak, CyberArk, and Ping Identity to strengthen enterprise SSO.',
      'Engineered the One Authentication Scheme (AuthN) initiative, standardizing OAuth 2.0, SAML, and JWT implementations across multiple distributed applications.',
      'Architected and delivered a SAML-based authentication framework for Clinical Scheduling Extensions, enabling secure multi-environment SSO, and designed RESTful Web APIs for new features using MVC, C#, and ASP.NET.',
      'Designed and scaled secure GCP infrastructure using Cloud Run, Compute Engine, Cloud SQL, Memorystore, Secret Manager, and Cloud Armor to support highly available production workloads.',
      'Led cloud transformation initiatives by building migration utilities and CI/CD automation (Shell, Terraform, PowerShell, Jenkins, GitHub Actions), accelerating on-prem to SaaS migration and reducing deployment cycle time.',
      'Owned CI/CD modernization by migrating pipelines from Jenkins to GitHub Actions, improving build reliability, deployment traceability, and developer velocity.',
      'Improved operational visibility by designing enterprise-grade Splunk and Grafana dashboards, reducing mean time to detection (MTTD) and resolution (MTTR).',
      'Engineered Windows Forecaster Integration services to process workload and census data, improving shift planning accuracy and operational efficiency.',
      'Elevated software quality by implementing automated testing frameworks (NUnit, xUnit, Selenium, Moq), reducing regression defects and increasing release confidence.',
      'Owned end-to-end delivery — requirement gathering, analysis, design, development, testing, and deployment — of classification distribution and staffing variance reporting for US healthcare customers, performing deep analysis of complex scheduling datapoints and calculations using .NET, DevExpress, ExtJS, and GCP.',
      'Mentored engineers and drove technical excellence through design reviews and secure-coding, cloud architecture, and DevOps best practices.',
    ],
    tech: ['C#', '.NET', 'ASP.NET', 'GCP', 'OAuth 2.0', 'SAML', 'JWT', 'Terraform', 'GitHub Actions', 'Splunk', 'Grafana', 'NUnit', 'Selenium', 'DevExpress', 'ExtJS'],
  },
  {
    company: 'Cognizant Technology Solutions',
    location: 'Noida, Uttar Pradesh',
    roles: [{ title: 'Programmer Analyst Trainee', period: 'Feb 2022 – Jun 2022' }],
    bullets: [
      'Completed intensive training in Java full-stack development, building end-to-end applications using Core Java, Spring Boot, REST APIs, SQL, HTML, and JavaScript.',
      'Managed project dependencies, builds, and artifact packaging using Maven, ensuring consistent configurations across environments.',
      'Implemented data persistence and ORM solutions using Hibernate and JPA, designing relational schemas and optimizing queries.',
      'Applied foundational CI/CD, version control, and environment configuration practices.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'Maven', 'SQL'],
  },
]

export type SkillCategory = { category: string; items: string[] }

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['C#', 'Python', 'Java', 'JavaScript', 'PowerShell', 'Bash', 'YAML'] },
  { category: 'Backend & Frameworks', items: ['.NET 8', 'ASP.NET Core', 'ASP.NET Web API', 'MVC', 'FastAPI', 'REST APIs', 'Microservices', 'DevExpress', 'ExtJS'] },
  { category: 'AI / LLM Engineering', items: ['OpenAI', 'Gemini', 'Retrieval-Augmented Generation (RAG)', 'Vector Embeddings', 'Semantic Search', 'Prompt Engineering', 'Document Ingestion', 'AI Agents'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'GCP', 'Docker', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD', 'IaC', 'Power Automate', 'WiX Toolset'] },
  { category: 'Databases', items: ['PostgreSQL', 'pgvector', 'MS SQL Server', 'Redis', 'Pinecone'] },
  { category: 'Security & Identity', items: ['OAuth 2.0', 'SAML', 'OIDC', 'JWT', 'GitHub Advanced Security', 'Checkmarx', 'Black Duck', 'Key Vault', 'Managed Identity'] },
  { category: 'Testing & Quality', items: ['NUnit', 'xUnit', 'MSTest', 'Selenium', 'Moq', 'JMeter'] },
  { category: 'Observability & Tools', items: ['Splunk', 'Grafana', 'PagerDuty', 'Git', 'Jira', 'Postman', 'JetBrains'] },
  {
    category: 'AI-Assisted Development',
    items: ['GitHub Copilot', 'Claude Code', 'Codex', 'ChatGPT'],
  },
  {
    category: 'Core Concepts',
    items: [
      'System Design',
      'Design Patterns',
      'SOLID Principles',
      'Microservices',
      'Multi-Tenant Architecture',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Agile',
      'Scrum',
      'AI-First Development',
    ],
  },
]

export type Project = {
  name: string
  problem: string
  built: string
  approach: string
  tech: string[]
  challenges: string
  link?: string
}

export const projects: Project[] = [
  {
    name: 'Multi-Tenant AI Chatbot Platform',
    problem: 'Enterprise customers needed an AI assistant that could be deployed flexibly — shared cloud, dedicated single-tenant, or fully air-gapped on-premises — without fragmenting the codebase.',
    built: 'A RAG-based chatbot platform with document ingestion pipelines, vector search retrieval, and context-aware response generation, deployable across cloud, single-tenant, and on-prem/air-gapped environments.',
    approach: 'Built retrieval pipelines on OpenAI, Pinecone, and Redis for vector storage and semantic search; packaged the platform with production-ready on-prem installers; secured deployments with Key Vault, Managed Identity, and OIDC; automated infrastructure and releases with GitHub Actions and IaC across Azure and AWS.',
    tech: ['OpenAI', 'RAG', 'Pinecone', 'Redis', 'Vector Search', 'Azure', 'AWS', 'Docker', 'GitHub Actions', 'Key Vault', 'OIDC'],
    challenges: 'Reconciling a single retrieval architecture across three deployment topologies (cloud, single-tenant, air-gapped) while keeping installers reliable and reproducible for customer environments with no internet access.',
  },
  {
    name: 'Clinical Scheduling Authentication Platform',
    problem: 'A large enterprise clinical scheduling product needed a unified, secure authentication layer spanning multiple applications, multiple identity providers, and multiple deployment environments.',
    built: 'The "One Authentication Scheme" (AuthN) — a standardized OAuth 2.0 / SAML / JWT authentication framework, plus a SAML-based SSO extension for Clinical Scheduling Extensions.',
    approach: 'Directed a zero-downtime IdP migration from ForgeRock to Ping Identity, integrated Okta, Keycloak, and CyberArk, and standardized auth protocols across distributed .NET services and REST APIs on GCP infrastructure (Cloud Run, Cloud SQL, Memorystore, Secret Manager, Cloud Armor).',
    tech: ['OAuth 2.0', 'SAML', 'JWT', 'Ping Identity', 'Okta', 'Keycloak', 'CyberArk', 'GCP', 'C#', 'ASP.NET'],
    challenges: 'Migrating live enterprise SSO from one identity provider to another with zero downtime, while standardizing inconsistent auth implementations across multiple existing applications.',
  },
  {
    name: 'Security & Vulnerability Governance Rollout',
    problem: 'The engineering organization needed proactive, enterprise-wide vulnerability governance rather than reactive security fixes.',
    built: 'A governance program built on GitHub Advanced Security with integrated scanning across BlackDuck, Checkmarx, and SonarQube.',
    approach: 'Rolled out GHAS company-wide, established remediation SLAs, and modernized CI/CD from Jenkins to GitHub Actions to embed security scanning directly into the delivery pipeline.',
    tech: ['GitHub Advanced Security', 'Checkmarx', 'Black Duck', 'SonarQube', 'GitHub Actions', 'Jenkins'],
    challenges: 'Driving org-wide adoption of new security tooling and SLAs across many existing applications without slowing delivery velocity.',
  },
  {
    name: 'Scheduling & Staffing Analytics Reporting Suite',
    problem: 'US healthcare customers needed accurate, decision-ready visibility into classification distribution and staffing variance from complex clinical scheduling data.',
    built: 'A suite of reporting solutions covering classification distribution and staffing variance analytics for enterprise healthcare scheduling customers.',
    approach: 'Owned the feature end-to-end — requirement gathering, analysis, design, development, testing, and deployment — performing deep analysis of complex scheduling datapoints and calculations, and building the reports with .NET, DevExpress, and ExtJS on GCP infrastructure.',
    tech: ['.NET', 'DevExpress', 'ExtJS', 'GCP', 'C#'],
    challenges: 'Translating complex, healthcare-specific scheduling calculations (classification distribution, staffing variance) into accurate, performant reports while owning every phase of delivery solo.',
  },
]

export const aiExpertise = [
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Built production RAG pipelines combining document ingestion, chunking, vector embeddings, and semantic retrieval to ground LLM responses in enterprise data.',
  },
  {
    title: 'Vector Search & Embeddings',
    description: 'Hands-on with Pinecone, pgvector, and Redis for vector storage, similarity search, and retrieval at production scale.',
  },
  {
    title: 'LLM Application Engineering',
    description: 'Integrated OpenAI models into multi-tenant products, with prompt engineering and context-aware generation tuned for enterprise chatbot use cases.',
  },
  {
    title: 'Flexible AI Deployment Models',
    description: 'Shipped the same AI platform across cloud, single-tenant, and air-gapped on-premises environments — a constraint most consumer-facing AI work never has to solve.',
  },
  {
    title: 'AI-Assisted Engineering Workflow',
    description: 'Works daily with GitHub Copilot, Claude Code, Codex, and Windsurf as part of the development workflow.',
  },
]

export const architecture = [
  {
    title: 'Cloud Architecture',
    description: 'Designed and scaled secure, highly available infrastructure across GCP (Cloud Run, Compute Engine, Cloud SQL, Memorystore, Secret Manager, Cloud Armor), Azure (Container Apps, Key Vault, Managed Identity), and AWS (ECS).',
  },
  {
    title: 'Authentication & Authorization',
    description: 'Architected OAuth 2.0, SAML, OIDC, and JWT-based authentication frameworks, including multi-IdP integrations (Ping Identity, Okta, Keycloak, CyberArk) and zero-downtime IdP migrations.',
  },
  {
    title: 'API & Backend Design',
    description: 'Designed and delivered scalable REST APIs and microservices in C# / .NET for enterprise clinical scheduling products, following MVC and layered architecture patterns.',
  },
  {
    title: 'CI/CD & Infrastructure as Code',
    description: 'Modernized delivery pipelines from Jenkins to GitHub Actions, and automated cloud and on-prem deployments using Terraform, Shell, and PowerShell.',
  },
  {
    title: 'Observability',
    description: 'Built enterprise-grade Splunk and Grafana dashboards to reduce mean time to detection (MTTD) and resolution (MTTR) in production systems.',
  },
  {
    title: 'Security Governance',
    description: 'Established proactive vulnerability governance across GitHub Advanced Security, BlackDuck, Checkmarx, and SonarQube with defined remediation SLAs.',
  },
]

export type Publication = {
  title: string
  venue: string
  year: string
  description: string
  link?: string
}

export const publications: Publication[] = [
  {
    title: 'Software Fault Diagnosis via Intelligent Data Mining Algorithms',
    venue: 'Springer Nature — Proceedings of the International Conference on Recent Trends in Computing',
    year: '2023',
    description: 'A software fault diagnosis framework using machine learning and intelligent data mining, with comparative model analysis to identify optimal fault-prediction techniques for early-stage defect detection.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-19-8825-7_56',
  },
  {
    title: 'A Pragmatic Ensemble Strategy for Missing Values Imputation in Health Records',
    venue: 'MDPI — Entropy',
    year: '2022',
    description: 'An ensemble data-imputation framework for healthcare analytics using machine learning, outperforming conventional imputation approaches and strengthening clinical prediction models.',
    link: 'https://doi.org/10.3390/e24040533',
  },
]

export const achievements = [
  { title: 'Silver Award', detail: 'Service-owner leadership for critical migration functionality at UKG', year: '2025' },
  { title: 'Winner — Spark Tank', detail: 'UKG company-wide internal hackathon (48 hours)', year: '2023' },
  { title: "Chancellor's Award & Gold Medal", detail: 'Best performance across all AKTU branches, B.Tech', year: '2022' },
  { title: 'GATE Qualified', detail: 'Computer Science and Information Technology discipline', year: '2022' },
  { title: 'Winner — SparkTech Showcase', detail: 'Converge @ Walmart', year: '2021' },
  { title: 'Winner — Smart India Hackathon', detail: 'Hardware Edition', year: '2020' },
  { title: 'Global Finalist (India)', detail: 'NASA International Space Apps Challenge', year: '2020' },
]

export const education = [
  {
    school: 'Dr. A.P.J. Abdul Kalam Technical University',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Lucknow, Uttar Pradesh',
    period: 'Aug 2018 – Jul 2022',
    detail: 'CGPA: 9.58',
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI / Engineering', href: '#ai-engineering' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
