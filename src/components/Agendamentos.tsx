import { useState } from 'react';

export default function Agendamento() {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [medico, setMedico] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Agendamento:', { nome, data, hora, medico });
        alert('Consulta agendada com sucesso!');
        setNome('');
        setData('');
        setHora('');
        setMedico('');
    };

    return (
        <main className="container mx-auto p-4">
            <section id="agendamento" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Agende sua Consulta</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome do Paciente:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="data" className="block text-gray-700 text-sm font-bold mb-2">Data da Consulta:</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="hora" className="block text-gray-700 text-sm font-bold mb-2">Horário:</label>
                        <input
                            type="time"
                            id="hora"
                            name="hora"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="medico" className="block text-gray-700 text-sm font-bold mb-2">Médico (especialidade):</label>
                        <select
                            id="medico"
                            name="medico"
                            value={medico}
                            onChange={(e) => setMedico(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Selecione</option>
                            <option value="1">Dr. João - Cardiologia</option>
                            <option value="2">Dra. Maria - Dermatologia</option>
                            <option value="3">Dr. Carlos - Ortopedia</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Agendar Consulta
                    </button>
                </form>
            </section>
        </main>
    );
}