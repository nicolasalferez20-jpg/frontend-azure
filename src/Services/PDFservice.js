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


    const data = await response.json();


    return data;

};