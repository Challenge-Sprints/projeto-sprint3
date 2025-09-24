export default function Consultas() {
    // Dados de exemplo para as consultas
    const consultas = [
        { id: 101, dataHora: '2025-05-25 10:00', medico: 'Dr. João', status: 'Confirmada' },
        { id: 102, dataHora: '2025-05-30 14:00', medico: 'Dra. Maria', status: 'Pendente' },
        { id: 103, dataHora: '2025-06-05 09:30', medico: 'Dr. Carlos', status: 'Cancelada' },
        { id: 104, dataHora: '2025-09-15 06:30', medico: 'Dra. Maria', status: 'Confirmada' },
    ];

    return (
        <main className="container mx-auto p-4">
            <section id="consultas" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Histórico de Consultas</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left">ID Consulta</th>
                                <th className="py-2 px-4 border-b text-left">Data/Horário</th>
                                <th className="py-2 px-4 border-b text-left">Médico</th>
                                <th className="py-2 px-4 border-b text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultas.map((consulta) => (
                                <tr key={consulta.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{consulta.id}</td>
                                    <td className="py-2 px-4 border-b">{consulta.dataHora}</td>
                                    <td className="py-2 px-4 border-b">{consulta.medico}</td>
                                    <td className="py-2 px-4 border-b">{consulta.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}