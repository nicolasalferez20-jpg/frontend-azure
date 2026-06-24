import API_URL from "../Config/Api";

export const generarPdf = (idHu) => {
    // Construimos la URL exacta que probaste en el navegador
    const url = `${API_URL}/generar-pdf/${idHu}`;
    
    // Opción A: Abre el PDF en una pestaña nueva (El usuario decide si guardarlo o imprimirlo)
    window.open(url, "_blank");

    // Opción B: Si prefieres que se DESCARGUE automáticamente sin abrir pestaña:
    /*
    const link = document.createElement("a");
    link.href = url;
    link.download = `HU_${idHu}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    */
};