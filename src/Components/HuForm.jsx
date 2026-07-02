import { useState } from "react";
import { generarPdf } from "../Services/PDFservice";

function HuForm() {
  const [idHu, setIdHu] = useState("");
  const [loading, setLoading] = useState(false);
  // Nuevo estado para guardar la URL del PDF recién creado
  const [pdfUrl, setPdfUrl] = useState("");

  const generar = async () => {
    if (!idHu.trim()) {
      alert("Por favor, ingresa un ID de Historia de Usuario válido.");
      return;
    }

    try {
      setLoading(true);
      setPdfUrl(""); // Limpiamos si había un PDF generado antes

      const respuesta = await generarPdf(idHu);

      console.log("Respuesta backend:", respuesta);

      // Guardamos la URL pública que nos envía Supabase desde el backend
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
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h2>Generador PDF Azure DevOps</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          placeholder="ID Historia Usuario"
          value={idHu}
          onChange={(e) => setIdHu(e.target.value)}
          disabled={loading}
          style={{
            padding: "8px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={generar}
          disabled={loading || !idHu.trim()}
          style={{
            padding: "8px 16px",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Generando..." : "Generar PDF"}
        </button>
      </div>

      {/* 🚀 EXTRA: Si el PDF ya se generó, mostramos un botón directo para verlo */}
      {pdfUrl && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#e6f7ff", borderRadius: "4px" }}>
          <p style={{ margin: "0 0 10px 0", color: "#0050b3" }}>¡Documento listo!</p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 15px",
              backgroundColor: "#1890ff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold"
            }}
          >
            👀 Abrir PDF Generado
          </a>
        </div>
      )}
    </div>
  );
}

export default HuForm;