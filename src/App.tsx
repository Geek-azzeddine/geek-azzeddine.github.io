import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Mail, Phone, Linkedin, Globe, Copy, Check,
  ChevronDown, ChevronRight, ArrowRight, Target, Users,
  Code, Server, Layers, Shield, Zap, Clock, CheckCircle2,
  AlertTriangle, MessageSquare, Wrench, ExternalLink,
  Briefcase, GraduationCap, MapPin, Calendar, Sparkles,
  Lightbulb, TrendingUp, Eye, MessageCircle, Quote
} from "lucide-react";

// Profile image URL - using the real photo from existing portfolio
const PROFILE_IMG = "https://geek-azzeddine.github.io/assets/img/webdesigner/profile-img.jpg";

// ==================== DATA ====================

const roadmapSteps = [
  {
    id: 1,
    number: "01",
    title: "Cadrage & Alignement Client",
    icon: Target,
    objectives: [
      "Comprendre les objectifs métier et la vision du client",
      "Définir le périmètre MVP vs évolutions futures",
      "Établir les critères de validation et KPIs",
      "Aligner toutes les parties prenantes sur les livrables"
    ],
    deliverables: [
      "Brief projet validé et partagé",
      "Cahier des charges fonctionnel",
      "Matrice des rôles et responsabilités",
      "Planning macro avec jalons clés"
    ],
    decision: "Prioriser le MVP sur la base du ratio valeur/effort, en reportant les features non-critiques en phase 2 pour garantir une livraison dans les délais.",
    example: "Blocage résolu : Le client souhaitait 15 fonctionnalités e-commerce en 4 semaines. J'ai structuré un MVP de 6 features essentielles livrables en 3 semaines, avec un backlog priorisé pour les 9 restantes — permettant un lancement rapide et des revenus dès le mois 1."
  },
  {
    id: 2,
    number: "02",
    title: "Architecture, Planning & Risques",
    icon: Layers,
    objectives: [
      "Choisir la stack technique adaptée (HTML/CSS/JS/PHP/WordPress/WooCommerce)",
      "Structurer les sprints et jalons de livraison",
      "Identifier les dépendances et risques techniques",
      "Préparer l'architecture serveur et le workflow de déploiement"
    ],
    deliverables: [
      "Architecture technique documentée",
      "Backlog sprint avec estimations",
      "Registre des risques et plan de mitigation",
      "Environnements dev/staging/production configurés"
    ],
    decision: "Opter pour WordPress + WooCommerce avec thème custom plutôt qu'un développement from-scratch, réduisant le time-to-market de 60% tout en maintenant la flexibilité nécessaire.",
    example: "Blocage résolu : Un plugin critique présentait un conflit avec le thème custom en staging. J'ai isolé le problème via debug progressif, identifié le hook conflictuel, et proposé un patch custom validé en 48h — sans impacter le planning."
  },
  {
    id: 3,
    number: "03",
    title: "Exécution, QA & Résolution d'imprévus",
    icon: Wrench,
    objectives: [
      "Coordonner l'équipe technique, designers et prestataires",
      "Assurer le suivi qualité à chaque livraison de sprint",
      "Diagnostiquer et résoudre les bugs/lenteurs bloquants",
      "Maintenir la communication transparente avec le client"
    ],
    deliverables: [
      "Livrables fonctionnels testés et validés",
      "Rapports d'avancement hebdomadaires",
      "Documentation technique et procédures",
      "Tests de performance et compatibilité"
    ],
    decision: "Bloquer la mise en ligne pour corriger un bug d'affichage mobile critique plutôt que livrer en l'état — en communiquant proactivement au client l'impact et le plan de résolution (24h).",
    example: "Blocage résolu : Le site affichait des temps de chargement > 8s en production. Diagnostic : requêtes SQL non-optimisées + images non-compressées. Action : mise en cache objet, optimisation des requêtes WP_Query, compression WebP — résultat : < 2s en 3 jours."
  },
  {
    id: 4,
    number: "04",
    title: "Mise en Ligne, Passation & Suivi",
    icon: Shield,
    objectives: [
      "Déployer en production de manière sécurisée",
      "Vérifier le fonctionnement post-lancement",
      "Assurer la passation et la formation client",
      "Mettre en place le suivi et l'amélioration continue"
    ],
    deliverables: [
      "Site déployé et vérifié (checklist QA)",
      "Documentation de passation complète",
      "Plan de maintenance et monitoring",
      "Roadmap d'évolutions post-lancement"
    ],
    decision: "Planifier un déploiement en heures creuses (2h du matin) avec rollback planifié, plutôt qu'en journée — minimisant l'impact utilisateur en cas de problème.",
    example: "Blocage résolu : Après migration serveur, certains formulaires de contact ne fonctionnaient plus (configuration SMTP différente). Détection via monitoring post-lancement, correction en 30 minutes avec notification proactive au client."
  }
];

