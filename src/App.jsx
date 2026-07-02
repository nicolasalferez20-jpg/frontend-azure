import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Zap, Home, FileText, History as HistoryIcon } from 'lucide-react'; 

import HomePage from './pages/Home';
import HistoryPage from './pages/History';
import GeneratePDF from './pages/GeneratePDF';
import "./App.css";
import "./index.css";

function App() {

  return (

    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
        
        {/* HEADER GLOBAL */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
          {/* Logo / Título de la App */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Zap size={20} className="fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Azure Automatización
            </span>
          </div>

          {/* Menú de Navegación con Íconos */}
          <nav className="flex items-center gap-6">
            <Link className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" 
            to="/">
              <Home size={18} />
              Inicio
            </Link>

            <Link className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" 
            to="/generar">
              <FileText size={18} />
              Generar PDF
            </Link>

            <Link className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" 
            to="/historial">
              <HistoryIcon size={18} />
              Historial
            </Link>

          </nav>

        </header>

        <main className="flex-1 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generar" element={<GeneratePDF />} />
            <Route path="/historial" element={<HistoryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;