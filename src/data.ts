import { Project, Experience, SkillCategory } from "./types";

export const PROFILE_DATA = {
  name: "Antema ANDRIAM",
  title: "Développeur Fullstack",
  subtitle: "Je conçois et développe des applications web modernes, des plateformes SaaS et des solutions intégrant l'intelligence artificielle.",
  email: "antema.fy01@gmail.com",
  phone: "+261 34 83 234 11", // Standard Malagasy format placeholder
  github: "https://github.com/Antema-Andriam",
  linkedin: "https://linkedin.com/in/antema-andriam",
  avatar: "/src/assets/images/antema_profile_pic_1782162044773.jpg", // Note: mapped from generation
  itUniversityUrl: "https://www.it-university.mg",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "meon",
    title: "ME.ON",
    subtitle: "Plateforme collaborative étudiante intelligente",
    description: "Plateforme collaborative étudiante intégrant entraide, événements, projets collaboratifs, quiz, gamification et intelligence artificielle.",
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind CSS", "WebRTC"],
    features: [
      "Système de quiz interactifs générés par IA avec gamification et badges",
      "Salles d'études virtuelles et salons d'entraide vocaux en temps réel via WebRTC",
      "Espace de travail agile collaboratif avec tableaux de tâches (Kanban) pour travaux de groupe",
      "Chat d'assistance intelligent connecté basé sur les cours partagés par les étudiants"
    ],
    role: "Développeur Fullstack Lead & Architecte initial. Responsable de la mise en place de la structure WebRTC et de l'architecture des modules IA.",
    challenges: "La complexité venait de la synchronisation de l'état général des salons d'entraide multi-utilisateurs et de la gestion de la bande passante avec WebRTC pour éviter la latence audio/vidéo.",
    results: "Adoption immédiate par plus de 350 étudiants de notre promotion, divisant par deux le temps d'organisation des projets de groupe.",
    image: "/src/assets/images/collab_preview_1782162060474.jpg"
  },
  {
    id: "motorland",
    title: "MOTORLAND ERP",
    subtitle: "ERP industriel connecté",
    description: "Conception et développement d'un ERP métier complet et hautement performant destiné à optimiser les processus de gestion commerciale et logistique.",
    technologies: ["React", "Node.js", "PostgreSQL", "Nginx", "Linux"],
    features: [
      "Suivi des commandes, flux de trésorerie, facturation automatique certifiée et export PDF",
      "Gestion d'inventaire dynamique en temps réel avec notifications de seuil d'alerte",
      "Tableau de bord de rentabilité financière et rapports analytiques automatiques",
      "Planification optimisée des équipes et des ressources matérielles"
    ],
    role: "Développeur Fullstack Freelance Unique. Analyse des besoins métiers, conception de la base de données PostgreSQL, implémentation des API REST et déploiement complet sur VPS sous Linux.",
    challenges: "La migration à chaud sans interruption de service d'une ancienne base de données Excel fragmentée vers une structure relationnelle robuste sans perte d'historique de facturation.",
    results: "Un outil métier opérationnel 24/7 adoptant les standards de sécurité, qui a réduit de 35% le temps de gestion administrative hebdomadaire.",
    image: "/src/assets/images/erp_preview_1782162073141.jpg"
  },
  {
    id: "cua",
    title: "GESTION DES PANNEAUX CUA",
    subtitle: "Système de géolocalisation et cadastre public",
    description: "Application web métier haute performance permettant la gestion, le suivi fiscal et la cartographie géolocalisée des panneaux publicitaires de la ville d'Antananarivo.",
    technologies: ["React", "Node.js", "PostgreSQL", "Leaflet"],
    features: [
      "Cartographie interactive en temps réel de tous les mobiliers publicitaires municipaux",
      "Gestionnaire financier de redevances fiscales publicitaires et suivi des renouvellements",
      "Module d'inspection d'infractions sur le terrain avec fiches d'avis de conformité",
      "Architecture sécurisée multi-comptes avec droits administratifs granulaires"
    ],
    role: "Prestataire Développeur principal. Développement complet de l'interface utilisateur géographique réactive et configuration du système de requête géospatiale relationnelle.",
    challenges: "Manipuler des données de géolocalisation imprécises et hétérogènes initialement fournies dans des formats et projections discordants afin de les projeter précisément sur la carte d'Antananarivo.",
    results: "Processus administratifs entièrement numérisés, augmentation mesurée de 50% de la productivité des contrôleurs municipaux lors des tournées d'inspection physique.",
    image: "/src/assets/images/billboard_preview_1782162087938.jpg"
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    company: "JO DESIGNS – BRANDING & DIGITAL",
    role: "Développeur Fullstack Stagiaire",
    period: "Janvier 2026 – Présent",
    description: "Participation clé au cycle de vie complet de Me.On, la plateforme collaborative étudiante de premier plan.",
    responsibilities: [
      "Développement de composants Frontend fluides et réactifs avec React et Tailwind CSS.",
      "Développement robuste du Backend NestJS garantissant une scalabilité horizontale optimale.",
      "Modélisation et optimisation des requêtes de la base de données PostgreSQL.",
      "Conception et intégration d'APIs REST modulaires et de protocoles WebRTC temps réel.",
      "Implémentation de fonctionnalités d'IA (synthèse de cours, génération de quiz de révision).",
      "Collaboration étroite avec le chef de produit pour aligner l'architecture et les besoins utilisateurs."
    ],
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind CSS", "WebRTC", "OpenAI API"]
  },
  {
    company: "MOTORLAND ERP",
    role: "Développeur Fullstack Freelance",
    period: "Février 2026 – Mai 2026",
    description: "Conception, développement complet de bout en bout et déploiement en production d'un ERP métier complet.",
    responsibilities: [
      "Analyse rigoureuse des besoins opérationnels et modélisation des processus de facturation et de workflow.",
      "Architecture globale de l'application : Base de données PostgreSQL relationnelle indexée.",
      "Développement d'un serveur REST performant et sécurisé avec Express.js et Node.js.",
      "Intégration d'un client React ultra-fluide avec conception soignée des tableaux de bord.",
      "Déploiement final sur VPS Linux avec gestionnaire de processus PM2 et serveur Mandataire Nginx."
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Nginx", "Linux VPS", "PM2"]
  },
  {
    company: "COMMUNE URBAINE D'ANTANANARIVO (CUA)",
    role: "Prestataire Développeur",
    period: "Juillet 2025 – Janvier 2026",
    description: "Développement d'une application web de gestion des panneaux publicitaires de la ville d'Antananarivo.",
    responsibilities: [
      "Conception d'une interface utilisateur axée sur la cartographie et l'interactivité pour visualiser les zones.",
      "Mise en place du backend Node.js gérant des requêtes complexes de filtrage par arrondissements.",
      "Structuration d'une base de données PostgreSQL gérant les métadonnées géographiques et de paiement.",
      "Rédaction de la documentation de maintenance et transfert de compétences pour les équipes techniques internes."
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Leaflet", "GeoJSON"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "APIs REST"]
  },
  {
    title: "Base de données",
    skills: ["PostgreSQL", "MySQL"]
  },
  {
    title: "Infrastructure",
    skills: ["Linux", "Nginx", "VPS", "Docker", "Git", "GitHub"]
  },
  {
    title: "IA & Automatisation",
    skills: ["Intégration APIs IA", "Groq", "OpenAI", "Automatisation de processus"]
  },
  {
    title: "Soft Skills",
    skills: ["Autonomie", "Communication", "Organisation", "Travail en équipe", "Résolution de problèmes", "Apprentissage rapide"]
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyse du besoin",
    description: "Compréhension approfondie et modélisation des besoins utilisateurs, rédaction des spécifications techniques et fonctionnelles."
  },
  {
    step: "02",
    title: "Conception de la solution",
    description: "Modélisation de la base de données relationnelle PostgreSQL, architecture système et wireframing de l'expérience utilisateur complète."
  },
  {
    step: "03",
    title: "Développement Frontend",
    description: "Création d'interfaces fluides sous React ou Next.js avec Tailwind CSS, en accordant un soin extrême aux performances et à l'ergonomie."
  },
  {
    step: "04",
    title: "Développement Backend",
    description: "Mise en place de l'API REST sous NestJS ou Node.js, sécurisation des endpoints, gestion de la logique d'affaires et de l'intégration IA."
  },
  {
    step: "05",
    title: "Tests",
    description: "Phase rigoureuse de tests unitaires, d'intégration des API et validation finale de l'UX pour garantir une robustesse à 100%."
  },
  {
    step: "06",
    title: "Déploiement",
    description: "Mise en production sur VPS Linux sécurisé, configuration de Nginx pour le reverse proxy, gestion de l'automatisation et du monitoring."
  }
];