const scenarios = [
  {
    id: "scope-creep",
    title: "Dérive de périmètre en cours de sprint",
    icon: AlertTriangle,
    diagnostic: "Le client demande 3 nouvelles fonctionnalités en plein sprint 2, menaçant la date de livraison et la charge de l'équipe. Analyse d'impact : +5 jours de développement, risque de qualité sur les features déjà en cours.",
    decision: "Proposer un arbitrage transparent : intégrer 1 feature critique au sprint actuel (en décalant 2 features de moindre priorité), et planifier les 2 autres en sprint 3. Mise à jour du planning partagée avec justification business.",
    communication: "Réunion de 30 min avec le client : présentation de l'impact chiffré, proposition d'arbitrage claire avec options. Le client comprend et valide le réajustement — confiance renforcée par la transparence.",
    action: "Mise à jour du backlog Jira/Trello, redistribution des tâches dans l'équipe, notification aux développeurs des priorités ajustées, et documentation de la décision pour traçabilité."
  },
  {
    id: "critical-bug",
    title: "Bug critique ou lenteur avant mise en ligne",
    icon: Zap,
    diagnostic: "À J-2 du lancement, le site affiche des temps de chargement > 10s sur mobile. Investigation : combinaison de requêtes non-optimisées, images lourdes et conflit de plugins. Impact business : perte estimée de 40% de trafic mobile.",
    decision: "Décision de décaler la mise en ligne de 48h plutôt que livrer un site non-performant. Communication immédiate au client avec plan d'action détaillé et nouvelle date ferme.",
    communication: "Appel client dans l'heure : explication technique vulgarisée, impact business chiffré, plan de résolution avec nouvelle date. Le client apprécie la proactivité et la rigueur.",
    action: "Audit performance (Lighthouse + GTmetrix), optimisation images en WebP, mise en cache Redis, désactivation plugins non-essentiels, test cross-device. Résultat : < 2.5s mobile, score Lighthouse 92+."
  },
  {
    id: "design-gap",
    title: "Écart entre vision design/client et faisabilité technique",
    icon: Eye,
    diagnostic: "Le designer propose une animation complexe (parallax multi-couches + transitions custom) qui impacte les performances et nécessite 3 semaines de développement supplémentaire. Le client adore le concept mais le budget est fixe.",
    decision: "Proposer une alternative technique qui préserve 80% de l'effet visuel avec 30% de l'effort : utilisation de CSS animations natives + intersection observer au lieu de librairies lourdes. Démonstration via prototype rapide.",
    communication: "Présentation side-by-side (version designer vs alternative optimisée) avec métriques performance. Le client choisit l'alternative après avoir compris le compromis qualité/performance.",
    action: "Création d'un prototype fonctionnel en 2 jours, validation client, intégration dans le sprint. Résultat : effet visuel préservé, performances maintenues, budget respecté."
  }
];

