import HuForm from "../Components/HuForm";
import Sidebar from "../Components/sidebar";


export default function GeneratePDF(){

    return (

        <div className="layout">
            <Sidebar/>
            <main className="content">
                <h1>
                    Generar PDF Azure DevOps
                </h1>
                <HuForm />
            </main>
        </div>

    )

}