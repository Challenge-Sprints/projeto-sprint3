import { Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <header>
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
        <nav>
            <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-200">Início</Link></li>
            </ul>
        </nav>
            </div>
            
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-blue-200">Início</Link></li>
                        <li><Link to="/Agendamento" className="hover:text-blue-200">Agendamento</Link></li>
                        <li><Link to="/Consultas" className="hover:text-blue-200">Consultas</Link></li>
                        <li><Link to="/Faq" className="hover:text-blue-200">FAQ</Link></li>
                        <li><Link to="/Contato" className="hover:text-blue-200">Contato</Link></li>
                        <li><Link to="/QuemSomos" className="hover:text-blue-200">Quem Somos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}