const caseStudies = [
  {
    id: "m-morocco",
    title: "M-Morocco",
    url: "https://m-morocco.com",
    category: "e-commerce",
    color: "#c99a1d",
    initials: "MM",
    problem: "Parcours e-commerce complexe avec gestion multi-niveaux d'accès et processus métier spécifiques nécessitant des automatisations sur-mesure.",
    roadmap: "Audit du parcours utilisateur existant → Restructuration des rôles/permissions WooCommerce → Développement d'automatisations custom (notifications, relances, reporting) → Tests UAT avec l'équipe métier.",
    blockage: "Conflit entre le plugin de membership et le workflow de commande personnalisé — résolu par le développement d'un middleware PHP léger qui orchestre les deux systèmes.",
    impact: "Parcours d'achat fluidifié, réduction de 60% des tickets support liés aux commandes, automatisations épargnant 10h/semaine de travail manuel."
  },
  {
    id: "south-cluster",
    title: "South Cluster AISBL",
    url: "https://www.southcluster.org/",
    category: "pilotage",
    color: "#2e86ab",
    initials: "SC",
    problem: "Plateforme multilingue (FR/NL/EN) avec formulaires complexes et besoin d'alignement entre multiples parties prenantes internationales.",
    roadmap: "Cadrage multilingue avec WPML → Architecture des formulaires (Contact Form 7 + custom) → Coordination avec les 3 pays membres → Recette fonctionnelle multilingue.",
    blockage: "Incohérences de traduction dans les emails transactionnels — résolu par la création d'un glossaire partagé et d'un workflow de validation traduit avant intégration.",
    impact: "Plateforme opérationnelle en 3 langues, formulaires fonctionnels avec routing intelligent, satisfaction des 3 entités membres."
  },
  {
    id: "massor-maroc",
    title: "Massor Maroc",
    url: "https://massor-maroc.ma",
    category: "pilotage",
    color: "#1a936f",
    initials: "Ma",
    problem: "Structuration digitale complète d'une entreprise en croissance : besoin d'aligner les processus opérationnels avec les outils digitaux.",
    roadmap: "Audit des processus existants → Évaluation ERPNext pour la gestion → Structuration du site vitrine WordPress → Pilotage de la transformation digitale globale.",
    blockage: "Résistance au changement sur l'adoption des outils digitaux — résolu par des sessions de formation progressives et un accompagnement terrain personnalisé.",
    impact: "Processus digitalisés, présence web professionnelle établie, équipe autonome sur les outils — évolution du rôle vers Head of E-commerce & Digital Marketing."
  },
  {
    id: "twily",
    title: "Twily",
    url: "https://twily.ma/",
    category: "pilotage",
    color: "#6c3483",
    initials: "Tw",
    problem: "Pilotage de projets web avec coordination d'équipes pluridisciplinaires (développeurs, designers, clients) et exigences de performance élevées.",
    roadmap: "Mise en place de sprints bi-hebdomadaires → Coordination quotidienne équipe/client → Audits de performance réguliers → Process de QA systématique.",
    blockage: "Désalignement entre les maquettes designer et les contraintes techniques WordPress — résolu par un atelier de conciliation design/dev avec prototypes interactifs.",
    impact: "Projets livrés dans les délais, satisfaction client mesurée, performance web optimisée (scores Lighthouse 90+)."
  },
  {
    id: "moulay-driss",
    title: "Moulay Driss",
    url: "https://moulaydriss.ma",
    category: "web",
    color: "#d4a373",
    initials: "MD",
    problem: "Expérience utilisateur à optimiser sur un site existant avec des problèmes de réactivité et de performance mobile.",
    roadmap: "Audit UX et performance → Refonte responsive mobile-first → Optimisation des assets et du chargement → Tests cross-device.",
    blockage: "Images non-optimisées et scripts bloquants ralentissant le site — résolu par lazy loading, compression WebP et defer des scripts non-critiques.",
    impact: "Temps de chargement divisé par 3, expérience mobile fluide, bounce rate réduit de 35%."
  },
  {
    id: "feedback-branding",
    title: "Feedback Branding Studio",
    url: "https://feedbackbranding.studio/",
    category: "web",
    color: "#e76f51",
    initials: "FB",
    problem: "Intégration soignée d'une identité visuelle forte dans un site web performant, avec collaboration étroite entre l'équipe branding et le développement.",
    roadmap: "Brief créatif avec l'équipe branding → Intégration pixel-perfect des maquettes → Animations subtiles respectant l'identité → Optimisation performance.",
    blockage: "Polices custom impactant le FCP (First Contentful Paint) — résolu par font-display: swap + préchargement stratégique des polices critiques.",
    impact: "Site fidèle à l'identité de marque, score performance 95+, collaboration design/dev fluide et efficace."
  },
  {
    id: "sores-africa",
    title: "Sores Africa",
    url: "https://sores.africa/",
    category: "web",
    color: "#264653",
    initials: "SA",
    problem: "Architecture web robuste pour une présence digitale africaine avec exigences de réactivité et de livraison fiable.",
    roadmap: "Architecture WordPress multisite → Configuration serveur optimisée → Intégration continue → Monitoring et alertes.",
    blockage: "Problèmes de compatibilité hébergement/plugin — résolu par migration vers un VPS optimisé WordPress avec configuration Nginx + PHP-FPM dédiée.",
    impact: "Site rapide et stable (uptime 99.9%), architecture scalable, livraison dans les délais avec documentation complète."
  }
];

