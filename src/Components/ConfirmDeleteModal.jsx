import { AlertTriangle } from "lucide-react";

function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  nombreArchivo,
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md h-7/12 rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200 pt-14">
        {/* Encabezado */}
        <div><p className="text-amber-50" > . </p></div>
        <div className="flex flex-col gap-5 items-center px-8 pt-14">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>

          <h2 className="mt-5 text-xl font-bold text-slate-800">
            Eliminar PDF
          </h2>

          <p className="mt-3 text-center text-slate-600">
            ¿Estás seguro de que deseas eliminar el siguiente archivo?
          </p>

          <div className="mt-4 mb-6 w-full rounded-lg bg-slate-100 px-4 py-3">
            <p className="break-all text-center font-semibold text-slate-700">
              {nombreArchivo}
            </p>
          </div>
          {/* Botones */}
          <div className=" border-slate-200 pt-6 flex justify-center gap-10 px-6 pb-5">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="rounded-lg h-10 w-24 border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
            >
              Cancelar
            </button>

            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="rounded-lg h-10 w-24 border bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Eliminando..." : "Eliminar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
