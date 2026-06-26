import { useState } from "react";
import { generarPdf } from "../Services/PDFservice";
import Sidebar from "../Components/sidebar";

export default function GeneratePDF(){

const [id,setId] = useState("");

const handleGenerate = async()=>{

    if(!id){

        alert("Ingrese el ID de la HU");

        return;

    }

    await generarPdf(id);

}
return (
<div>
    <Sidebar />
<h2>
Generar PDF Azure DevOps
</h2>

<p>
Ingrese el ID de la Historia de Usuario
</p>

<input
type="number"

value={id}

onChange={(e)=>setId(e.target.value)}

placeholder="Ej: 12345"

/>
<button onClick={handleGenerate}>
    Generar PDF
    </button>
    </div>
    )
}