const skills = {
  management: {
    title: "Gestion de Projet & Relation Client",
    icon: Briefcase,
    items: [
      "Cadrage, planification et pilotage de projets web",
      "Méthodes Agiles / Scrum",
      "Coordination d'équipes pluridisciplinaires",
      "Gestion de la relation client et communication",
      "Traduction des besoins métier en solutions",
      "Suivi des jalons, délais et qualité",
      "Arbitrage et prise de décision"
    ]
  },
  development: {
    title: "Développement Web",
    icon: Code,
    items: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "PHP & WordPress (thèmes, plugins, custom)",
      "WooCommerce & E-commerce",
      "Intégration responsive et accessibilité",
      "API REST & intégrations tierces",
      "Git / GitHub / Gitflow",
      "jQuery, React (notions), Vanilla JS"
    ]
  },
  technical: {
    title: "Performance, Serveur & Workflow IA",
    icon: Server,
    items: [
      "Administration serveur (Linux, Nginx, Apache)",
      "Déploiement, sauvegardes et sécurité",
      "Optimisation performance (Core Web Vitals)",
      "Hébergement et configuration DNS/SSL",
      "Workflow assisté par IA (prototypage, debug)",
      "Audit SEO technique",
      "Monitoring et maintenance proactive"
    ]
  }
};

