import { Link } from 'react-router-dom';
import { useObtenerHistorialQuery } from "../Services/historialApi";
import { Search, PlusCircle, Clock, Download, FileText, History, Loader2, AlertCircle } from "lucide-react";

export default function Home() {
  // Consumimos la misma lógica del historial
  const { data, isLoading, error } = useObtenerHistorialQuery();

  return (
    // Quitamos la barra lateral y dejamos que el contenedor base maneje todo el ancho
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-800 w-full">
      
      {/* CONTENIDO PRINCIPAL (Ocupa el 100% del ancho con p-10) */}
      <main className="w-full p-10 overflow-y-auto">
        
        {/* BANNER DE BIENVENIDA */}
        <div className="relative overflow-hidden w-full bg-linear-to-r from-[#0078d4] via-[#0056b3] to-[#003a75] text-white p-10 rounded-2xl shadow-md mb-8">
          <div className="absolute inset-0 opacity-10 bg-radial from-white via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-2">
              ¡Bienvenido de nuevo! 👋
            </h1>
            <p className="text-blue-100 text-base leading-relaxed font-medium">
              Automatiza la extracción de Historias de Usuario desde Azure DevOps y genera documentos PDF profesionales de forma rápida y segura.
            </p>
          </div>
        </div>

        {/* SECCIÓN DE TARJETAS (REJILLA GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Tarjeta 1: Consultar Historial */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between items-start min-h-50 hover:shadow-md transition-shadow">
            <div className="w-full">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0078d4] mb-4">
                <Search size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Consultar Historial</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Busca y consulta el registro detallado de historias de usuario por su ID único.
              </p>
            </div>
            <Link className="flex items-center gap-2 text-sm font-semibold text-[#0078d4] hover:text-[#0056b3] transition-colors mt-4" to="/historial">
              <History size={18} />
              Ir al historial &rarr;
            </Link>
          </div>

          {/* Tarjeta 2: Generar PDF */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between items-start min-h-50 hover:shadow-md transition-shadow">
            <div className="w-full">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <PlusCircle size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Generar PDF</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Inicia el proceso automatizado para convertir tus Azure Boards en reportes PDF.
              </p>
            </div>
            <Link className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mt-4" to="/generar">
              <FileText size={18} />
              Empezar generación &rarr;
            </Link>
          </div>

          {/* Tarjeta 3: Historial */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between items-start min-h-50 hover:shadow-md transition-shadow">
            <div className="w-full">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <Clock size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Historial</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Accede a la lista completa de documentos generados anteriormente por el equipo.
              </p>
            </div>
            <Link className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mt-4" to="/historial">
              <History size={18} />
              Ver registros &rarr;
            </Link>
          </div>

        </div>

        {/* TABLA DE ACTIVIDAD RECIENTE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden w-full">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-[#0078d4] rounded-full"></div>
              <h2 className="text-lg font-bold text-slate-900">Actividad reciente</h2>
            </div>
            <Link to="/historial" className="text-sm font-semibold text-[#0078d4] hover:underline">
              Ver todo el historial &rarr;
            </Link>
          </div>

          {/* ⏳ ESTADO CARGANDO */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 gap-2 text-slate-400">
              <Loader2 size={24} className="animate-spin text-[#0078d4]" />
              <p className="text-xs font-medium">Sincronizando últimas consultas...</p>
            </div>
          )}

          {/* ❌ ESTADO ERROR */}
          {error && (
            <div className="flex items-center justify-center py-10 gap-2 text-red-500 text-sm font-medium">
              <AlertCircle size={18} />
              <span>No se pudieron recuperar las consultas recientes.</span>
            </div>
          )}

          {/* 📊 TABLA CON DATA DINÁMICA */}
          {data && data.length > 0 ? (
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4">ID Historia</th>
                    <th className="px-6 py-4">Nombre del Documento</th>
                    <th className="px-6 py-4">Fecha y Hora</th>
                    <th className="px-6 py-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                  {data.slice(0, 3).map((pdf) => (
                    <tr key={pdf.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Completado
                        </span>
                      </td>
                      <td className="px-6 py-4.5 font-bold text-slate-900">US-{pdf.idHu}</td>
                      <td className="px-6 py-4.5 text-slate-600 truncate max-w-xs">{pdf.nombre}</td>
                      <td className="px-6 py-4.5 text-slate-500">{pdf.fecha || "Hace un momento"}</td>
                      <td className="px-6 py-4.5 text-center">
                        {pdf.urlArchivo || pdf.url_archivo ? (
                          <a 
                            href={pdf.urlArchivo || pdf.url_archivo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-[#0078d4] transition-colors inline-block cursor-pointer"
                          >
                            <Download size={18} />
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic font-normal">Sin url</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !isLoading && !error && (
              <div className="text-center py-12 text-slate-400 text-xs font-medium">
                No hay actividades de extracción registradas recientemente.
              </div>
            )
          )}

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 font-medium px-6">
            Mostrando los últimos 3 registros generados.
          </div>
        </div>

      </main>
    </div>
  );
}