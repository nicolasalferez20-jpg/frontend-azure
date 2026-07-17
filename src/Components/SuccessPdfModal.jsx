import { CheckCircle, ExternalLink } from "lucide-react";

function SuccessPdfModal({
  isOpen,
  onClose,
  onHistory,
  nombreArchivo,
  pdfUrl,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md h-10/12 rounded-2xl bg-white shadow-2xl">
        {/* Encabezado */}

        <div className="flex flex-col gap-2 items-center px-6 pt-7">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-slate-800">
            ¡PDF generado correctamente!
          </h2>

          <p className="mt-2 text-center text-slate-600">
            El documento fue generado y almacenado correctamente.
          </p>

          <div className="mt-0.5 w-full rounded-lg bg-slate-100 px-2 py-3">
            <p className="break-all text-center font-semibold text-slate-700">
              {nombreArchivo}
            </p>
          </div>

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-14 w-30 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              <ExternalLink size={18} />
              Abrir PDF
            </a>
          )}
          {/* Botones */}
          <div className="mt-0.5 flex justify-center gap-12 border-slate-200 px-6 py-5">
            <button
              onClick={onClose}
              className="rounded-lg h-12 w-36 border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Generar otro
            </button>

            <button
              onClick={onHistory}
              className="rounded-lg h-12 w-36 bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Ver historial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SuccessPdfModal;
