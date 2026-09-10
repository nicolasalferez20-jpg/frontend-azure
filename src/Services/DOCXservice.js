import API_URL from "../Config/Api";

export const generarDocx = async (idHu) => {
  const response = await fetch(`${API_URL}/generar-docx/${idHu}`);

  if (!response.ok) {
    throw new Error("Error generando DOCX");
  }

  const data = await response.json();

  return data;
};
