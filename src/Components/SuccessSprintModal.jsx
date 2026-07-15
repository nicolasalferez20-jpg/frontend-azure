import { CheckCircle } from "lucide-react";

function SuccessSprintModal({ isOpen, onClose, onHistory, resultado }) {
  if (!isOpen || !resultado) return null;

  const sprint = resultado.sprint.split("\\").pop();

  const totalHistorias = resultado.total_historias;

  const totalGenerados = resultado.pdfs_generados.length;

  const totalErrores = resultado.errores.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl" items-center justify-center>
        <div>
          <p className="text-white">.</p>
        </div>

        {/* Encabezado */}
        <div className="flex flex-col items-center gap-4 px-8 pt-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-800">
            ¡Proceso completado!
          </h2>

          <p className="mt-3 text-center text-slate-600">
            Los documentos del Sprint fueron generados y almacenados
            correctamente.
          </p>

          {/* Resumen */}
          <div className="mt-6 w-full rounded-lg bg-slate-100 p-5">
            <div className="flex justify-center border-b border-slate-300 pb-3">
              <span className="font-medium text-slate-600">Sprint : </span>

              <span className="font-bold text-slate-800"> {sprint}</span>
            </div>

            <div className="flex justify-center py-3 border-b border-slate-300">
              <span className="font-medium text-slate-600">Historias : </span>

              <span className="font-bold text-slate-800"> {totalHistorias}</span>
            </div>

            <div className="flex justify-center py-3 border-b border-slate-300">
              <span className="font-medium text-slate-600">PDFs generados : </span>

              <span className="font-bold text-green-600"> {totalGenerados}</span>
            </div>

            <div className="flex justify-center pt-3">
              <span className="font-medium text-slate-600">Errores : </span>

              <span
                className={`font-bold ${
                  totalErrores > 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {totalErrores}
              </span>
            </div>
          </div>

          {/* Botones */}
          <div className="mt-8 flex justify-center gap-3 px-6 py-5">
            <button
              onClick={onClose}
              className="rounded-lg h-10 w-28 border border-slate-300 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cerrar
            </button>

            <button
              onClick={onHistory}
              className="rounded-lg h-10 w-32 bg-blue-600 font-medium text-white transition hover:bg-blue-700"
            >
              Ver historial
            </button>
          </div>
          <div className="text-white"><p>.</p></div>
        </div>
      </div>
    </div>
  );
}

export default SuccessSprintModal;
