import { useState } from "react";
import { generarPdf } from "../Services/PDFservice";

function HuForm() {
  const [idHu, setIdHu] = useState("");

  const generar = () => {
    // Validación: Si el input está vacío, no hace nada (o muestra una alerta)
    if (!idHu.trim()) {
      alert("Por favor, ingresa un ID de Historia de Usuario válido.");
      return;
    }
    
    generarPdf(idHu);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Generador PDF Azure DevOps</h2>

      <input
        type="number"
        placeholder="ID Historia Usuario"
        value={idHu}
        onChange={(e) => setIdHu(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* Deshabilitamos el botón si el input está vacío para mejorar la UX */}
      <button 
        onClick={generar} 
        disabled={!idHu.trim()}
        style={{ padding: "8px 16px", cursor: idHu.trim() ? "pointer" : "not-allowed" }}
      >
        Generar PDF
      </button>
    </div>
  );
}

export default HuForm;