import {
  Home,
  FileText,
  History,
  
} from "lucide-react";

import { Link, useLocation } from "react-router-dom"; // Importamos useLocation para iluminar la pestaña activa

export default function Sidebar() {
  const location = useLocation(); // Nos dice exactamente en qué página estamos parado el usuario

  return (
    <aside className="w-56 min-h-screen bg-[#1b91db] text-white flex flex-col p-6 shadow-xl border-r border-blue-600/30 shrink-0">
      
      {/* SECCIÓN DEL LOGO */}
      <div className="mb-10 px-2 flex items-center gap-2">
        <span className="text-xl">🔷</span>
        <h2 className="text-lg font-bold tracking-wide text-white">
          Azure Automation
        </h2>
      </div>

      {/* MENÚ DE NAVEGACIÓN */}
      <nav className="flex flex-col gap-2">

        {/* Enlace: Inicio */}
        <Link 
          to="/" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
            ${location.pathname === "/" 
              ? "bg-white/15 text-white shadow-xs" 
              : "text-blue-100 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Home size={18} className="shrink-0 transition-transform group-hover:scale-105" />
          <span>Inicio</span>
        </Link>

        {/* Enlace: Generar PDF */}
        <Link 
          to="/generar" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
            ${location.pathname === "/generar" 
              ? "bg-white/15 text-white shadow-xs" 
              : "text-blue-100 hover:bg-white/10 hover:text-white"
            }`}
        >
          <FileText size={18} className="shrink-0 transition-transform group-hover:scale-105" />
          <span>Generar PDF</span>
        </Link>

        {/* Enlace: Historial */}
        <Link 
          to="/historial" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
            ${location.pathname === "/historial" 
              ? "bg-white/15 text-white shadow-xs" 
              : "text-blue-100 hover:bg-white/10 hover:text-white"
            }`}
        >
          <History size={18} className="shrink-0 transition-transform group-hover:scale-105" />
          <span>Historial</span>
        </Link>
        
      </nav>

    </aside>
  );
}