const experience = [
  {
    period: "2023 — Présent",
    role: "Head of E-commerce & Digital Marketing",
    company: "Massor Maroc SARL & Pool Bath & Spa",
    description: "Évolution du rôle de Responsable Transformation Digitale vers Head of E-commerce. Évaluation et personnalisation ERPNext, structuration des processus, pilotage digital et coordination inter-équipes."
  },
  {
    period: "2022 — 2023",
    role: "Web Consultant | Problem Solving Specialist",
    company: "Urban Fusion Agency",
    description: "Gestion et optimisation WordPress, administration serveur, hébergement, déploiements, sauvegardes, sécurité, performance et collaboration client/équipe."
  },
  {
    period: "2021 — 2022",
    role: "Web Project Manager",
    company: "Twily LLC",
    description: "Planification, exécution et livraison de projets web. Coordination développeurs/designers/clients, suivi des plannings, audits de performance et résolution de problèmes techniques."
  },
  {
    period: "2020 — 2021",
    role: "Team Builder | IT Consulting | WordPress Specialist",
    company: "INPRIVATE.MA",
    description: "Constitution et encadrement d'équipes pluridisciplinaires, conseil IT et gestion multi-projets WordPress."
  },
  {
    period: "2019 — 2020",
    role: "WordPress Specialist & Full-Stack Designer",
    company: "CloudLink",
    description: "Développement WordPress sur-mesure, design full-stack et intégration avancée."
  },
  {
    period: "2018 — 2019",
    role: "Lead WordPress Developer & Internship Mentor",
    company: "QALQUL",
    description: "Développement WordPress avancé, encadrement de stagiaires et mentoring technique."
  },
  {
    period: "2017 — 2018",
    role: "Team Leader & WordPress Developer",
    company: "Cloudme BI",
    description: "Leadership technique d'équipe de développement et projets WordPress complexes."
  },
  {
    period: "2015 — 2017",
    role: "Full-Stack Designer & Front-End Developer",
    company: "Lysah Export",
    description: "Design UI/UX, intégration front-end et développement web responsive."
  },
  {
    period: "2014 — 2015",
    role: "Full-Stack Web Developer",
    company: "USCODEC TELECOM",
    description: "Développement web full-stack, collecte de spécifications et maintenance d'applications."
  }
];

