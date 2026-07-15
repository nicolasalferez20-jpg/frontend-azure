const API_URL = "https://automatizacion-backend.onrender.com";

/**
 * Obtiene todos los Sprint disponibles.
 */
export async function obtenerSprints() {
  const response = await fetch(`${API_URL}/sprints`);

  if (!response.ok) {
    throw new Error("No fue posible obtener los Sprint.");
  }

  return await response.json();
}

/**
 * Genera los PDFs de todas las HU de un Sprint.
 */
export async function generarPdfSprint(iterationPath) {
  const response = await fetch(
    `${API_URL}/generar-pdfs-sprint?iteration_path=${encodeURIComponent(iterationPath)}`
  );

  if (!response.ok) {
    throw new Error("No fue posible generar los PDFs del Sprint.");
  }

  return await response.json();
}