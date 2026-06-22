import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Code2, 
  Briefcase, 
  Layers, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Menu, 
  X, 
  FileText, 
  ExternalLink, 
  Cpu, 
  GraduationCap, 
  Send,
  Printer,
  ChevronDown,
  Clock,
  Database,
  Eye,
  Play,
  Terminal,
  TrendingUp,
  Building,
  Check
} from "lucide-react";

import { PROFILE_DATA, PROJECTS_DATA, EXPERIENCES_DATA, SKILL_CATEGORIES, WORK_PROCESS_STEPS } from "./data";
import ProjectGallery from "./components/ProjectGallery";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("meon");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [utcTime, setUtcTime] = useState("");
  
  // Contact Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [savedMessages, setSavedMessages] = useState<any[]>([]);

  // Track scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update Madagascar Real-Time clocks
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as French locale for clean representation
      setUtcTime(now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hydrate recruiter messages from local storage
  useEffect(() => {
    const stored = localStorage.getItem("antema_portfolio_messages");
    if (stored) {
      try {
        setSavedMessages(JSON.parse(stored));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setFormSubmitting(true);
    setTimeout(() => {
      const newMsg = {
        name: formName,
        email: formEmail,
        message: formMessage,
        date: new Date().toLocaleDateString("fr-FR"),
        time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
      };
      
      const stored = [...savedMessages, newMsg];
      setSavedMessages(stored);
      localStorage.setItem("antema_portfolio_messages", JSON.stringify(stored));

      setFormSubmitting(false);
      setContactSuccess(true);
      
      // Clear inputs
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 1000);
  };

  const clearMessages = () => {
    localStorage.removeItem("antema_portfolio_messages");
    setSavedMessages([]);
  };

  // Find currently active project in spotlight
  const activeSelectedProject = PROJECTS_DATA.find(p => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <div className="min-h-screen bg-gray-50/40 text-gray-900 selection:bg-neutral-900 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Ambient glassmorphic glowing blobs in the background for depth and high visual appeal */}
      <div className="absolute top-24 left-1/12 w-[380px] h-[380px] bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute top-[680px] right-1/10 w-[420px] h-[420px] bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[12000ms]" />
      <div className="absolute bottom-[500px] left-1/4 w-[350px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-neutral-950 z-50 transition-all duration-300 pointer-events-none" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Modern Sleek Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 transition-colors">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Title Area */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-950 to-indigo-950 flex items-center justify-center text-white font-display font-bold tracking-wider text-sm transition-transform duration-300 group-hover:rotate-12 shadow ring-2 ring-indigo-100">
              AA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-gray-950 font-display">Antema ANDRIAM</span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold uppercase">Portfolio Workspace</span>
            </div>
          </a>

          {/* Core Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#6c6767]">
            <a href="#about" className="hover:text-neutral-950 transition-colors">Workspace</a>
            <a href="#experiences" className="hover:text-neutral-950 transition-colors">Expériences</a>
            <a href="#skills" className="hover:text-neutral-950 transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-neutral-950 transition-colors font-bold text-neutral-950 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Projets
            </a>
            <a href="#workflow" className="hover:text-neutral-950 transition-colors">Processus</a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
          </nav>

          {/* Clock + PDF Resume Download */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-gray-100 border border-gray-200/50 rounded-full py-1.5 px-3 flex items-center gap-1.5 font-mono text-xxs text-gray-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>MAD WORKSTATION :</span>
              <span className="text-gray-900 font-bold">{utcTime || "13:59"}</span>
            </div>
            <button 
              onClick={() => setCvModalOpen(true)}
              className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Mon CV</span>
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-950 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3.5 flex flex-col text-sm font-semibold text-[#6c6767] shadow-lg"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Workspace</a>
              <a href="#experiences" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Expériences</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Compétences</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Projets</a>
              <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Processus</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-neutral-950 transition-colors">Contact</a>
              
              <div className="pt-3 border-t border-gray-150 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xxs font-mono text-gray-500">
                  <span>Antananarivo :</span>
                  <span>{utcTime || "13:59"}</span>
                </div>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setCvModalOpen(true); }}
                  className="bg-neutral-950 text-white text-xs font-semibold py-2.5 rounded-xl text-center w-full shadow flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger mon CV (PDF)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Grid Workspace Dashboard Layout Container */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-8">

        {/* TOP COMPONENT: DESIGN HERO STATEMENT BANNER */}
        <div id="about" className="bg-gradient-to-br from-white via-white to-indigo-50/[0.12] rounded-3xl border border-indigo-100/40 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl text-center md:text-left">
            {/* Fine round professional portrait */}
            <div className="relative shrink-0">
              {/* Vivid gradient soft glowing background outer-ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 rounded-full blur-md opacity-40 animate-pulse"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow bg-gray-50 ring-4 ring-indigo-100/50">
                <img 
                  src={PROFILE_DATA.avatar} 
                  alt="Antema ANDRIAM - Portrait professionnel" 
                  className="w-full h-full object-cover scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" title="Disponible immédiatement"></span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="text-xxs font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-100/80 px-2 py-1 rounded">
                  Fullstack Engineer
                </span>
                <span className="text-xxs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100/40 px-2 py-1 rounded">
                  Licence Informatique IT University
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight bg-gradient-to-r from-gray-950 via-slate-900 to-indigo-700 bg-clip-text text-transparent pb-0.5">
                Antema ANDRIAM
              </h1>
              
              <p className="text-sm md:text-base text-[#6c6767] leading-relaxed max-w-2xl font-light">
                {PROFILE_DATA.subtitle}
              </p>

              <p className="text-xs text-gray-400">
                Basé à <span className="font-semibold text-gray-600">Paris / Antananarivo</span> • Rigoureux d'esprit, autonome et passionné d'architecture modulaire et d'intelligence artificielle.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px] w-full lg:w-auto">
            <button
              onClick={() => setCvModalOpen(true)}
              className="bg-white hover:bg-gray-50 text-neutral-900 border border-gray-200 text-xs font-semibold py-3 px-5 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer w-full text-center"
            >
              <Download className="w-4 h-4 text-gray-500" />
              <span>Curriculum Vitae (PDF)</span>
            </button>
            <a
              href="#contact"
              className="bg-gradient-to-r from-neutral-950 to-indigo-950 hover:from-indigo-950 hover:to-neutral-950 text-white font-semibold text-xs py-3 px-5 rounded-2xl transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer w-full"
            >
              <Mail className="w-4 h-4 text-gray-300" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>

        {/* CORE GRID SYSTEM: SLEEK 3-COLUMN CONTROL DASHBOARD SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: LEFT SIDEBAR IDENTITY & STATISTICS (xl:col-span-3) */}
          <div className="lg:col-span-12 xl:col-span-3 space-y-6">
            
            {/* Identity & Social Channels Widget */}
            <div className="bg-white rounded-3xl border border-gray-100/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-5">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-2">
                // Coordonnées & Liens
              </h3>
              
              <div className="space-y-4 text-xs font-medium">
                <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-3 text-[#6c6767] hover:text-neutral-950 transition-colors">
                  <span className="p-2 bg-gray-50 rounded-lg text-gray-400"><Mail className="w-4 h-4" /></span>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Email professionnel</p>
                    <p className="font-semibold text-gray-700 truncate">{PROFILE_DATA.email}</p>
                  </div>
                </a>

                <a href={`tel:${PROFILE_DATA.phone}`} className="flex items-center gap-3 text-[#6c6767] hover:text-neutral-950 transition-colors">
                  <span className="p-2 bg-gray-50 rounded-lg text-gray-400"><Phone className="w-4 h-4" /></span>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">Téléphone / WhatsApp</p>
                    <p className="font-semibold text-gray-700">{PROFILE_DATA.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#6c6767]">
                  <span className="p-2 bg-gray-50 rounded-lg text-gray-400"><MapPin className="w-4 h-4" /></span>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">IT university</p>
                    <a href={PROFILE_DATA.itUniversityUrl} target="_blank" rel="noreferrer" className="font-semibold text-gray-700 hover:underline inline-flex items-center gap-1">
                      Antananarivo, M/car <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                <a 
                  href={PROFILE_DATA.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 hover:bg-neutral-950 hover:text-white rounded-xl text-xs text-[#6c6767] transition-all font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={PROFILE_DATA.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 hover:bg-[#0077b5] hover:text-white rounded-xl text-xs text-[#6c6767] transition-all font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Micro Statistics Card */}
            <div className="bg-white rounded-3xl border border-gray-100/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-4">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-2">
                // Chiffres Clés
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                  <div>
                    <p className="text-xl font-bold font-display text-gray-950">3+</p>
                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase">Projets majeurs</p>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                  <div>
                    <p className="text-xl font-bold font-display text-gray-950">3</p>
                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase">Expériences pro</p>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                </div>

                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                  <div>
                    <p className="text-xl font-bold font-display text-gray-950">Fullstack</p>
                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase">React • Node • SQL</p>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                </div>
              </div>
            </div>

            {/* Academic Education Detail */}
            <div className="bg-white rounded-3xl border border-gray-100/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-4">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-2">
                // Academic Context
              </h3>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-950 leading-tight">IT University Madagascar</h4>
                    <p className="text-[11px] font-mono text-gray-500 uppercase mt-0.5 font-bold">Licence Informatique • 2023 – 2026</p>
                    <p className="text-xxs text-gray-400 leading-normal mt-1">
                      Reconnue pour la rigueur de sa formation pratique et théorique en développement de solutions web, algorithmique et bases de données PostgreSQL.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 2: MIDDLE PANEL - SKILLS & EXPERIENCE TIMELINE (xl:col-span-4) */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-6">
            
            {/* COMPÉTENCES BLOCK - 6-Categories with micro formatting */}
            <div id="skills" className="bg-white rounded-3xl border border-gray-100/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-5">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                  // Compétences techniques
                </h3>
                <span className="px-2 py-0.5 font-mono text-[9px] bg-emerald-50 text-emerald-800 rounded-md font-semibold">Ready for production</span>
              </div>

              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                {SKILL_CATEGORIES.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-xxs font-mono font-bold uppercase tracking-wider text-neutral-950 flex items-center justify-between">
                      <span>{category.title}</span>
                      <span className="text-gray-400">0{index + 1}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => {
                        const isMainSkill = ["React", "NestJS", "Node.js", "PostgreSQL", "APIs REST", "Intégration APIs IA", "Next.js", "TypeScript"].includes(skill);
                        return (
                          <span 
                            key={sIdx} 
                            className={`px-2 py-1.5 rounded-lg text-xxs font-medium transition-colors ${
                              isMainSkill 
                                ? "bg-neutral-900 text-white font-semibold shadow-2xs" 
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE TIMELINE WIDGET - Pristine and premium */}
            <div id="experiences" className="bg-white rounded-3xl border border-gray-100/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-6">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-2">
                // Parcours Professionnel
              </h3>

              <div className="relative space-y-6 pl-4 border-l-2 border-gray-100">
                {EXPERIENCES_DATA.map((exp, idx) => (
                  <div key={idx} className="relative space-y-2">
                    {/* Tiny visual node bullet in timeline */}
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-neutral-950 ring-4 ring-white" />
                    
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-gray-950">{exp.company}</h4>
                        <p className="text-xxs font-mono text-indigo-700 font-bold uppercase mt-0.5">{exp.role}</p>
                      </div>
                      <span className="font-mono text-[9px] text-[#6c6767] font-semibold whitespace-nowrap bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-500 leading-normal italic">
                      "{exp.description}"
                    </p>

                    {/* Key responsibilities preview */}
                    <div className="space-y-1 pt-1">
                      {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <p key={rIdx} className="text-xxs text-[#6c6767] flex items-start gap-1">
                          <span className="text-neutral-900">•</span>
                          <span className="truncate">{resp}</span>
                        </p>
                      ))}
                      {exp.responsibilities.length > 3 && (
                        <p className="text-[10px] text-gray-400 font-mono italic pl-2">
                          + {exp.responsibilities.length - 3} autres responsabilités clés... (En savoir plus via PDF)
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 3: RIGHT PANEL - EXPERIMENT & WORKSPACE SPOTLIGHT PANEL (xl:col-span-5) */}
          <div id="projects" className="lg:col-span-12 xl:col-span-5 space-y-6">
            
            {/* Projects selector row */}
            <div className="bg-white/85 backdrop-blur-sm rounded-3xl border border-indigo-100/45 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                  // Choisir un projet à inspecter
                </h3>
                <span className="text-xxs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/40 px-2 py-0.5 rounded-md">3 PROJETS_DISPONIBLES</span>
              </div>

              {/* Responsive Project Picker Pills */}
              <div className="grid grid-cols-3 gap-2.5">
                {PROJECTS_DATA.map((project) => (
                  <button 
                    key={project.id}
                    onClick={() => setSelectedProjectId(project.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      selectedProjectId === project.id 
                        ? "bg-gradient-to-br from-neutral-950 via-slate-900 to-indigo-950 border-indigo-950 text-white shadow-md shadow-indigo-950/20 scale-102" 
                        : "bg-gray-50/80 border-gray-150 hover:bg-gray-150 hover:border-gray-250 text-gray-800 hover:scale-101"
                    }`}
                  >
                    {selectedProjectId === project.id && (
                      <span className="absolute top-2 right-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                    <span className={`text-[9px] font-mono uppercase font-bold tracking-wider ${selectedProjectId === project.id ? "text-indigo-300" : "text-[#6c6767]"}`}>
                      {project.id === "meon" ? "Collaboration" : project.id === "motorland" ? "ERP Métier" : "Géolocalisation"}
                    </span>
                    <span className="text-xs font-bold font-display tracking-tight mt-1 leading-none">{project.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Selected Project Details & Simulator Sandbox Spotlight */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-indigo-100/30 p-6 shadow-[0_12px_44px_rgba(0,0,0,0.018)] space-y-6 transition-all duration-500 hover:border-indigo-100/70">
              
              {/* Project Heading metadata block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xxs font-mono font-bold text-[#6c6767] uppercase tracking-wider">
                    // PROJET ACTIF SELECTIONNÉ
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-bold">
                    Interactive Workspace
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold font-display tracking-tight text-neutral-950 leading-tight">
                  {activeSelectedProject.title}
                </h2>
                
                <p className="text-xs font-mono font-bold text-indigo-600">
                  {activeSelectedProject.subtitle}
                </p>
              </div>

              {/* Embedded Project Sandbox Gallery */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-xs bg-gray-50">
                <ProjectGallery project={activeSelectedProject} />
              </div>

              {/* Text Description of the project */}
              <div className="space-y-4 pt-1">
                <p className="text-xs md:text-sm text-[#6c6767] leading-relaxed font-light">
                  {activeSelectedProject.description}
                </p>

                {/* Grid of highlights & role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xxs font-mono text-gray-400 uppercase tracking-widest font-bold mb-2">[ Fonctionnalités ]</p>
                    <div className="space-y-1.5">
                      {activeSelectedProject.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1 text-[11px] text-[#6c6767] leading-normal">
                          <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3 flex flex-col justify-between">
                    <div>
                      <p className="text-xxs font-mono text-gray-400 uppercase tracking-widest font-bold mb-1">[ Mon Rôle ]</p>
                      <p className="text-[11px] text-[#6c6767] leading-normal font-medium">
                        {activeSelectedProject.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-200/50">
                      {activeSelectedProject.technologies.map((t, tIdx) => (
                        <span key={tIdx} className="bg-white border border-gray-150 text-gray-900 font-semibold font-mono text-xxs px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50/40 border border-amber-100 p-4 rounded-2xl">
                    <span className="text-xxs font-mono text-amber-800 uppercase tracking-widest block font-bold mb-1">⚠️ Difficultés</span>
                    <p className="text-amber-950 leading-normal text-[11px] font-normal">{activeSelectedProject.challenges}</p>
                  </div>
                  <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-2xl">
                    <span className="text-xxs font-mono text-emerald-800 uppercase tracking-widest block font-bold mb-1">🏆 Résultats</span>
                    <p className="text-emerald-950 leading-normal text-[11px] font-bold">{activeSelectedProject.results}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION 1: WORKSPACE PIPELINE WORKFLOW (6-Step Cycle Layout) */}
        <div id="workflow" className="bg-white rounded-3xl border border-gray-100/80 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-8">
          
          <div className="max-w-2xl text-left space-y-1">
            <span className="text-xxs font-mono tracking-widest text-[#6c6767] font-bold uppercase block">// PIPELINE DE PRODUCTION</span>
            <h3 className="text-2xl font-bold font-display tracking-tight text-gray-950">
              Processus de travail & Standards d'ingénierie
            </h3>
            <p className="text-xs text-gray-400">
              Comment j'appréhende un projet de sa phase de planification initiale jusqu'au déploiement stable en production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 pt-2">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-xs transition-colors relative group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl font-black font-display text-gray-200 group-hover:text-neutral-950 transition-colors">
                    {step.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors"></span>
                </div>
                <h4 className="text-xs font-bold text-gray-950 mb-1">{step.title}</h4>
                <p className="text-[11px] text-gray-400 leading-normal font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM SECTION 2: RECIPROCATING INTERACTIVE CONTACT MODULE */}
        <div id="contact" className="max-w-4xl mx-auto w-full">
          
          {/* Email form portion */}
          <div className="bg-white rounded-3xl border border-gray-100/80 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-6">
            
            <div className="space-y-1 text-left">
              <span className="text-xxs font-mono tracking-widest text-[#6c6767] font-bold uppercase block">// Formulaire de contact</span>
              <h3 className="text-2xl font-bold font-display tracking-tight text-gray-950">
                Laisser un message de recrutement
              </h3>
              <p className="text-xs text-gray-400 leading-normal">
                Discutons de vos besoins de développement web, d'infrastructure cloud ou d'opportunités d'alternance et de CDI.
              </p>
            </div>

            {contactSuccess ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Message enregistré localement avec succès !</h4>
                  <p className="text-xs text-emerald-700 leading-normal mt-1.5 max-w-md mx-auto">
                    Le message a été enregistré localement avec succès. Je vous répondrai dans les plus brefs délais !
                  </p>
                </div>
                <button 
                  onClick={() => setContactSuccess(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-4 rounded-xl cursor-pointer"
                >
                  Envoyer un nouveau message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block font-bold">Votre nom / Entreprise</label>
                    <input 
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Recruteur chez Google"
                      className="w-full bg-gray-50 border border-gray-150 rounded-xl p-3 text-xs focus:bg-white focus:outline-neutral-950"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block font-bold">Votre email de contact</label>
                    <input 
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="recrutement@entreprise.com"
                      className="w-full bg-gray-50 border border-gray-150 rounded-xl p-3 text-xs focus:bg-white focus:outline-neutral-950"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block font-bold">Votre message / Opportunités d'embauche</label>
                  <textarea 
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Bonjour Antema, suite à l'examen de votre portfolio et de vos compétences Fullstack, nous aimerions planifier un entretien..."
                    className="w-full bg-gray-50 border border-gray-150 rounded-xl p-3 text-xs focus:bg-white focus:outline-neutral-950"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formSubmitting}
                  className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold py-3 px-6 rounded-xl w-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  {formSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <h5 className="font-bold font-display text-white tracking-wider text-sm flex items-center gap-1.5 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              PORTFOLIO.ANTEMA_ANDRIAM
            </h5>
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-500 font-semibold">
              Développeur Fullstack
            </p>
            <p className="text-xxs text-neutral-600">
              React • Node.js • PostgreSQL • IA & Automatisation
            </p>
          </div>

          <div className="text-center md:text-right space-y-2 text-xs text-neutral-500 font-mono">
            <p>© {new Date().getFullYear()} Antema ANDRIAM. Tous droits réservés.</p>
            <p className="text-xxs uppercase">IT University Madagascar • Compliant Premium Design</p>
          </div>

        </div>
      </footer>

      {/* SECTION GOLDEN POPUP: PREMIUM DOWNLOADABLE RESUME MODAL */}
      <AnimatePresence>
        {cvModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col text-left"
            >
              <div className="bg-neutral-950 text-white p-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-300" />
                  <div>
                    <h4 className="font-bold font-display tracking-tight text-sm">Curriculum Vitae</h4>
                    <p className="text-xxs font-mono text-gray-500 tracking-wide font-semibold">ANTEMA_ANDRIAM_CV.PDF</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="p-1.5 hover:bg-neutral-800 text-gray-300 hover:text-white rounded-lg text-xs flex items-center gap-1.5 font-mono cursor-pointer"
                    title="Imprimer ou enregistrer en PDF"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Imprimer</span>
                  </button>
                  <button 
                    onClick={() => setCvModalOpen(false)}
                    className="p-1 hover:bg-neutral-800 rounded-md cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* CV Printable details */}
              <div className="p-8 overflow-y-auto grow space-y-6 printable-cv bg-white selection:bg-neutral-900 selection:text-white">
                
                <div className="border-b border-gray-200 pb-4.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-950 font-display">Antema ANDRIAM</h3>
                    <p className="text-sm font-semibold text-gray-600 font-mono tracking-wide">Développeur Fullstack React / Node.js / PostgreSQL</p>
                    <p className="text-xs text-gray-500 mt-1">Étudiant en Licence Informatique - IT University</p>
                  </div>
                  <div className="text-xs text-gray-500 font-mono space-y-0.5 sm:text-right">
                    <p>Paris/Antananarivo</p>
                    <p>{PROFILE_DATA.email}</p>
                    <p>{PROFILE_DATA.phone}</p>
                    <p>github.com/Antema-Andriam</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-gray-950 uppercase border-l-2 border-neutral-900 pl-2">PROFIL PROFESSIONNEL</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Futur diplômé de l'IT University en Licence Informatique passionné par le développement, l'automatisation et l'intégration de services complexes d'IA. Autonome et rigoureux d'esprit, à l'écoute des pratiques devops modernes, je cherche à mettre mon expertise technique de premier plan à contribution de projets web innovants et SaaS.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-mono font-bold text-gray-950 uppercase border-l-2 border-neutral-900 pl-2">STACK TECHNIQUES</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p><span className="font-semibold text-gray-800">Frontend :</span> React, Next.js, HTML5, CSS3, Tailwind CSS, TypeScript</p>
                      <p><span className="font-semibold text-gray-800">Backend & API :</span> Node.js, NestJS, Express, APIs REST modularisées</p>
                      <p><span className="font-semibold text-gray-800">Bases de données :</span> PostgreSQL (Indexation complexe), MySQL</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-mono font-bold text-gray-950 uppercase border-l-2 border-neutral-900 pl-2">INFRA & SOFT SKILLS</h4>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p><span className="font-semibold text-gray-800">Système & Ops :</span> Linux VPS, Nginx Reverse Proxy, Docker, Git, CI/CD</p>
                      <p><span className="font-semibold text-gray-800">IA / OpenAI :</span> Intégration d'agents Llama 3, GPT-4, Groq</p>
                      <p><span className="font-semibold text-gray-800">Soft Skills :</span> Rigueur, organisation autonome, travail agile en groupe</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <h4 className="text-[11px] font-mono font-bold text-gray-950 uppercase border-l-2 border-neutral-900 pl-2">EXPÉRIENCES PROFESSIONNELLES</h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <p className="font-bold text-gray-950">JO DESIGNS – BRANDING & DIGITAL</p>
                        <p className="text-gray-500 font-mono text-xxs uppercase">Stagiaire Fullstack • Développement Plateforme collaboratif Me.On</p>
                      </div>
                      <span className="font-mono text-xxs font-bold text-gray-500">Janv 2026 – Présent</span>
                    </div>
                    <p className="text-xxs text-gray-600 leading-relaxed pl-1">
                      Conception Frontend React et services Backend NestJS sous PostgreSQL. Amélioration des salles d'entraides WebRTC et intégration d'un module d'IA pour des quiz de connaissances automatisés.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <p className="font-bold text-gray-950">MOTORLAND ERP</p>
                        <p className="text-gray-500 font-mono text-xxs uppercase">Développeur Freelance Fullstack • ERP Métier Complet</p>
                      </div>
                      <span className="font-mono text-xxs font-bold text-gray-500">Févr 2026 – Mai 2026</span>
                    </div>
                    <p className="text-xxs text-gray-600 leading-relaxed pl-1">
                      Conception et développement d'un ERP de logistique et facturation commerciale. Intégration du backend express, déploiement sur VPS Linux et configuration de PM2 et Nginx.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <p className="font-bold text-gray-950">COMMUNE URBAINE D'ANTANANARIVO (CUA)</p>
                        <p className="text-gray-500 font-mono text-xxs uppercase">Prestataire Développeur • Gestion du cadastre public et fiscalité urbaine</p>
                      </div>
                      <span className="font-mono text-xxs font-bold text-gray-500">Juil 2025 – Janv 2026</span>
                    </div>
                    <p className="text-xxs text-gray-600 leading-relaxed pl-1">
                      Développement d’une application de géolocalisation cartographique interactive avec React et Leaflet reposant sur un backend Node/PostgreSQL d’enregistrement géospatial.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-mono font-bold text-gray-950 uppercase border-l-2 border-neutral-900 pl-2">FORMATION ACADÉMIQUE</h4>
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-gray-950">IT UNIVERSITY MADAGASCAR</p>
                      <p className="text-gray-500">Licence en Informatique</p>
                    </div>
                    <span className="font-mono text-xxs font-bold text-gray-500">2023 – 2026</span>
                  </div>
                </div>

              </div>

              <div className="bg-gray-50 border-t border-gray-150 p-4 px-6 flex items-center justify-between text-xxs text-gray-400">
                <span>Régie d'impression CSS intégrée standard</span>
                <span className="font-mono text-neutral-950 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  PRINTER_FRIENDLY
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
