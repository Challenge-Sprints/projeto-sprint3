export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen px-6 py-12 text-blue-900">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Portal do Paciente</h1>
        <h2 className="text-xl font-semibold mb-6 text-blue-700">Bem-vindo ao Portal de Agendamento de Consultas</h2>
        <p className="text-lg mb-8 text-blue-700">
          Nossa plataforma digital facilita o agendamento de consultas no Hospital das Clínicas e no IMREA.
        </p>

        <button
          id="agendarBtn"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          Agendar Consulta
        </button>
      </section>

      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Sobre a Plataforma</h2>
        <p className="text-lg text-blue-800">
          Com um design intuitivo e acessível, nosso sistema permite que você marque, cancele e visualize suas consultas de forma rápida e segura.
        </p>
      </section>
    </main>
  );
}
