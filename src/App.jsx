import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'

import Home from './pages/Home'
import HuForm from './Components/HuForm'
import History from './pages/History'
import GeneratePDF from './pages/GeneratePDF'
import Button from './Components/button'
import "./App.css"


function App() {

  return (

    <Router>

      <div className="app">

        <header className="app-header">

          <h1>
            🔷 Azure Automation
          </h1>

          <nav>

            <Link 
              className="nav-button" to="/">
                <Button variant="primary">
                  Inicio
                </Button>
            </Link>

            <Link 
              className="nav-button" to="/consultar">
                <Button variant="primary">
                  Consultar HU
                </Button>
            </Link>

            <Link 
              className="nav-button" to="/generar">
                <Button>
                  Generar PDF
                </Button>
            </Link>

            <Link 
              className="nav-button" to="/historial">
                <Button>
                  Historial
                </Button>
            </Link>

          </nav>

        </header>

        <main className="content">
          <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/consultar"element={<HuForm />}/>
            <Route path="/generar"element={<GeneratePDF />}/>
            <Route path="/historial"element={<History />}/>
            <Route path="*"element={<Navigate to="/" replace />}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App