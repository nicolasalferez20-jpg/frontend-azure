import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { generarPdf } from "../Services/PDFservice";
import SuccessPdfModal from "../Components/SuccessPdfModal";

import { FileText, Loader2, ExternalLink } from "lucide-react";

export default function GeneratePDF() {
  const navigate = useNavigate();

  const [idHu, setIdHu] = useState("");
  const [loading, setLoading] = useState(false);

  const [pdfUrl, setPdfUrl] = useState("");

  const [mostrarModalExito, setMostrarModalExito] = useState(false);
  const [pdfGenerado, setPdfGenerado] = useState(null);

  const generar = async () => {
    if (!idHu.trim()) {
      toast.error("Por favor, ingresa un ID de Historia de Usuario válido.");
      return;
    }

    try {
      setLoading(true);
      setPdfUrl("");

      const respuesta = await generarPdf(idHu);

      if (respuesta.url_archivo) {
        setPdfUrl(respuesta.url_archivo);
      }

      setPdfGenerado(respuesta);
      setMostrarModalExito(true);
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error generando el PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 flex flex-col border-b border-slate-200 justify-between font-sans antialiased text-slate-800 w-full">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 w-full">
        {/* TÍTULO */}
        <div className="text-center mb-8 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600 mb-4">
            Generar Documentación PDF
          </h1>

          <p className="text-base max-w-md md:text-lg text-slate-600 leading-relaxed">
            Ingresa los detalles para extraer la información de Azure DevOps y
            generar un reporte técnico consolidado.
          </p>
        </div>

        {/* TARJETA */}
        <div className="w-full items-center max-w-md bg-white border border-slate-100 shadow-lg py-6 px-8 flex flex-col gap-10">
          {/* INPUT */}
          <div className="mb- flex flex-col items-center gap-12">
            <label className="block text-center text-[15px] font-semibold text-slate-800">
              ID de Historia de Usuario
            </label>

            <input
              type="number"
              placeholder="Ej: 30290"
              value={idHu}
              onChange={(e) => setIdHu(e.target.value)}
              disabled={loading}
              className="w-96 px-4 py-4 border-2 border-slate-300 rounded-none text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#0078d4] text-lg text-center font-medium transition-colors disabled:bg-slate-50"
            />

            <span className="block text-center text-[16px] italic text-slate-500">
              Ingrese el identificador numérico de su tarea o historia.
            </span>
          </div>

          {/* BOTÓN */}
          <button
            onClick={generar}
            disabled={loading || !idHu.trim()}
            className="w-96 items-center h-12 bg-[#0078d4] hover:bg-[#006cc1] text-white font-bold px-6 rounded-none flex justify-center gap-3 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Generando...</span>
              </>
            ) : (
              <>
                <FileText size={20} className="stroke-[2.5]" />
                <span>Generar PDF</span>
              </>
            )}
          </button>
          {/* MODAL DE ÉXITO */}
          <SuccessPdfModal
            isOpen={mostrarModalExito}
            nombreArchivo={
              pdfGenerado?.archivo ||
              pdfGenerado?.nombre ||
              pdfGenerado?.nombre_archivo
            }
            pdfUrl={pdfUrl}
            onClose={() => {
              setMostrarModalExito(false);
              setIdHu("");
              setPdfGenerado(null);
              setPdfUrl("");
            }}
            onHistory={() => {
              setMostrarModalExito(false);
              navigate("/historial");
            }}
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 w-full text-center border-t border-slate-100 bg-white/50">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Azure Enterprise Core • V4.2.1
        </p>
      </footer>

    </div>
  );
}
