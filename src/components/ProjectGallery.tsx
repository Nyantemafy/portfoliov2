import React, { useState } from "react";
import { Project } from "../types";
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Play, 
  Cpu, 
  MapPin, 
  TrendingUp, 
  Layers, 
  Check, 
  CheckCircle2, 
  Eye,
  Video,
  Mic,
  MessageSquare,
  BookmarkCheck,
  Plus,
  Send,
  AlertCircle,
  TrendingDown,
  Calendar,
  DollarSign,
  UserCheck,
  Compass,
  FileText,
  Bookmark
} from "lucide-react";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  // 4 Screenshot tabs
  const [activeTab, setActiveTab] = useState<number>(0);

  // States for ME.ON (Tab 1: Workspace XP, Tab 2: WebRTC, Tab 3: Quiz, Tab 4: Kanban)
  const [meonXp, setMeonXp] = useState<number>(1450);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [chatMessages, setChatMessages] = useState<Array<{sender: string, text: string, time: string}>>([
    { sender: "Alice", text: "Salut ! On commence par réviser la structure de NestJS ?", time: "14:15" },
    { sender: "Marc", text: "Grave, l'injecteur de dépendance me pose encore problème.", time: "14:16" }
  ]);
  const [newChatText, setNewChatText] = useState<string>("");
  const [kanbanTasks, setKanbanTasks] = useState([
    { id: 1, title: "Rédiger spécification WebRTC", status: " todo", tag: "Specs", points: 150 },
    { id: 2, title: "Corriger l'injecteur NestJS", status: "progress", tag: "Code", points: 250 },
    { id: 3, title: "Indexation table PostgreSQL", status: "done", tag: "Database", points: 300 }
  ]);

  // States for MOTORLAND ERP (Tab 1: Financials, Tab 2: Stock, Tab 3: Forecaster, Tab 4: Planner)
  const [erpActiveMetric, setErpActiveMetric] = useState<string>("sales");
  const [erpFilter, setErpFilter] = useState<string>("all");
  const [erpInventory, setErpInventory] = useState([
    { id: 1, name: "Piston Hydraulique HP90", category: "Équipement", qty: 3, thresh: 10, status: "critical", price: 245 },
    { id: 2, name: "Support Chassis Alu M3", category: "Structure", qty: 38, thresh: 15, status: "stable", price: 112 },
    { id: 3, name: "Boîtier Électronique Central v2", category: "Composant", qty: 2, thresh: 5, status: "critical", price: 540 },
    { id: 4, name: "Durite Renforcée 12mm", category: "Logistique", qty: 120, thresh: 50, status: "stable", price: 14 }
  ]);
  const [forecastOutput, setForecastOutput] = useState<string>("");
  const [forecastLoading, setForecastLoading] = useState<boolean>(false);
  const [plannerSelectedShift, setPlannerSelectedShift] = useState<string>("Atelier A");

  // States for GESTION PANNEAUX CUA (Tab 1: Map, Tab 2: Registry, Tab 3: Route AI, Tab 4: Bento Executive)
  const [cuaSelectedPin, setCuaSelectedPin] = useState<{id: number, company: string, site: string, tax: string, status: string, amount: number} | null>(null);
  const [cuaFilter, setCuaFilter] = useState<string>("all");
  const [receiptSearch, setReceiptSearch] = useState<string>("");
  const [cuaRouteOptimizationActive, setCuaRouteOptimizationActive] = useState<boolean>(false);

  // Simulated live actions
  const handleRestock = (id: number) => {
    setErpInventory(prev => prev.map(item => {
      if (item.id === id) {
        const nextQty = item.qty + 10;
        return {
          ...item,
          qty: nextQty,
          status: nextQty >= item.thresh ? "stable" : "critical"
        };
      }
      return item;
    }));
  };

  const handleCuaPay = (id: number) => {
    if (cuaSelectedPin && cuaSelectedPin.id === id) {
      setCuaSelectedPin(prev => prev ? { ...prev, status: "conforme", tax: "Payée (Recouvré !)" } : null);
    }
  };

  const submitMeonChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;
    setChatMessages(prev => [...prev, { sender: "Moi (Antema)", text: newChatText, time: "14:22" }]);
    setNewChatText("");
  };

  const handleTaskStatusToggle = (id: number) => {
    setKanbanTasks(prev => prev.map(task => {
      if (task.id === id) {
        const nextStatus = task.status === "done" ? " todo" : task.status === " todo" ? "progress" : "done";
        if (nextStatus === "done") {
          setMeonXp(xp => xp + task.points);
        }
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  const triggerForecast = (type: string) => {
    setForecastLoading(true);
    setForecastOutput("");
    setTimeout(() => {
      setForecastLoading(false);
      if (type === "demand") {
        setForecastOutput(`📈 Analyse du modèle de vente des 6 derniers mois complétée. Hausse d'activité saisonnière de +22.4% détectée pour Juillet 2026. Recommandation : Augmenter les pistons HP90 de 15 unités d'ici le 10 Juillet.`);
      } else {
        setForecastOutput(`💡 Optimisation finie. En achetant en gros lot de 30 chez le fournisseur DistriPlast, vous réduirez le tarif de gros de -12%. Gain attendu : +1,450 € sur marge brute.`);
      }
    }, 900);
  };

  const meonQuizCorrectAnswer = 0; // A is correct

  const tabs = [
    { id: 0, label: "Capture 1 : Dashboard Général", icon: Eye },
    { id: 1, label: "Capture 2 : Fonction Clé", icon: Play },
    { id: 2, label: "Capture 3 : Intelligence Artificielle", icon: Sparkles },
    { id: 3, label: "Capture 4 : Statistiques & Rapports", icon: Database },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      
      {/* Visual Window Header (Simulated Premium MacOS Terminal/Browser Frame) */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-900 px-4 py-3.5 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          {/* MacOS buttons */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500 block hover:opacity-80 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 block hover:opacity-80 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 block hover:opacity-80 transition-opacity"></span>
          </div>
          {/* Dynamic Address block */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg px-3 py-1 flex items-center gap-2 max-w-[280px] md:max-w-xs text-[10px] font-mono text-slate-300 truncate">
            <span className="text-indigo-400 font-bold shrink-0">https://</span>
            <span className="truncate">{project.id}.antema.io/workspace/dashboard</span>
          </div>
        </div>

        {/* Custom Pill controls */}
        <div className="flex bg-slate-850 p-0.5 rounded-xl border border-slate-700/40 overflow-x-auto max-w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // clear temporary selections for premium responsive feel
                  setCuaSelectedPin(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] md:text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isTabActive
                    ? "bg-white text-gray-900 shadow-md scale-102"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isTabActive ? "text-neutral-900" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative min-h-[440px] bg-slate-950/2 p-4 md:p-6 flex flex-col justify-center border-b border-gray-100">
        
        {/* ======================= PROJECT 1: ME.ON (STUDENT WORKSPACE) ======================= */}
        {project.id === "meon" && (
          <div className="w-full">
            
            {/* TAB 0: ME.ON DASHBOARD SCREEN */}
            {activeTab === 0 && (
              <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-955 rounded-2xl p-5 border border-indigo-500/30 text-white shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-indigo-500/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 flex items-center justify-center font-bold text-xs shadow-md">ME</span>
                    <div>
                      <h4 className="text-xs font-bold font-display tracking-tight">Espace Étudiant intelligent</h4>
                      <p className="text-[9px] text-indigo-300 font-mono">Licence Informatique IT University</p>
                    </div>
                  </div>
                  <div className="bg-indigo-900/60 border border-indigo-500/40 rounded-xl px-3 py-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
                    <span className="font-mono text-[10px] text-fuchsia-300 font-bold">{meonXp} XP COMPILÉ</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Left panel */}
                  <div className="md:col-span-4 bg-slate-900/50 border border-indigo-500/10 p-3.5 rounded-xl space-y-3">
                    <p className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest font-bold">// Prochaines Certifs</p>
                    <div className="space-y-2">
                      <div className="bg-indigo-950/50 p-2 rounded-lg border-l-2 border-fuchsia-500">
                        <p className="text-xxs font-bold">Exam Algorithmes</p>
                        <p className="text-[10px] text-gray-400">Demain, 14h00</p>
                      </div>
                      <div className="bg-indigo-950/50 p-2 rounded-lg border-l-2 border-indigo-400">
                        <p className="text-xxs font-bold">Rapport WebRTC</p>
                        <p className="text-[10px] text-gray-400">Dans 4 jours</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-indigo-500/10 text-center">
                      <p className="text-[9px] text-indigo-400">Progression Niveau 4</p>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 h-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Right panel - dynamic workspace state */}
                  <div className="md:col-span-8 bg-slate-900/50 border border-indigo-500/10 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-indigo-200">Salons d'études en cours</span>
                      <span className="text-[10px] font-mono text-fuchsia-400 bg-fuchsia-500/10 px-1.5 py-0.5 rounded">3 Actifs</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-gradient-to-r from-indigo-900/40 to-slate-900 p-3 rounded-xl border border-indigo-500/15">
                        <div className="flex justify-between items-start mb-2">
                          <span className="p-1 bg-indigo-505/20 text-indigo-300 rounded text-xxs font-bold">WebRTC Room 1</span>
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        </div>
                        <p className="text-xxs font-bold">Groupe Algèbre Linéaire</p>
                        <p className="text-[9px] text-gray-400 mt-1">4 étudiants connectés</p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-900/40 to-slate-900 p-3 rounded-xl border border-indigo-500/15">
                        <div className="flex justify-between items-start mb-2">
                          <span className="p-1 bg-indigo-505/20 text-indigo-300 rounded text-xxs font-bold">WebRTC Room 2</span>
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        </div>
                        <p className="text-xxs font-bold text-gray-200">Session NestJS Master</p>
                        <p className="text-[9px] text-gray-400 mt-1">8 étudiants connectés</p>
                      </div>
                    </div>

                    <div className="p-2.5 bg-indigo-950/40 rounded-xl border border-indigo-500/10 text-xxs flex items-center justify-between text-indigo-200">
                      <span>💡 Conseil IA : Vos révisions de Algèbre avancent bien (+35XP récoltés aujourd'hui !)</span>
                      <button 
                        onClick={() => setMeonXp(xp => xp + 50)}
                        className="bg-indigo-600 hover:bg-indigo-505 text-white py-1 px-2.5 rounded-lg text-[9px] font-bold cursor-pointer transition-colors"
                      >
                        + Réclamer Bonus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: WEBRTC STUDY ROOMS */}
            {activeTab === 1 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-900 rounded-2xl p-5 border border-slate-700 text-white shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-fuchsia-400" />
                    <div>
                      <h4 className="text-xs font-bold">Salon d'Entraide WebRTC #402</h4>
                      <p className="text-[9px] text-gray-400 font-mono">Protocole SRTP chiffré de bout-en-bout</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-full font-mono font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span> EN DIRECT
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* WebRTC Video Grid (3 peers + Screen sharing) */}
                  <div className="md:col-span-8 grid grid-cols-2 gap-2">
                    {/* Peer 1: Alice */}
                    <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-indigo-950 to-slate-950 p-2 border border-indigo-500/20 group overflow-hidden">
                      <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center font-bold text-xs ring-2 ring-fuchsia-500">AL</span>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/60 px-1.5 py-0.5 rounded text-[9px] flex items-center gap-1">
                        <Mic className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Alice (Micro On)</span>
                      </div>
                      {/* Audio frequency wave visualizer */}
                      <div className="absolute top-2 right-2 flex gap-0.5">
                        <span className="w-1 h-2.5 bg-emerald-500 animate-pulse"></span>
                        <span className="w-1 h-4 bg-emerald-500 animate-pulse"></span>
                        <span className="w-1 h-1.5 bg-emerald-500"></span>
                      </div>
                    </div>

                    {/* Peer 2: Marc */}
                    <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-slate-950 to-indigo-950 p-2 border border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-neutral-950/40 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs border border-indigo-400">MC</span>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/60 px-1.5 py-0.5 rounded text-[9px]">
                        <span>Marc</span>
                      </div>
                    </div>

                    {/* Peer 3: Antema ANDRIAM */}
                    <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-900 p-2 border-2 border-indigo-400 overflow-hidden">
                      <img 
                        src="/src/assets/images/antema_profile_pic_1782162044773.jpg" 
                        alt="Antema Portrait"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 left-2 bg-indigo-600 px-1.5 py-0.5 rounded text-[9px] font-bold">
                        <span>Antema (Moi)</span>
                      </div>
                    </div>

                    {/* Peer 4: Screen sharing representation */}
                    <div className="relative aspect-video rounded-xl bg-slate-950 border border-indigo-500/20 p-2 overflow-hidden flex flex-col justify-between">
                      <div className="border border-indigo-500/30 rounded p-1.5 bg-indigo-950/30 font-mono text-[8px] text-indigo-300 leading-tight">
                        <p className="font-bold text-[9px] text-gray-200">nest-app/main.ts</p>
                        <p className="text-indigo-400 mt-1">const app = await NestFactory.create(AppModule);</p>
                        <p>app.useGlobalPipes(new ValidationPipe());</p>
                      </div>
                      <div className="bg-black/60 px-1.5 py-0.5 rounded text-[9px] w-fit">
                        <span>Capture écran active</span>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Live Messaging */}
                  <div className="md:col-span-4 bg-slate-950 border border-slate-800 p-3 rounded-xl flex flex-col justify-between h-56">
                    <div className="space-y-2 overflow-y-auto max-h-36 pr-1">
                      <p className="text-[9px] text-gray-400 font-bold tracking-wider">// CHAT SALON</p>
                      {chatMessages.map((msg, index) => (
                        <div key={index} className="text-[10px] space-y-0.5">
                          <p className="font-bold text-indigo-300">{msg.sender} <span className="text-[8px] text-gray-400 font-mono">{msg.time}</span></p>
                          <p className="text-gray-200 bg-slate-900 p-1.5 rounded-lg border border-slate-800">{msg.text}</p>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={submitMeonChat} className="flex gap-1.5 pt-2 border-t border-slate-800">
                      <input 
                        type="text" 
                        value={newChatText}
                        onChange={e => setNewChatText(e.target.value)}
                        placeholder="Écrire..." 
                        className="bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 grow"
                      />
                      <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 p-1.5 rounded-lg text-white cursor-pointer">
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AI QUIZZER MODULE */}
            {activeTab === 2 && (
              <div className="w-full max-w-md mx-auto bg-white border border-gray-150 rounded-2xl p-5 text-gray-900 shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex items-center justify-between pb-3 border-b border-gray-150">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-950">Générateur de Quiz IA</h4>
                      <p className="text-[10px] text-indigo-600 font-mono">Modèle Llama-3-70B API</p>
                    </div>
                  </div>
                  <span className="text-xxs px-1.5 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg font-bold font-mono">COURS_ALGEBRE</span>
                </div>

                <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/60 text-xs">
                  <p className="font-semibold text-gray-950 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    Question générée par l'Intelligence d'Antema
                  </p>
                  <p className="text-gray-600 mt-2 font-medium">
                    Question : Quelle est la particularité d'un protocole WebRTC de type "Mesh" comparée à un serveur central SFU ?
                  </p>
                </div>

                <div className="space-y-2">
                  {[
                    "Chaque participant envoie ses flux directement à tous les autres pairs sans serveur [Réponse correcte]",
                    "Il nécessite l'installation d'un plug-in Flash additionnel obsolète dans le navigateur",
                    "Le protocole est basé sur un flux HTTP synchrone qui bloque les liaisons par défaut"
                  ].map((option, idx) => {
                    const isSelected = selectedQuizAnswer === idx;
                    const isCorrect = idx === 0;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedQuizAnswer(idx);
                          if (idx === 0) setQuizScore(prev => prev + 100);
                        }}
                        className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? isCorrect
                              ? "bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm"
                              : "bg-red-50 border-red-300 text-red-950"
                            : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium">{option}</span>
                          {isSelected && (
                            <span className="shrink-0">
                              {isCorrect ? (
                                <span className="font-bold text-emerald-600 flex items-center gap-1">✓ Correct (+100XP)</span>
                              ) : (
                                <span className="font-bold text-red-600">✗ Retenter</span>
                              )}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedQuizAnswer === 0 && (
                  <div className="bg-emerald-50 text-emerald-950 p-2.5 rounded-xl text-xxs font-mono animate-slide-in leading-relaxed">
                    🎯 Explication : Dans une architecture Mesh, les utilisateurs sont interconnectés directement. Cela se prête à de petites réunions de projet (3 à 5 personnes) et évite le coût financier d'un serveur média dédié.
                  </div>
                )}

                <div className="flex justify-between items-center text-xxs text-gray-400 pt-2 border-t border-gray-150">
                  <span>Score Session : <strong className="text-gray-900 font-bold font-mono">{quizScore} XP</strong></span>
                  <button 
                    onClick={() => setSelectedQuizAnswer(null)} 
                    className="text-indigo-600 hover:underline font-bold font-mono uppercase"
                  >
                    Quiz Suivant →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: WORKSPACE KANBAN INTEGRATION */}
            {activeTab === 3 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-900 rounded-2xl p-5 border border-slate-700 text-white shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-xs font-bold text-gray-100">Tableau de Tâches collaboratif</h4>
                    <p className="text-[9px] text-gray-400">Pour les travaux de projet de groupe en école de codage</p>
                  </div>
                  <span className="text-xxs px-2 py-0.5 bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 rounded font-mono font-bold">MODE_EDITION</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Column 1: TODO */}
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-[#6c6767] uppercase mb-1">// À Faire (01)</p>
                    {kanbanTasks.filter(t => t.status === " todo").map(task => (
                      <div key={task.id} className="bg-slate-900 p-3 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-slate-800 text-indigo-400 font-semibold font-mono border border-indigo-500/10">{task.tag}</span>
                          <span className="text-[8px] text-gray-500 font-mono font-bold">+{task.points}XP</span>
                        </div>
                        <p className="text-xs font-semibold leading-normal">{task.title}</p>
                        <button 
                          onClick={() => handleTaskStatusToggle(task.id)}
                          className="w-full bg-indigo-600 hover:bg-indigo-505 py-1 px-2 rounded-lg text-[9px] text-center font-bold text-white uppercase tracking-wider cursor-pointer transition-colors"
                        >
                          Démarrer tâche
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: IN PROGRESS */}
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 uppercase mb-1">// En cours (01)</p>
                    {kanbanTasks.filter(t => t.status === "progress").map(task => (
                      <div key={task.id} className="bg-slate-900 p-3 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all space-y-2 relative overflow-hidden">
                        {/* active glow tab */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-500"></div>
                        <div className="flex justify-between items-center">
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-slate-800 text-indigo-400 font-semibold font-mono border border-indigo-500/10">{task.tag}</span>
                          <span className="text-[8px] text-indigo-300 font-mono font-bold">+{task.points}XP</span>
                        </div>
                        <p className="text-xs font-semibold leading-normal">{task.title}</p>
                        <button 
                          onClick={() => handleTaskStatusToggle(task.id)}
                          className="w-full bg-emerald-600 hover:bg-emerald-505 py-1 px-2 rounded-lg text-[9px] text-center font-bold text-white uppercase tracking-wider cursor-pointer"
                        >
                          Valider Tâche (Dépôt)
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Column 3: DONE */}
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-1">// Validées (01)</p>
                    {kanbanTasks.filter(t => t.status === "done").map(task => (
                      <div key={task.id} className="bg-slate-900 p-3 rounded-xl border border-emerald-500/10 opacity-75 space-y-2 relative overflow-hidden">
                        <div className="flex justify-between items-center">
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-500/10 text-emerald-400 font-semibold font-mono border border-emerald-500/20">{task.tag}</span>
                          <span className="text-[8px] text-emerald-400 font-mono font-bold flex items-center gap-0.5">✓ {task.points}XP</span>
                        </div>
                        <p className="text-xs font-semibold line-through text-gray-400 leading-normal">{task.title}</p>
                        <div className="flex items-center gap-1.5 text-[9px] text-[#6c6767]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Livré avec succès par IA</span>
                        </div>
                      </div>
                    ))}
                    {kanbanTasks.filter(t => t.status === "done").length === 0 && (
                      <p className="text-xxs text-gray-500 italic text-center py-6">Aucune tâche finalisée</p>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* ======================= PROJECT 2: MOTORLAND ERP ======================= */}
        {project.id === "motorland" && (
          <div className="w-full text-gray-900">
            
            {/* TAB 0: ERP METRICS SECTION */}
            {activeTab === 0 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-5 text-gray-100 shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center font-bold text-white text-xs">M</span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">Motorland ERP Analytics</h4>
                      <p className="text-[9px] font-mono text-gray-400">Module de direction industrielle</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 rounded px-2 py-0.5 text-amber-400 font-bold font-mono">SQL WORKSPACE LIVE</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <button 
                    onClick={() => setErpActiveMetric("sales")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      erpActiveMetric === "sales" 
                        ? "bg-slate-900 border-amber-500 text-white" 
                        : "bg-slate-950 border-slate-800 text-gray-400 hover:bg-slate-900/50"
                    }`}
                  >
                    <p className="text-[9px] font-mono text-gray-400">CHIFFRE D'AFFAIRES</p>
                    <p className="text-base font-bold text-gray-200 mt-1 font-mono">42 890 €</p>
                    <p className="text-[9px] text-[#6c6767] mt-0.5 font-sans font-bold text-amber-500">+12% ce mois</p>
                  </button>

                  <button 
                    onClick={() => setErpActiveMetric("margin")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      erpActiveMetric === "margin" 
                        ? "bg-slate-900 border-teal-500 text-white" 
                        : "bg-slate-950 border-slate-800 text-gray-400 hover:bg-slate-900/50"
                    }`}
                  >
                    <p className="text-[9px] font-mono text-gray-400">MARGE LOGISTIQUE</p>
                    <p className="text-base font-bold text-gray-200 mt-1 font-mono">24.5 %</p>
                    <p className="text-[9px] text-[#6c6767] mt-0.5 font-sans font-semibold text-teal-400">-1.2% coûts</p>
                  </button>

                  <button 
                    onClick={() => setErpActiveMetric("orders")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      erpActiveMetric === "orders" 
                        ? "bg-slate-900 border-indigo-500 text-white" 
                        : "bg-slate-950 border-slate-800 text-gray-400 hover:bg-slate-900/50"
                    }`}
                  >
                    <p className="text-[9px] font-mono text-gray-400">COMMANDES</p>
                    <p className="text-base font-bold text-gray-200 mt-1 font-mono">182 Livrées</p>
                    <p className="text-[9px] text-indigo-400 mt-0.5 font-sans">0 retard de trajet</p>
                  </button>
                </div>

                {/* Simulated Custom Bar Chart built elegantly in pure CSS */}
                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-2.5">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <span>Performance active : {erpActiveMetric === 'sales' ? 'Facturation brute' : erpActiveMetric === 'margin' ? 'Rendement net' : 'Volume de commandes'}</span>
                    <span>Niveau mensuel (Janv - Juin)</span>
                  </div>

                  <div className="flex justify-between items-end h-28 pt-4 px-2">
                    {[
                      { m: "Jan", val1: 45, val2: 60, val3: 30 },
                      { m: "Fév", val1: 60, val2: 70, val3: 50 },
                      { m: "Mar", val1: 75, val2: 55, val3: 40 },
                      { m: "Avr", val1: 40, val2: 80, val3: 65 },
                      { m: "Mai", val1: 90, val2: 95, val3: 70 },
                      { m: "Jun", val1: 100, val2: 85, val3: 85 },
                    ].map((data, i) => {
                      const h = erpActiveMetric === "sales" ? data.val1 : erpActiveMetric === "margin" ? data.val2 : data.val3;
                      const activeColor = erpActiveMetric === "sales" ? "from-amber-600 to-amber-400" : erpActiveMetric === "margin" ? "from-teal-600 to-teal-400" : "from-indigo-600 to-indigo-400";
                      return (
                        <div key={i} className="flex flex-col items-center gap-1.5 grow max-w-[40px]">
                          <div className="w-full bg-slate-800 rounded-md h-20 flex items-end overflow-hidden">
                            <div 
                              className={`w-full bg-gradient-to-t ${activeColor} rounded-md transition-all duration-500`}
                              style={{ height: `${h}%` }}
                            />
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono font-bold">{data.m}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: STOCK INVENTORY */}
            {activeTab === 1 && (
              <div className="w-full max-w-2xl mx-auto bg-white border border-gray-150 rounded-2xl p-5 shadow-2xl text-gray-800 space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-gray-150 pb-3">
                  <div>
                    <h4 className="text-xs font-bold text-gray-950 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-amber-500" />
                      Inventaire Pièces de Rechange Logistique
                    </h4>
                    <p className="text-[10px] text-gray-500">Vue de la table SQL PostgreSQL synchronisée</p>
                  </div>

                  <div className="flex gap-1">
                    {["all", "low", "stable"].map((f) => (
                      <button
                        key={f}
                        onClick={() => setErpFilter(f)}
                        className={`px-2.5 py-1 text-xxs font-semibold uppercase rounded-lg border transition-all cursor-pointer ${
                          erpFilter === f
                            ? "bg-neutral-900 border-neutral-900 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {f === "all" ? "Tout" : f === "low" ? "Alertes" : "Stables"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {erpInventory
                    .filter(item => {
                      if (erpFilter === "low") return item.status === "critical";
                      if (erpFilter === "stable") return item.status === "stable";
                      return true;
                    })
                    .map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-150 text-xs">
                        <div className="flex items-center gap-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.status === 'critical' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                          <div>
                            <p className="font-bold text-gray-950">{item.name}</p>
                            <p className="text-[9px] text-gray-400 font-mono">ID SQL : #ERP-0{item.id} • {item.category}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-mono font-bold text-gray-950 text-sm">{item.qty} unités</p>
                            <p className="text-[9px] text-gray-400 font-mono">Prix : {item.price} €</p>
                          </div>

                          {item.status === "critical" ? (
                            <button
                              onClick={() => handleRestock(item.id)}
                              className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-semibold rounded-lg px-2.5 py-1 text-xxs flex items-center gap-1 transition-all cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Approvisionner</span>
                            </button>
                          ) : (
                            <span className="bg-emerald-50 text-emerald-800 text-[9px] font-mono uppercase px-2 py-1 rounded border border-emerald-100 font-bold">
                              Stock OK
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex items-center justify-between text-xxs text-gray-400 font-mono pt-1">
                  <span className="flex items-center gap-1 text-amber-600 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {erpInventory.filter(i => i.status === "critical").length} articles nécessitent votre restockage immédiat
                  </span>
                  <span>Temps de transmission Nginx : 12ms</span>
                </div>
              </div>
            )}

            {/* TAB 2: AI REPLICA FORECASTER */}
            {activeTab === 2 && (
              <div className="w-full max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-5 text-gray-100 shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-amber-500" />
                    <h4 className="text-xs font-bold text-gray-200">Algorithme d'Achat prédictif</h4>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-gray-400 px-1.5 py-0.5 rounded font-mono font-bold">OpenAI Agent Model</span>
                </div>

                <p className="text-xs text-gray-400">
                  Le système inspecte cycliquement les niveaux critiques de la base de données PostgreSQL pour planifier des ordres d'achat d'automatisation intelligente auprès des sous-traitants d'équipements mécaniques.
                </p>

                <div className="flex gap-2">
                  <button 
                    onClick={() => triggerForecast("demand")}
                    className="grow bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    📈 Tendances Ventes
                  </button>
                  <button 
                    onClick={() => triggerForecast("optimize")}
                    className="grow bg-slate-800 hover:bg-slate-700 text-gray-200 font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    💰 Optimiser Marge
                  </button>
                </div>

                <div className="relative bg-slate-900 border border-slate-800 p-3.5 rounded-xl min-h-[100px] text-xxs font-mono text-gray-300 leading-relaxed">
                  {forecastLoading ? (
                    <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center rounded-xl">
                      <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-[9px] text-gray-400 mt-2 font-mono">Calcul des intégrales à l'API OpenAI...</p>
                    </div>
                  ) : null}

                  {forecastOutput ? (
                    <p className="whitespace-pre-line text-amber-300">{forecastOutput}</p>
                  ) : (
                    <p className="text-gray-500 italic text-center pt-6">Cliquez sur un bouton prédéfini d'automatisation ci-dessus pour lancer un calcul analytique de l'IA.</p>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: SCHEDULE PLANNER */}
            {activeTab === 3 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">Échéancier & Planificateur Équipe</h4>
                      <p className="text-[9px] text-gray-400">Suivi des présences et des créneaux horaires</p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded font-semibold uppercase">KPI : {plannerSelectedShift}</span>
                </div>

                {/* Team selector row */}
                <div className="flex gap-2">
                  {["Atelier A", "Atelier B", "Contrôle Qualité"].map((team) => (
                    <button
                      key={team}
                      onClick={() => setPlannerSelectedShift(team)}
                      className={`px-3 py-1 text-xxs rounded-lg font-bold border transition-colors cursor-pointer ${
                        plannerSelectedShift === team
                          ? "bg-amber-500 border-amber-500 text-white"
                          : "bg-slate-950 border-slate-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {team}
                    </button>
                  ))}
                </div>

                {/* Simulated shift table */}
                <div className="space-y-2">
                  {[
                    { id: 1, name: "Jean-Eudes R.", team: "Atelier A", hours: "08:00 - 16:00", role: "Soudure", load: 92 },
                    { id: 2, name: "Bao M.", team: "Atelier A", hours: "08:00 - 15:30", role: "Plaquage", load: 85 },
                    { id: 3, name: "Thierry A.", team: "Atelier B", hours: "10:00 - 18:00", role: "Montage", load: 45 },
                    { id: 4, name: "Sonia H.", team: "Contrôle Qualité", hours: "09:00 - 17:00", role: "Vérif Métrologie", load: 100 }
                  ]
                    .filter(item => item.team === plannerSelectedShift)
                    .map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                        <div>
                          <p className="font-bold text-gray-200">{item.name}</p>
                          <p className="text-[9px] text-gray-500 font-mono">{item.role} • Shift : {item.hours}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-gray-400">Taux de charge :</span>
                          <div className="w-16 bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.load >= 90 ? 'bg-indigo-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${item.load}%` }} 
                            />
                          </div>
                          <span className="text-[10px] font-mono font-bold w-8 text-right">{item.load}%</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ======================= PROJECT 3: GESTION DES PANNEAUX CUA (CARTOGRAPHY) ======================= */}
        {project.id === "cua" && (
          <div className="w-full text-gray-900">
            
            {/* TAB 0: INTERACTIVE CITY MAP SCREEN */}
            {activeTab === 0 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white shadow-2xl relative overflow-hidden animate-fade-in-up">
                
                {/* Header map */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">Réseau Spatiale & Câblage Urbain</h4>
                      <p className="text-[9px] text-gray-400 font-mono">Commune Urbaine d'Antananarivo (CUA)</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {["all", "infraction"].map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          setCuaFilter(f);
                          setCuaSelectedPin(null);
                        }}
                        className={`px-2 py-0.5 text-[9px] uppercase font-bold rounded border transition-all cursor-pointer ${
                          cuaFilter === f
                            ? "bg-red-600 border-red-600 text-white"
                            : "bg-slate-900 border-slate-800 text-gray-400 hover:text-white"
                        }`}
                      >
                        {f === "all" ? "Toutes concessions" : "Uniquement Infractions"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Map Arena */}
                <div className="relative w-full h-52 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] flex items-center justify-center">
                  
                  {/* Municipal boundary grid markings */}
                  <span className="absolute left-3 top-2 text-[8px] font-mono text-gray-500 uppercase">Zone Ankorondrano (A-I)</span>
                  <span className="absolute right-3 bottom-2 text-[8px] font-mono text-gray-500 uppercase">Zone Analakely (A-V)</span>

                  {/* Roads vector drawings */}
                  <div className="absolute top-1/2 left-0 right-0 h-3.5 bg-slate-800/80 transform rotate-12" />
                  <div className="absolute top-1/3 left-0 right-0 h-4 bg-slate-800/80 transform -rotate-6" />
                  <div className="absolute left-2/3 top-0 bottom-0 w-3.5 bg-slate-800/50" />

                  {/* Map Hotspot Pins */}
                  {[
                    { id: 1, company: "Airtel S.A.", site: "Rond point Ankorondrano", tax: "Payée (Régie municipale)", status: "conforme", amount: 4500000, x: "25%", y: "45%" },
                    { id: 2, company: "Orange Madagascar", site: "Avenue de l'Indépendance", tax: "Payée (Régie municipale)", status: "conforme", amount: 5200000, x: "70%", y: "65%" },
                    { id: 3, company: "Telma Mobile (Réf-TEL90)", site: "Analakely Arcade", tax: "Redevance Impayée (82j de retard)", status: "infraction", amount: 6800000, x: "55%", y: "25%" }
                  ]
                    .filter(pin => {
                      if (cuaFilter === "infraction") return pin.status === "infraction";
                      return true;
                    })
                    .map((pin) => (
                      <button
                        key={pin.id}
                        onClick={() => setCuaSelectedPin(pin)}
                        className={`absolute w-4 h-4 rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-130 shadow-md flex items-center justify-center ${
                          pin.status === "conforme" ? "bg-emerald-500" : "bg-red-500 animate-pulse"
                        }`}
                        style={{ left: pin.x, top: pin.y }}
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </button>
                    ))}

                  {/* Live detailed Drawer Overlay */}
                  {cuaSelectedPin ? (
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/95 border border-slate-800 p-3 rounded-lg text-xxs leading-relaxed animate-slide-in text-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-white flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${cuaSelectedPin.status === 'conforme' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                            {cuaSelectedPin.company}
                          </p>
                          <p className="text-gray-400 mt-0.5 text-[10px]">📍 Emplacement : {cuaSelectedPin.site}</p>
                          <p className="text-gray-400 text-[10px]">💶 Redevance : <strong className="text-amber-400 font-mono">{cuaSelectedPin.amount.toLocaleString('fr-FR')} Ar / an</strong></p>
                          <p className="text-gray-400 text-[10px]">📄 Statut : <span className={`font-semibold font-mono ${cuaSelectedPin.status === 'conforme' ? 'text-emerald-400' : 'text-red-400'}`}>{cuaSelectedPin.tax}</span></p>
                        </div>
                        
                        <div className="flex flex-col gap-1 text-right">
                          <span className={`text-[9px] uppercase font-bold font-mono px-1 py-0.5 rounded ${cuaSelectedPin.status === 'conforme' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                            {cuaSelectedPin.status}
                          </span>
                          {cuaSelectedPin.status === "infraction" && (
                            <button
                              onClick={() => handleCuaPay(cuaSelectedPin.id)}
                              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold px-2 py-1 rounded text-[9px] uppercase mt-1 cursor-pointer"
                            >
                              Faire Recouvrer
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none text-center">
                      <p className="text-xxs font-bold bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-full shadow-lg text-slate-300">
                        Cliquez sur un marqueur cartographique pour lancer l'audit géolocalisé
                      </p>
                    </div>
                  )}

                </div>

                <div className="mt-2.5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Conforme (Payé)
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> En Infraction Fiscal
                  </span>
                  {cuaSelectedPin && (
                    <button onClick={() => setCuaSelectedPin(null)} className="text-indigo-400 hover:underline">Effacer sélection</button>
                  )}
                </div>

              </div>
            )}

            {/* TAB 1: REGISTRY & FISCAL BILLING */}
            {activeTab === 1 && (
              <div className="w-full max-w-2xl mx-auto bg-white border border-gray-150 rounded-2xl p-5 shadow-2xl text-gray-800 space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-gray-150 pb-3">
                  <div>
                    <h4 className="text-xs font-bold text-gray-950 flex items-center gap-1">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      Registre Concessions & Émission des Droits de Place
                    </h4>
                    <p className="text-[10px] text-gray-500">Recouvrement fiscal municipal d'Antananarivo (CUA)</p>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 border border-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">RÉGIE_FISCON</span>
                </div>

                {/* Simulated billing search */}
                <input 
                  type="text"
                  value={receiptSearch}
                  onChange={e => setReceiptSearch(e.target.value)}
                  placeholder="Rechercher par contribuable (ex: Airtel)..."
                  className="w-full bg-gray-50 border border-gray-150 rounded-xl p-2.5 text-xs focus:bg-white focus:outline-neutral-900"
                />

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {[
                    { company: "Airtel Madagascar S.A.", ref: "REC-A40", dimension: "12m² (4x3)", status: "payé", sum: 4500000 },
                    { company: "Orange Madagascar Corp.", ref: "REC-O12", dimension: "18m² (6x3)", status: "payé", sum: 5200000 },
                    { company: "Telma Mobile S.A.", ref: "REC-T90", dimension: "12m² (4x3)", status: "impayé", sum: 6800000 },
                    { company: "Société Brasserie STAR", ref: "REC-S10", dimension: "24m² (8x3)", status: "payé", sum: 8200000 }
                  ]
                    .filter(r => r.company.toLowerCase().includes(receiptSearch.toLowerCase()))
                    .map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-150 text-xs">
                        <div>
                          <p className="font-bold text-gray-950">{item.company}</p>
                          <p className="text-[10px] text-gray-400 font-mono">Quittance : {item.ref} • Dimensions : {item.dimension}</p>
                        </div>
                        <div className="text-right flex items-center gap-4">
                          <div>
                            <p className="font-mono font-bold text-gray-900">{item.sum.toLocaleString('fr-FR')} Ar</p>
                            <p className="text-[9px] text-[#6c6767] uppercase font-bold tracking-wider font-mono">Droit Annuel</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                            item.status === 'payé' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100 animate-pulse'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* TAB 2: GEOSPATIAL INTELLIGENCE */}
            {activeTab === 2 && (
              <div className="w-full max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-5 text-gray-150 shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-white">Routage Intelligent de Tournée Terrain</h4>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-gray-400 px-1.5 py-0.5 rounded font-mono font-bold">GIS Spatial Router</span>
                </div>

                <p className="text-xs text-gray-400">
                  Le système géologique calcule l'itinéraire optimal pour les agents inspecteurs de la Commune Urbaine d'Antananarivo afin de minimiser le temps de trajet lors du recouvrement.
                </p>

                <button 
                  onClick={() => setCuaRouteOptimizationActive(!cuaRouteOptimizationActive)}
                  className="w-full bg-emerald-600 hover:bg-emerald-505 text-white py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300"
                >
                  <Compass className="w-4 h-4" />
                  <span>{cuaRouteOptimizationActive ? "Stopper Optimisateur spatial" : "Générer Route d'Inspection"}</span>
                </button>

                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-xxs font-mono text-gray-300 min-h-[90px] flex flex-col justify-center">
                  {cuaRouteOptimizationActive ? (
                    <div className="space-y-1 text-left">
                      <p className="text-emerald-400 font-bold flex items-center gap-1">✓ ITINÉRAIRE GÉOLOCALISÉ CONSTRUIT (Ankorondrano - Analakely)</p>
                      <p className="mt-1 text-gray-300">🏁 Point de départ : Mairie Analakely</p>
                      <p>📍 Étape 1 : Panneau TEL-90 (Analakely Arcade) - Statut : Redevance Expire !</p>
                      <p>📍 Étape 2 : Rond point Ankorondrano (Panneau AIR-402) - Conformité OK</p>
                      <p className="text-emerald-400 font-bold mt-1">⏳ Estimation : Trajet abrégé de 3.4km, temps de tournée : 22 minutes.</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center">Cliquez sur le bouton pour calculer la trajectoire d'inspection optimisée de façon cartographique.</p>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: BENTO EXECUTIVE DASHBOARD */}
            {activeTab === 3 && (
              <div className="w-full max-w-2xl mx-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white shadow-2xl space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-gray-200">Tableau de Bord Métier - Directeur Financier</h4>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">ANNÉE BUDGETAIRE 2026</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
                  <div className="md:col-span-4 bg-slate-955 p-3.5 rounded-xl border border-slate-800 space-y-2">
                    <p className="text-[10px] text-gray-400 font-mono">OBJECTIF MUN. COLLECTÉ</p>
                    <p className="text-xl font-bold font-mono">82 %</p>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full" style={{ width: "82%" }}></div>
                    </div>
                    <p className="text-[9px] text-[#6c6767] mt-1 font-semibold leading-normal">Sur cible de 25,000,000 Ar prévue.</p>
                  </div>

                  <div className="md:col-span-4 bg-slate-955 p-3.5 rounded-xl border border-slate-800 space-y-1">
                    <p className="text-[10px] text-gray-400 font-mono">INFRACTIONS ACTIVES</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-red-400 font-mono">1 ACTIVE</p>
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    </div>
                    <p className="text-[9px] text-[#6c6767] leading-normal font-sans pt-1">Telma Mobile en Analakely. Quittance non régularisée.</p>
                  </div>

                  <div className="md:col-span-4 bg-slate-955 p-3.5 rounded-xl border border-slate-800 space-y-1">
                    <p className="text-[10px] text-gray-400 font-mono">TAU DE RÉACTIVITÉ AGENTS</p>
                    <p className="text-xl font-bold text-indigo-400 font-mono">94 %</p>
                    <p className="text-[9px] text-[#6c6767] leading-normal font-sans pt-1">Temps moyen d'inspection sous 24 heures après signalement.</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Footer gallery navigation indicator */}
      <div className="border-t border-gray-100 bg-gray-50/80 p-4 border-b border-gray-100 px-6 flex items-center justify-between text-[11px] text-[#6c6767]">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-mono">Fichier de capture : <strong className="text-gray-900 font-semibold">slide_{activeTab + 1}_of_4_mock.png</strong></span>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((tabIndex) => (
            <button
              key={tabIndex}
              onClick={() => setActiveTab(tabIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeTab === tabIndex 
                  ? "bg-slate-900 w-5" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              title={`Accéder à la capture d'écran ${tabIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
