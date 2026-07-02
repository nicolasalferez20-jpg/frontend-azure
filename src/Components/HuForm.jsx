import { useState } from "react";
import { generarPdf } from "../Services/PDFservice";
import { FileText, Loader2, ExternalLink } from "lucide-react"; 

function HuForm() {
  const [idHu, setIdHu] = useState("");
  const [loading, setLoading] = useState(false);

  const [pdfUrl, setPdfUrl] = useState("");

  const generar = async () => {
    if (!idHu.trim()) {
      alert("Por favor, ingresa un ID de Historia de Usuario válido.");
      return;
    }

    try {
      setLoading(true);
      setPdfUrl(""); 

      const respuesta = await generarPdf(idHu);

      
      if (respuesta.url_archivo) {
        setPdfUrl(respuesta.url_archivo);
      }

      alert(`PDF generado correctamente: ${respuesta.archivo}`);

    } catch (error) {
      console.error("Error generando PDF:", error);
      alert("Ocurrió un error generando el PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* gap-10 obliga a separar el bloque del input del bloque del botón de forma contundente */
    <div className="w-full flex flex-col gap-10">
      
      {/* CONTENEDOR DEL INPUT */}
      <div className="flex flex-col gap-10">
        {/* Título del input perfectamente centrado y en negrita */}
        <label className="block w-full text-left text-[15px] font-semibold text-slate-800 mb-3">
          ID de Historia de Usuario
          </label>
        
        {/* Input con borde oscuro visible, py-4 para altura interna y texto centrado grande */}
        <input
          type="number"
          placeholder="Ej: 45290"
          value={idHu}
          onChange={(e) => setIdHu(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-4 border-2 border-slate-300 rounded-none text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#0078d4] text-lg text-center font-medium transition-colors disabled:bg-slate-50"
        />

        {/* Mensaje inferior en cursiva y centrado */}
        <span className="block w-full text-left text-[15px] text-xs text-slate-500 italic font-medium text-s mt-1">
          Ingrese el identificador numérico de su tarea o historia.
        </span>
      </div>

      {/* BOTÓN AZUL CORPORATIVO */}
      {/* Usamos el color hexadecimal exacto de la interfaz #0078d4, py-4.5 para grosor y sombra */}
      <button
        onClick={generar}
        disabled={loading || !idHu.trim()}
       className="w-full h-16 bg-[#0078d4] hover:bg-[#006cc1] text-white font-bold px-6 rounded-none flex items-center justify-center gap-3 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-base tracking-wide"
       >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Generando...</span>
          </>
        ) : (
          <div className="flex items-center justify-center gap-3 w-full py-2">
            <FileText size={20} className="stroke-[2.5]" />
            <span className="leading-none text-base">Generar PDF</span>
          </div>
        )}
      </button>

      {/* SECCIÓN DE ENLACE DE DESCARGA */}
      {pdfUrl && (
        <div className="mt-2 p-4 bg-emerald-50 border border-emerald-200 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <p className="text-sm font-bold text-emerald-800">¡Documento listo!</p>
            <p className="text-xs text-emerald-600">El reporte se procesó con éxito.</p>
          </div>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-none shadow-sm transition-colors whitespace-nowrap"
          >
            <ExternalLink size={16} />
            Abrir PDF
          </a>
        </div>
      )}
      
    </div>
  );
}

export default HuForm;