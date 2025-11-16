import AttributeWithImage from "../components/AttributeWithImage";
import Section from "../components/Section";
import TimelinedAttributesWithImage from "../components/TimelinedAttributesWithImage";
import eduq_icon from "../media/eduq_icon";
import scaza_icon from "../media/scaza_icon";

export default function Jobs() {
    return (
        <Section title="Experiência">
            <TimelinedAttributesWithImage
                style={{flex: 1}}
                image={scaza_icon}
                attributes={[
                    {
                        title: "Analista de desenvolvimento",
                        lines: ["Scaza Tecnologia, Goiânia", "Maio de 2025 - Atualmente",
                            <p style={{fontSize: '10pt'}}><strong style={{color: 'black', marginRight: '7px'}}>Habilidades:</strong> <span style={{fontStyle: 'italic', color: '#636363ff'}}>C#, Python, .NET, Entity Framework, PostgreSQL, RabbitMQ, Redis, APIs REST, arquitetura distribuída, processamento assíncrono, Docker, CI/CD, Linux</span></p>],
                        listItems: [
                            <><strong style={{color: 'var(--primary-color)'}}>Desenvolvimento de módulo de integrações</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Criação de serviço distribuído para execução de integrações bidirecionais entre plataformas externas e o sistema Scaza, visando consistência e paralelismo controlado em múltiplas instâncias via mensageria (RabbitMQ).</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Reestruturação da arquitetura assíncrona</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Migração de retornos de processamentos assíncronos do servidor de aplicação para estratégia de persistência eventual em lote, reduzindo em até 70% as conexões simultâneas ao banco de dados e melhorando o tempo de resposta geral do sistema em momentos de alta demanda.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Integrações entre sistemas ERP</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Levantamento de requisitos, desenvolvimento e implementação de módulos de integração, incluindo estrutura, protocolos, modelos de transferência de dados e políticas de logging, tratamento e recuperação de falhas, assegurando confiabilidade e rastreabilidade em sincronizações de grande volume.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Performance e estabilidade da infraestrutura</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de caching distribuído (Redis) e mecanismos de controle de concorrência, assegurando uso eficiente de recursos, redução de latência e estabilidade sob alta demanda, com diminuição de chamadas redundantes e contenções em operações críticas.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Automatização de deployments</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de pipelines de build e distribuição de módulos de integração, garantindo agilidade e escalabilidade à propagação de atualizações aos nós da infraestrutura distribuída.</>,
                        ]
                    },
                    {
                        title: "Desenvolvedor full-stack",
                        lines: ["Scaza Tecnologia, Goiânia", "Março de 2024 - Abril de 2025",
                            <p style={{fontSize: '10pt'}}><strong style={{color: 'black', marginRight: '7px'}}>Habilidades:</strong> <span style={{fontStyle: 'italic', color: '#636363ff'}}>C#, Typescript, Python, .NET, NodeJS, Entity Framework, Ionic, Angular, PostgreSQL, APIs REST, SQL, modelagem de dados, UX/UI, Docker, raspagem de dados</span></p>],
                        listItems: [
                            <><strong style={{color: 'var(--primary-color)'}}>Aprimoramento de interface e experiência do usuário</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Desenvolvimento e refinamento de componentes e formulários com validações avançadas, aprimorando usabilidade, acessibilidade e consistência visual da aplicação.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Automação de coleta de dados</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Desenvolvimento de scripts Python para extração automatizada de informações financeiras (faturas, boletos e cobranças) de múltiplas fontes, incluindo sistemas públicos e privados, com tratamento de diferentes formatos e estruturas de dados.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Otimização de performance e modelagem de dados</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Reestruturação de consultas SQL e aprimoramento da modelagem de dados, com ajustes em índices, tabelas e relacionamentos, melhorando a eficiência para dashboards e relatórios analíticos de grande volume.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Garantia de integridade e estabilidade do sistema</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de validações de dados e correção de falhas em múltiplas camadas, assegurando confiabilidade e robustez às funcionalidades.</>,
                        ]
                    }
                ]}
            />
            
            <AttributeWithImage
                style={{flex: 1}}
                image={eduq_icon}
                title="Estagiário em desenvolvimento full-stack"
                lines={["Eduq Tecnologia, Goiânia", "Fevereiro - Março de 2024",
                    <p style={{fontSize: '10pt'}}><strong style={{color: 'black', marginRight: '7px'}}>Habilidades:</strong> <span style={{fontStyle: 'italic', color: '#636363ff'}}>C#, Typescript, .NET, Angular, NodeJS, PostgreSQL, APIs REST, validações de formulários, correção de bugs</span></p>]}
                listItems={[
                    <><strong style={{color: 'var(--primary-color)'}}>Desenvolvimento e ajustes de interface</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de componentes visuais e formulários com validações básicas, contribuindo para a consistência, responsividade e padronização da aplicação.</>,
                    <><strong style={{color: 'var(--primary-color)'}}>Correção e testes de funcionalidades</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Identificação e resolução de falhas em front-end e back-end, com foco em garantir estabilidade e funcionamento contínuo das principais rotinas do sistema.</>,
                    <><strong style={{color: 'var(--primary-color)'}}>Validação de dados e regras de negócio</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Aplicação de checagens e ajustes em regras de processamento de dados conforme requisitos definidos, assegurando integridade nas operações e no fluxo de informações.</>,
                ]}
            />
        </Section>
    )
}