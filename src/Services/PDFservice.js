import API_URL from "../Config/Api";


export const generarPdf = async (idHu) => {

    const response = await fetch(
        `${API_URL}/generar-pdf/${idHu}`
    );


    if(!response.ok){

        throw new Error(
            "Error generando PDF"
        );

    }


    const blob = await response.blob();


    const url = window.URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;

    link.download = `HU_${idHu}.pdf`;


    document.body.appendChild(link);

    link.click();


    link.remove();


    window.URL.revokeObjectURL(url);

};