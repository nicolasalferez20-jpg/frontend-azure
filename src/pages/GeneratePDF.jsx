import React from "react";
import HuForm from "../Components/HuForm";
import { Home, FileText, History, Zap } from "lucide-react"; // Usamos lucide-react para los íconos si los tienes, si no, puedes usar SVGs

export default function GeneratePDF() {
  return (

    <div className="min-h-[calc(100vh-73px)] bg-slate-50 flex flex-col border-b border-slate-200 justify-between font-sans antialiased text-slate-800 w-full">
      
      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 w-full">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-8 max-w-xl">

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600 mb-4">
            Generar Documentación PDF
          </h1>
          <p className="text-base max-w-md md:text-lg text-slate-600 leading-relaxed">
            Ingresa los detalles para extraer la información de Azure DevOps y generar un reporte técnico consolidado.
          </p>
        </div>

        {/* Aumentamos el padding vertical con py-16 y mantenimos px-8 para los lados */}
        <div className="w-full max-w-md bg-white rounded-none border border-slate-50 shadow-lg py-6 px-0 flex flex-col">
          <HuForm />
          </div>
      </main>

      <footer className="py-8 w-full text-center border-t border-slate-100 bg-white/50">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Azure Enterprise Core • V4.2.1
        </p>
      </footer>
      
    </div>
  );
}