// ==================== COMPONENTS ====================

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("azzeddine.lahlil@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const navLinks = [
    { href: "#roadmap", label: "ROADMAP" },
    { href: "#decisions", label: "DÉCISIONS" },
    { href: "#etudes-de-cas", label: "ÉTUDES DE CAS" },
    { href: "#parcours", label: "PARCOURS" },
    { href: "#contact", label: "CONTACT" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-900 font-bold text-sm">
            AL
          </div>
          <span className="font-semibold text-white hidden sm:block">Azzeddine LAHLIL</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm hover:bg-gold-500/20 transition-all duration-200"
          >
            {emailCopied ? <Check size={14} /> : <Copy size={14} />}
            {emailCopied ? "Copié !" : "Copier l'email"}
          </button>
          <a href="#contact" className="hidden sm:block px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-200">
            Me contacter
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gold-400 py-3 px-4 rounded-lg hover:bg-white/5 transition-all">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 text-center px-4 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold">
                Me contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-sm text-gold-300">+10 ans d'expérience en pilotage web</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-white">Chef de Projet Web</span>
              <br />
              <span className="gradient-text font-serif italic">Pilotage, Relation Client</span>
              <br />
              <span className="text-white">&amp; Résolution de Problèmes</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Double expertise <strong className="text-white">pilotage de projets</strong> et <strong className="text-white">stack technique web</strong> (HTML, CSS, JS, PHP, WordPress/WooCommerce). 
              Je transforme les besoins métier en solutions digitales livrées dans les délais, avec qualité et transparence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#roadmap" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300">
                Découvrir ma roadmap
                <ArrowRight size={16} />
              </a>
              <a href="#etudes-de-cas" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-all duration-300">
                Explorer les études de cas
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "10+", label: "Années d'expérience" },
                { value: "30+", label: "Projets livrés" },
                { value: "3", label: "Langues (FR/EN/AR)" },
                { value: "100%", label: "Orienté résultats" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-dark-700/50 border border-dark-600/50">
                  <div className="text-xl font-bold text-gold-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-gold-500/30 gold-glow">
                <img 
                  src={PROFILE_IMG} 
                  alt="Azzeddine LAHLIL" 
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://image.qwenlm.ai/generated-images/820dbac3-fa5d-4165-84e7-b70bab2865c1/_result.png"; }}
                />
              </div>
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-8 glass rounded-xl p-3 flex items-center gap-2"
              >
                <Target size={18} className="text-gold-400" />
                <span className="text-xs text-gray-300">Gestion de Projet</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-8 glass rounded-xl p-3 flex items-center gap-2"
              >
                <Code size={18} className="text-gold-400" />
                <span className="text-xs text-gray-300">Stack Web</span>
              </motion.div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-12 glass rounded-xl p-3 flex items-center gap-2"
              >
                <Users size={18} className="text-gold-400" />
                <span className="text-xs text-gray-300">Relation Client</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Ma méthode</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Roadmap Projet Interactive</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chaque projet suit une méthodologie éprouvée en 4 étapes, garantissant alignement, qualité et livraison dans les délais.
          </p>
        </motion.div>

        {/* Step selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/40 gold-glow"
                    : "bg-dark-700/50 border border-dark-600/50 hover:border-gold-500/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold ${activeStep === index ? "text-gold-400" : "text-gray-500"}`}>
                    {step.number}
                  </span>
                  <Icon size={18} className={activeStep === index ? "text-gold-400" : "text-gray-500"} />
                </div>
                <h3 className={`text-sm font-semibold ${activeStep === index ? "text-white" : "text-gray-400"}`}>
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-gold-400 font-serif text-2xl">{roadmapSteps[activeStep].number}</span>
                  {roadmapSteps[activeStep].title}
                </h3>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">Objectifs</h4>
                  <ul className="space-y-2">
                    {roadmapSteps[activeStep].objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">Livrables</h4>
                  <ul className="space-y-2">
                    {roadmapSteps[activeStep].deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <ChevronRight size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-dark-800/80 border border-gold-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} className="text-gold-400" />
                    <h4 className="text-sm font-semibold text-gold-400">Décision clé du Chef de Projet</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{roadmapSteps[activeStep].decision}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-800/80 border border-gold-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench size={16} className="text-gold-400" />
                    <h4 className="text-sm font-semibold text-gold-400">Exemple concret — Blocage résolu</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{roadmapSteps[activeStep].example}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PlaybookSection() {
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <section id="decisions" className="py-24 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Playbook</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Prise de Décision & Résolution de Problèmes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des scénarios concrets d'agence web illustrant ma méthodologie de diagnostic, arbitrage et action.
          </p>
        </motion.div>

        {/* Scenario selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeScenario === index
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 shadow-lg shadow-gold-500/25"
                    : "bg-dark-700/80 border border-dark-600 text-gray-400 hover:border-gold-500/30 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {scenario.title}
              </button>
            );
          })}
        </div>

        {/* Scenario content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { label: "Diagnostic", icon: Eye, content: scenarios[activeScenario].diagnostic, color: "text-blue-400" },
              { label: "Décision & Arbitrage", icon: Target, content: scenarios[activeScenario].decision, color: "text-gold-400" },
              { label: "Communication Client", icon: MessageSquare, content: scenarios[activeScenario].communication, color: "text-green-400" },
              { label: "Action Technique", icon: Wrench, content: scenarios[activeScenario].action, color: "text-purple-400" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-dark-800 ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className={`font-semibold text-sm ${item.color}`}>{item.label}</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tous" },
    { id: "e-commerce", label: "E-Commerce & Logique Métier" },
    { id: "pilotage", label: "Pilotage & Transformation" },
    { id: "web", label: "Web, Identité & Performance" }
  ];

  const filteredStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(s => s.category === activeFilter);

  return (
    <section id="etudes-de-cas" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Études de Cas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des projets réels illustrant le problème, la décision, le blocage résolu et l'impact mesurable.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900"
                  : "bg-dark-700/80 border border-dark-600 text-gray-400 hover:border-gold-500/30 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 group"
              >
                {/* Header with logo/brand */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: study.color + "22", border: `1px solid ${study.color}44` }}
                    >
                      <span style={{ color: study.color }}>{study.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-gold-400 transition-colors">{study.title}</h3>
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gold-400 flex items-center gap-1 transition-colors">
                        {study.url.replace("https://", "")} <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-red-400/80 uppercase tracking-wider">Problème</span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gold-400/80 uppercase tracking-wider">Roadmap & Décision</span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{study.roadmap}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-400/80 uppercase tracking-wider">Blocage Résolu</span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{study.blockage}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-400/80 uppercase tracking-wider">Impact</span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{study.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="parcours" className="py-24 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Compétences & Parcours</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une double compétence en gestion de projet web et développement technique, enrichie par 10+ ans de terrain.
          </p>
        </motion.div>

        {/* Skills cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {Object.values(skills).map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gold-500/10">
                    <Icon size={22} className="text-gold-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{skillGroup.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={12} className="text-gold-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Experience timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Parcours Professionnel</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent"></div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-xl p-5 inline-block text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={12} className="text-gold-400" />
                        <span className="text-xs text-gold-400 font-medium">{exp.period}</span>
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{exp.role}</h4>
                      <p className="text-xs text-gold-400/80 mb-2">{exp.company}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-gold-500 border-2 border-dark-900 top-6"></div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={22} className="text-gold-400" />
            <h3 className="font-semibold text-white">Formation</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-dark-800/50">
              <h4 className="text-sm font-semibold text-white mb-1">Technicien en Gestion Informatisée</h4>
              <p className="text-xs text-gray-400">Diplôme d'État — Gestion, développement et administration systèmes</p>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/50">
              <h4 className="text-sm font-semibold text-white mb-1">Baccalauréat Sciences Humaines</h4>
              <p className="text-xs text-gray-400">Formation générale — Esprit analytique et communication</p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-xl bg-dark-800/50">
            <h4 className="text-sm font-semibold text-white mb-1">Certifications & Méthodes</h4>
            <p className="text-xs text-gray-400">Méthodes Agiles / Scrum • Workflow IA (structuration, revue/debugging, prototypage rapide) • Formation continue en management de projet digital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Discutons de votre projet</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Disponible en présentiel à Casablanca. N'hésitez pas à me contacter pour échanger sur vos besoins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={20} className="text-gold-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Email</h4>
            <p className="text-xs text-gray-400 mb-3 break-all">azzeddine.lahlil@gmail.com</p>
            <button
              onClick={() => copyToClipboard("azzeddine.lahlil@gmail.com", "email")}
              className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              {emailCopied ? <><Check size={12} /> Copié !</> : <><Copy size={12} /> Copier</>}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
              <Phone size={20} className="text-gold-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Téléphone</h4>
            <p className="text-xs text-gray-400 mb-3">+212 625 350 050</p>
            <button
              onClick={() => copyToClipboard("+212625350050", "phone")}
              className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              {phoneCopied ? <><Check size={12} /> Copié !</> : <><Copy size={12} /> Copier</>}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
              <Linkedin size={20} className="text-gold-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">LinkedIn</h4>
            <p className="text-xs text-gray-400 mb-3">geekazzeddine</p>
            <a
              href="https://ma.linkedin.com/in/geekazzeddine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              <ExternalLink size={12} /> Voir le profil
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
              <MapPin size={20} className="text-gold-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Localisation</h4>
            <p className="text-xs text-gray-400 mb-3">Casablanca & Marrakech, Maroc</p>
            <span className="inline-flex items-center gap-1 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Disponible — Présentiel
            </span>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="mailto:azzeddine.lahlil@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 text-sm"
          >
            <Mail size={16} />
            Envoyer un email
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-dark-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-900 font-bold text-xs">
              AL
            </div>
            <span className="text-sm text-gray-400">Azzeddine LAHLIL — Chef de Projet Web</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://ma.linkedin.com/in/geekazzeddine" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://azzeddinelahlil.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold-400 transition-colors">
              <Globe size={18} />
            </a>
            <a href="mailto:azzeddine.lahlil@gmail.com" className="text-gray-500 hover:text-gold-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-600">© 2024 — Conçu et développé avec passion</p>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <div className="noise-overlay"></div>
      <Navigation />
      <main>
        <HeroSection />
        <RoadmapSection />
        <PlaybookSection />
        <CaseStudiesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
