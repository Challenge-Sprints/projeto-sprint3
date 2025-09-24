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