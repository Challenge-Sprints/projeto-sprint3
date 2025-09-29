<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
>>>>>>> 6f4fe4cffeff15a89bf8316a0aadcb186387a98f
export default function Cabecalho(){

    return(
        <header>
            <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
        <nav>
            <ul className="flex space-x-4">
<<<<<<< HEAD
                <li><Link to="/" className="hover:text-blue-200">Início</Link></li>
=======
                <li><a href="/" className="hover:text-blue-200">Início</a></li>
>>>>>>> 6f4fe4cffeff15a89bf8316a0aadcb186387a98f
            </ul>
        </nav>
            </div>
            
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
                <nav>
                    <ul className="flex space-x-4">
<<<<<<< HEAD
                        <li><Link to="/" className="hover:text-blue-200">Início</Link></li>
                        <li><Link to="/Agendamento" className="hover:text-blue-200">Agendamento</Link></li>
                        <li><Link to="/Consultas" className="hover:text-blue-200">Consultas</Link></li>
                        <li><Link to="/Faq" className="hover:text-blue-200">FAQ</Link></li>
                        <li><Link to="/Contato" className="hover:text-blue-200">Contato</Link></li>
                        <li><Link to="/QuemSomos" className="hover:text-blue-200">Quem Somos</Link></li>
=======
                        <li><a href="/" className="hover:text-blue-200">Início</a></li>
                        <li><a href="/agendamento" className="hover:text-blue-200">Agendamento</a></li>
                        <li><a href="/consultas" className="hover:text-blue-200">Consultas</a></li>
                        <li><a href="/faq" className="hover:text-blue-200">FAQ</a></li>
                        <li><a href="/contato" className="hover:text-blue-200">Contato</a></li>
                        <li><a href="/integrantes" className="hover:text-blue-200">Quem Somos</a></li>
>>>>>>> 6f4fe4cffeff15a89bf8316a0aadcb186387a98f
                    </ul>
                </nav>
            </div>
        </header>
    )
}