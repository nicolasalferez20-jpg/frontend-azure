import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SuccessSprintModal from "../Components/SuccessSprintModal";

import { obtenerSprints, generarPdfSprint } from "../Services/sprintService";

import { FileStack, Loader2 } from "lucide-react";

export default function ConsultaSprint() {
  const [sprint, setSprint] = useState("");
  const [sprints, setSprints] = useState([]);
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    cargarSprints();
  }, []);

  const cargarSprints = async () => {
    try {
      setLoading(true);

      const data = await obtenerSprints();

      setSprints(data);
    } catch (error) {
      console.error(error);
      toast.error("No fue posible cargar los Sprint.");
    } finally {
      setLoading(false);
    }
  };

  const generar = async () => {
    if (!sprint) {
      toast.error("Seleccione un Sprint.");
      return;
    }

    try {
      setLoading(true);

      const respuesta = await generarPdfSprint(sprint);

      console.log(respuesta);

      setResultado(respuesta);

      setMostrarModal(true);

      setSprint("");
    } catch (error) {
      console.error(error);

      toast.error("Ocurrió un error generando los PDFs del Sprint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 flex flex-col border-b border-slate-200 justify-between font-sans antialiased text-slate-800 w-[98%] mx-auto">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 w-full">
        {/* TÍTULO */}
        <div className="text-center mb-8 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600 mb-4">
            Consultar por Sprint
          </h1>

          <p className="text-base max-w-md md:text-lg text-slate-600 leading-relaxed">
            Seleccione un Sprint para generar automáticamente la documentación
            PDF de todas las Historias de Usuario asociadas.
          </p>
        </div>

        {/* TARJETA */}
        <div className="w-full items-center max-w-md bg-white border border-slate-100 shadow-lg py-6 px-8 flex flex-col gap-10">

          {/* SELECT */}
          <div className="flex flex-col items-center gap-8">
            <label className="block text-center text-[15px] font-semibold text-slate-800">
              Sprint
            </label>

            <select
              value={sprint}
              onChange={(e) => setSprint(e.target.value)}
              disabled={loading}
              className="w-96 px-4 py-4 border-2 border-slate-300 rounded-none text-slate-700 text-lg font-medium focus:outline-none focus:border-[#0078d4] transition-colors disabled:bg-slate-50"
            >
              <option value="">Seleccione un Sprint</option>

              {sprints.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
            </select>

            <span className="block text-center text-[16px] italic text-slate-500">
              Seleccione el Sprint del cual desea generar toda la documentación.
            </span>
          </div>

          {/* BOTÓN */}
          <button
            onClick={generar}
            disabled={loading || !sprint}
            className="w-96 h-12 bg-[#0078d4] hover:bg-[#006cc1] text-white font-bold px-6 rounded-none flex items-center justify-center gap-3 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Generando...</span>
              </>
            ) : (
              <>
                <FileStack size={20} />
                <span>Generar PDFs del Sprint</span>
              </>
            )}
          </button>
          
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 w-full text-center border-t border-slate-100 bg-white/50">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Azure Enterprise Core • V4.2.1
        </p>
      </footer>
      <SuccessSprintModal
        isOpen={mostrarModal}
        resultado={resultado}
        onClose={() => {
          setMostrarModal(false);
          setResultado(null);
        }}
        onHistory={() => {
          setMostrarModal(false);
          navigate("/historial");
        }}
      />
    </div>
  );
}
