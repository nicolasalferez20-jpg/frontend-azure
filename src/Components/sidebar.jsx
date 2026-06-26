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

        <Link to="/generar" className="sidebar-link">
          <FileText size={18} />
          <span>Generar PDF</span>
        </Link>

        <Link to="/historial" className="sidebar-link">
          <History size={18} />
          <span>Historial</span>
        </Link>
        
      </nav>

    </aside>
  );
}