export default function Faq(){
    return(
        <main>
            <h1>FAQ - Perguntas Frequentes</h1>
            <section id="faq">
            <h2>Perguntas Frequentes</h2>
            <details>
                <summary>Como posso agendar uma consulta?</summary>
                <p>Acesse a página de Agendamento, preencha o formulário com seus dados e escolha um horário disponível.</p>
            </details>

            <details>
                <summary>Posso cancelar ou remarcar uma consulta?</summary>
                <p>Sim! Na página de Consultas, você pode visualizar suas consultas e optar por cancelar ou remarcar, conforme sua necessidade.</p>
            </details>

            <details>
                <summary>O sistema funciona em dispositivos móveis?</summary>
                <p>Sim! Nossa plataforma é totalmente responsiva e pode ser utilizada em celulares, tablets e computadores.</p>
            </details>

            <details>
                <summary>O que acontece se eu perder minha consulta?</summary>
                <p>Se você não puder comparecer à consulta, recomendamos que a cancele ou remarque com antecedência. Caso contrário, pode haver impacto na sua prioridade de agendamento futuro.</p>
            </details>
            
            <details>
                <summary>Como posso acessar meu histórico de consultas?</summary>
                <p>Você pode visualizar todas as consultas passadas e futuras na página Minhas Consultas, onde também poderá cancelar ou remarcar caso necessário.</p>
            </details>
            
            <details>
                <summary>O que devo levar para minha consulta?</summary>
                <p>Recomendamos que você leve um documento de identificação, exames anteriores relacionados ao atendimento e o cartão do convênio (se aplicável).</p>
            </details>
            
            <details>
                <summary>O hospital oferece atendimento para emergência?</summary>
                <p>Nosso sistema de agendamento é voltado para consultas eletivas. Para atendimentos emergenciais, recomendamos que procure um pronto-socorro mais próximo.</p>
            </details>
            
            <details>
                <summary>Posso marcar consultas para outra pessoa?</summary>
                <p>Sim, você pode marcar consultas para familiares ou pessoas próximas, desde que tenha os dados necessários, como nome, CPF e informações de contato.</p>
            </details>
            
            <details>
                <summary>O sistema envia lembretes sobre as consultas agendadas?</summary>
                <p>Sim! Você receberá notificações automáticas antes da data da sua consulta para garantir que não se esqueça do compromisso.</p>
            </details>
        </section>
        </main>
    )
}