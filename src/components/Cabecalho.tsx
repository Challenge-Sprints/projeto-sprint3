export default function Cabecalho(){

    return(
        <header>
            
             <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
        <nav>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-blue-200">Início</a></li>
            </ul>
        </nav>
            </div>
            
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-blue-200">Início</a></li>
                        <li><a href="/agendamento" className="hover:text-blue-200">Agendamento</a></li>
                        <li><a href="/consultas" className="hover:text-blue-200">Consultas</a></li>
                        <li><a href="/faq" className="hover:text-blue-200">FAQ</a></li>
                        <li><a href="/contato" className="hover:text-blue-200">Contato</a></li>
                        <li><a href="/integrantes" className="hover:text-blue-200">Quem Somos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}