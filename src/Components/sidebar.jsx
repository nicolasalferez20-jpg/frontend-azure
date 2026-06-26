import {
  Home,
  FileText,
  History,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../App.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>🔷 Azure Automation</h2>
      </div>

      <nav>

        <Link to="/" className="sidebar-link">
          <Home size={18} />
          <span>Inicio</span>
        </Link>

        <Link to="/consultar" className="sidebar-link">
          <FileText size={18} />
          <span>Consultar HU</span>
        </Link>

        <Link to="/generar" className="sidebar-link">
          <FileText size={18} />
          <span>Generar PDF</span>
        </Link>

        <Link to="/historial" className="sidebar-link">
          <History size={18} />
          <span>Historial</span>
        </Link>

        <Link to="/configuracion" className="sidebar-link">
          <Settings size={18} />
          <span>Configuración</span>
        </Link>

      </nav>
    </aside>
  );
}