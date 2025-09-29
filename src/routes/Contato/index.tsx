export default function Contato(){
    return(
        <main>
            <h1>Agendamento de Consultas</h1>
            <section id="contato">
                <h2>Fale Conosco</h2>
                <p>Preencha o formulário abaixo para entrar em contato com nossa equipe:</p>
                
                <form>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows={4} required></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}