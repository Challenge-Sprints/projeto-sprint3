<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Agendamento from './components/Agendamentos';
import Consultas from './components/Consultas';
import './App.css'; // Manter o CSS original do App, se houver

// Componente Home simples para a rota inicial
function Home() {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Hospital das Clínicas</h2>
      <p>Utilize o menu acima para navegar entre as seções de agendamento e consultas.</p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Cabecalho />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/consultas" element={<Consultas />} />
          </Routes>
        </div>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> e6012a97c0a84cc091a7313bd7d237e754c678be
