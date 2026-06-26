import Sidebar from "../Components/sidebar";

export default function Home() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">
        <div className="bienvenido">
          <h1>Bienvenido 👋</h1>
        </div>

        <p>
          Automatiza la extracción de Historias de Usuario
          desde Azure DevOps y genera documentos PDF.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Consultar Historial</h3>
            <p>Busca una historia de usuario por ID.</p>
          </div>

          <div className="card">
            <h3>Generar PDF</h3>
            <p>Genera documentos automáticamente.</p>
          </div>

          <div className="card">
            <h3>Historial</h3>
            <p>Consulta PDFs generados.</p>
          </div>

        </div>

      </main>

    </div>
  );
}