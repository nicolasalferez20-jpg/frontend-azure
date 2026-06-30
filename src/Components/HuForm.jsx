import { useState } from "react";
import { generarPdf } from "../Services/PDFservice";


function HuForm() {


  const [idHu, setIdHu] = useState("");

  const [loading, setLoading] = useState(false);



  const generar = async () => {


    if (!idHu.trim()) {

      alert(
        "Por favor, ingresa un ID de Historia de Usuario válido."
      );

      return;
    }



    try {


      // Bloquea el botón
      setLoading(true);



      // Espera a que el backend termine de generar el PDF
      await generarPdf(idHu);



    } catch (error) {


      console.error(
        "Error generando PDF:",
        error
      );


      alert(
        "Ocurrió un error generando el PDF"
      );



    } finally {


      // Habilita nuevamente el botón
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


      <h2>
        Generador PDF Azure DevOps
      </h2>



      <input

        type="number"

        placeholder="ID Historia Usuario"

        value={idHu}


        onChange={
          (e) => setIdHu(e.target.value)
        }


        disabled={loading}


        style={{
          padding: "8px",
          marginRight: "10px"
        }}

      />




      <button


        onClick={generar}


        disabled={
          !idHu.trim() || loading
        }



        style={{

          padding: "8px 16px",


          cursor:
            (!idHu.trim() || loading)
            ? "not-allowed"
            : "pointer"

        }}



      >


        {

          loading

          ? "Generando PDF..."

          : "Generar PDF"

        }


      </button>



    </div>

  );

}


export default HuForm;