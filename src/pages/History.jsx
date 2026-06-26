import Sidebar from "../Components/sidebar";

export default function History(){

    return(

        <div className="layout">
            <Sidebar/>

            <main className="content">
                <h2>
                Historial de PDFs
            </h2>


            <p>
                Aquí podrás consultar los documentos generados anteriormente.
            </p>


            <div className="card">

                <h3>
                    No hay documentos todavía
                </h3>

                <p>
                    Los PDFs generados aparecerán aquí.
                </p>


            </div>
            </main>


        </div>

    )

}