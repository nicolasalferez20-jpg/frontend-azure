import Sidebar from "../Components/sidebar";
import { useObtenerHistorialQuery } from "../Services/historialApi";


export default function History(){

    const {
        data,
        isLoading,
        error

    } = useObtenerHistorialQuery();

    return(
        <div className="layout">
            <Sidebar/>

            <main className="content">

                <h2> Historial de PDFs</h2>
                <p> Aquí podrás consultar los documentos generados anteriormente.</p>
                {
                    isLoading && (

                        <div className="card">

                            <h3> Cargando historial... </h3>

                        </div>

                    )
                }

                {
                    error && (

                        <div className="card">

                            <h3> Error cargando historial</h3>

                        </div>
                    )
                }

                {
                    data && data.length > 0 ? (
                        data.map((pdf)=>(

                            <div 
                                className="card"
                                key={pdf.id}>
                                <h3>HU: {pdf.idHu}</h3>
                                <p>Fecha: {pdf.fecha}</p>
                                <p>Archivo: {pdf.nombre}</p>
                            </div>
                            ))

                    ) : (
                        !isLoading && (
                            
                            <div className="card">
                                <h3> No hay documentos todavía</h3>
                                <p> Los PDFs generados aparecerán aquí.</p>

                            </div>
                        )
                    )
                }
            </main>

        </div>

    )
}