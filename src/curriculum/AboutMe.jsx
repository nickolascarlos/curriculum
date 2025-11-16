import Section from "../components/Section";

export default function AboutMe(props) {
    return (
        <Section title="Perfil profissional">
            <article style={{
                fontSize: '11pt',
                textAlign: 'justify',
                color: '#505050'
            }}>
            
            <p>
                Desenvolvedor full-stack (.NET/Angular) com experiência em manutenção, evolução e integração de sistemas corporativos de médio e grande porte, da análise à implementação de soluções.
            </p>

            <p>
                Participação em projetos de integração entre sistemas via APIs REST, webhooks e mensageria (RabbitMQ), implementação de estratégias de caching (Redis) para redução de latência, refatoração de componentes críticos e melhorias arquiteturais visando a confiabilidade, desempenho e manutenibilidade.
            </p>

            <p>
                Contribuições significativas para ganhos de escalabilidade via otimizações de consultas a banco de dados e implementação de processamento distribuído assíncrono, além da adoção de boas práticas, visando a qualidade, manutenibilidade e experiência de desenvolvimento.
            </p>

            </article>
        </Section>
    )
}