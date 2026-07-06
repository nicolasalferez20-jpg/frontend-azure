import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useObtenerHistorialQuery } from "../Services/historialApi";
import { Download,Loader2,AlertCircle,Search,Calendar,ChevronDown,SlidersHorizontal,Plus,FileSpreadsheet,RefreshCw,HelpCircle
} from "lucide-react";

export default function History() {
  const { data, isLoading, error } = useObtenerHistorialQuery();
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [fecha, setFecha] = useState("");

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-800 w-full">
      
      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10 overflow-y-auto">

        {/* ENCABEZADO SUPERIOR (TÍTULO Y BOTONES DE ACCIÓN) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Historial de Reportes</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Gestión y seguimiento de documentos PDF generados por el sistema de automatización.
            </p>
          </div>

          {/* Botones de acción del tope derecho */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs cursor-pointer">
              <FileSpreadsheet size={16} className="text-slate-500" />
              Exportar Lista
            </button>
            <button
              onClick={() => navigate("/generar")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0078d4] text-white rounded-lg text-sm font-semibold hover:bg-[#0056b3] transition-colors shadow-xs cursor-pointer"
            >
              <Plus size={16} />
              Nuevo Reporte
            </button>
          </div>
        </div>

        {/* CONTENEDOR DE FILTROS (BARRAS DE BÚSQUEDA Y SELECTS) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-6 flex flex-col md:flex-row items-end md:items-center gap-4 w-full">

          {/* Input de Búsqueda */}
          <div className="w-full md:flex-1">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Buscar por ID o Nombre
            </label>
            <div className="relative w-full">
              {/* Icono Condicional */}
              {!busqueda.trim() && (
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={18}
                />
              )}
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="          Ej: HU-30029 o Reporte Mensual..."
                className={`w-full pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white placeholder-slate-400 focus:outline-none focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4] transition-all ${
                  !busqueda.trim() ? "pl-10" : "pl-4"
                }`}
              />
            </div>
          </div>

          {/* Filtro: Estado */}
          <div className="w-full md:w-52">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estado</label>
            <div className="relative">
              <select className="w-full appearance-none pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm bg-white text-slate-700 focus:outline-none focus:border-[#0078d4] transition-all cursor-pointer">
                <option>Todos los estados</option>
                <option>Completado</option>
                <option>En Proceso</option>
                <option>Error</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Filtro: Rango de Fecha */}
          <div className="w-full md:w-56">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Rango de Fecha
            </label>
            <div className="relative w-full">
              {/* El icono de calendario solo se muestra si "fecha" está vacío */}
              {!fecha && (
                <Calendar
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={16}
                />
              )}
              <select
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className={`w-full appearance-none pr-10 py-2 border border-slate-200 rounded-lg text-sm bg-white text-slate-700 focus:outline-none focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4] transition-all cursor-pointer ${
                  !fecha ? "pl-10" : "pl-4"
                }`}
              >
                {/* Opción por defecto para cuando no hay nada seleccionado */}
                <option value=""></option>
                <option value="30-dias">Últimos 30 días</option>
                <option value="7-dias">Últimos 7 días</option>
                <option value="este-mes">Este mes</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Botón de Ajustes Adicionales de Filtro */}
          <button className="p-2 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg text-slate-500 transition-colors cursor-pointer" title="Más filtros">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* PANEL PRINCIPAL DE LA TABLA */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden w-full">

          {/* ⏳ ESTADO: CARGANDO */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
              <Loader2 size={32} className="animate-spin text-[#0078d4]" />
              <p className="text-sm font-medium">Cargando registros del historial...</p>
            </div>
          )}

          {/* ❌ ESTADO: ERROR */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16 gap-2 text-red-500">
              <AlertCircle size={32} />
              <p className="text-sm font-semibold text-slate-800">Error al enlazar con el servidor externo</p>
            </div>
          )}

          {/* 📊 ESTRUCTURA DE LA TABLA */}
          {data && data.length > 0 ? (
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4">ID Historia</th>
                    <th className="px-6 py-4">Nombre del Documento</th>
                    <th className="px-6 py-4">Fecha y Hora</th>
                    <th className="px-6 py-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                  {data.map((pdf) => {

                    const isError = pdf.estado?.toLowerCase() === 'error' || (!pdf.urlArchivo && !pdf.url_archivo);
                    const isProcessing = pdf.estado?.toLowerCase() === 'en proceso';

                    return (
                      <tr key={pdf.id} className="hover:bg-slate-50/60 transition-colors">

                        {/* 1. ESTADO BADGE */}
                        <td className="px-6 py-4">
                          {isError ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Error
                            </span>
                          ) : isProcessing ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> En Proceso
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Completado
                            </span>
                          )}
                        </td>

                        {/* 2. ID HISTORIA (Enlace Azul) */}
                        <td className="px-6 py-4">
                          <a href={`#hu-${pdf.idHu}`} className="text-[#0078d4] hover:underline font-semibold">
                            HU-{pdf.idHu}
                          </a>
                        </td>

                        {/* 3. NOMBRE DEL DOCUMENTO */}
                        <td className="px-6 py-4 text-slate-600 font-normal">
                          {pdf.nombre}
                        </td>

                        {/* 4. FECHA Y HORA */}
                        <td className="px-6 py-4 text-slate-500 font-normal">
                          {pdf.fecha || "24 Oct 2023, 14:30"}
                        </td>

                        {/* 5. ACCIONES (Descargar / Reintentar / Info) */}
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            {isError ? (
                              <>
                                <HelpCircle size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" title="Ver detalle del error" />
                                <RefreshCw size={16} className="text-slate-400 hover:text-[#0078d4] cursor-pointer" title="Reintentar generación" />
                              </>
                            ) : (
                              <a
                                href={pdf.urlArchivo || pdf.url_archivo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-slate-400 hover:text-[#0078d4] transition-colors ${isProcessing ? 'pointer-events-none opacity-30' : 'cursor-pointer'}`}
                                title="Descargar PDF"
                              >
                                <Download size={18} />
                              </a>
                            )}
                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            /* 📭 SIN REGISTROS MOCK */
            !isLoading && !error && (
              <div className="text-center py-20 text-slate-400 text-sm">No se encontraron reportes.</div>
            )
          )}

          {/* BARRA INFERIOR DE PAGINACIÓN */}
          <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
            <span className="text-xs text-slate-500 font-medium">
              Mostrando 1-{data?.length || 0} de {data?.length || 0} reportes
            </span>

            {/* Controladores de páginas numeradas */}
            <div className="inline-flex shadow-xs rounded-lg border border-slate-200 bg-white text-sm font-semibold overflow-hidden">
              <button className="px-3 py-1.5 text-slate-400 hover:bg-slate-50 border-r border-slate-200 transition-colors cursor-not-allowed">&lt;</button>
              <button className="px-3.5 py-1.5 text-slate-600 hover:bg-slate-50 border-r border-slate-200 transition-colors">1</button>
              <button className="px-3.5 py-1.5 text-slate-600 hover:bg-slate-50 border-r border-slate-200 transition-colors">2</button>
              <button className="px-3.5 py-1.5 text-slate-600 hover:bg-slate-50 border-r border-slate-200 transition-colors">3</button>
              <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors">&gt;</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}