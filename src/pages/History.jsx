import Sidebar from "../Components/sidebar";
import { useObtenerHistorialQuery } from "../Services/historialApi";
import API_URL from "../Config/Api";

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
                <h2>Historial de PDFs</h2>
                <p>Aquí podrás consultar los documentos generados anteriormente.</p>
                
                {
                    isLoading && (
                        <div className="card">
                            <h3>Cargando historial...</h3>
                        </div>
                    )
                }

                {
                    error && (
                        <div className="card">
                            <h3>Error cargando historial</h3>
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

                                {/* 🔗 Enlace directo a Supabase Storage */}
                                {pdf.urlArchivo || pdf.url_archivo ? (
                                    <a 
                                        href={pdf.urlArchivo || pdf.url_archivo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn-view"
                                        style={{
                                            display: 'inline-block',
                                            marginTop: '10px',
                                            padding: '8px 12px',
                                            backgroundColor: '#3ecf8e', // Verde característico de Supabase
                                            color: '#fff',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        📄 Ver PDF
                                    </a>
                                ) : (
                                    <span style={{ color: 'gray', display: 'block', marginTop: '10px', fontSize: '0.9em' }}>
                                        Sin enlace de descarga
                                    </span>
                                )}
                            </div>
                        ))
                    ) : (
                        !isLoading && (
                            <div className="card">
                                <h3>No hay documentos todavía</h3>
                                <p>Los PDFs generados aparecerán aquí.</p>
                            </div>
                        )
                    )
                }
            </main>
        </div>
    )
}