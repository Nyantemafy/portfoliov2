import React, { useMemo, useState } from "react";
import { Eye, Image as ImageIcon } from "lucide-react";
import { Project } from "../types";

import meonCoach from "../assets/images/meOn/coachAI.png";
import meonDashboard from "../assets/images/meOn/dashboard.png";
import meonEntraide from "../assets/images/meOn/entraide.png";
import meonProjet from "../assets/images/meOn/projet.png";

import motorlandDashboard from "../assets/images/motorland/dashboard.png";
import motorlandRapports from "../assets/images/motorland/Rapports.png";
import motorlandReapprovisionnement from "../assets/images/motorland/reapprovisionement.png";
import motorlandStock from "../assets/images/motorland/stock.png";

import cuaControl from "../assets/images/cua/control_panneau.jpeg";
import cuaList from "../assets/images/cua/liste_et_detail.jpeg";
import cuaLogin from "../assets/images/cua/login_connexion.jpeg";
import cuaMap from "../assets/images/cua/map.jpeg";

interface ProjectGalleryProps {
  project: Project;
}

const PROJECT_SCREENSHOTS: Record<string, Array<{ label: string; src: string }>> = {
  meon: [
    { label: "Dashboard", src: meonDashboard },
    { label: "Entraide", src: meonEntraide },
    { label: "Coach IA", src: meonCoach },
    { label: "Projet", src: meonProjet },
  ],
  motorland: [
    { label: "Dashboard", src: motorlandDashboard },
    { label: "Stock", src: motorlandStock },
    { label: "Reapprovisionnement", src: motorlandReapprovisionnement },
    { label: "Rapports", src: motorlandRapports },
  ],
  cua: [
    { label: "Connexion", src: cuaLogin },
    { label: "Carte", src: cuaMap },
    { label: "Controle panneau", src: cuaControl },
    { label: "Liste et detail", src: cuaList },
  ],
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const screenshots = useMemo(
    () => PROJECT_SCREENSHOTS[project.id] || [{ label: "Capture", src: project.image }],
    [project.id, project.image],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex] || screenshots[0];

  return (
    <div className="w-full bg-white border border-gray-100 overflow-hidden shadow-lg">
      <div className="bg-neutral-950 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-neutral-800">
        <div className="flex items-center gap-2 text-white">
          <Eye className="w-4 h-4 text-gray-300" />
          <div>
            <p className="text-xs font-bold">{project.title}</p>
            <p className="text-[10px] font-mono text-gray-500">Captures reelles depuis src/assets/images</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {screenshots.map((shot, index) => (
            <button
              key={shot.label}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                activeIndex === index
                  ? "bg-white text-neutral-950"
                  : "bg-neutral-900 text-gray-400 hover:text-white"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="truncate">{shot.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-3 md:p-5">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <img
            src={activeScreenshot.src}
            alt={`${project.title} - ${activeScreenshot.label}`}
            className="w-full max-h-[560px] object-contain bg-white"
          />
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white px-5 py-3 flex items-center justify-between text-[11px] text-gray-500">
        <span className="font-mono">
          Capture {activeIndex + 1} / {screenshots.length}: <strong className="text-gray-900">{activeScreenshot.label}</strong>
        </span>
        <div className="flex gap-2">
          {screenshots.map((shot, index) => (
            <button
              key={shot.label}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === index ? "w-5 bg-neutral-950" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              title={shot.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
