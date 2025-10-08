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
                        lines: ["Scaza Tecnologia, Goiânia", "Maio de 2025 - Atualmente"],
                        listItems: [
                                <><strong style={{color: 'var(--primary-color)'}}>Desenvolvimento de módulo de integrações</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Criação de serviço distribuído para execução de integrações bidirecionais entre plataformas externas e o sistema Scaza, visando consistência e paralelismo controlado em múltiplas instâncias via mensageria (RabbitMQ).</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Reestruturação da arquitetura assíncrona</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Migração de retornos de processamentos assíncronos do servidor de aplicação para estratégia de persistência eventual em lote, reduzindo em até 70% as conexões simultâneas ao banco de dados e melhorando o tempo de resposta geral do sistema em momentos de alta demanda.</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Integrações entre sistemas ERP</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Levantamento de requisitos, desenvolvimento e implementação de módulos de integração, incluindo estrutura, protocolos, modelos de transferência de dados e políticas de logging, tratamento e recuperação de falhas, assegurando confiabilidade e rastreabilidade em sincronizações de grande volume.</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Implementação de caching distribuído</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Uso de caching (Redis) para gerenciamento de sessões e chaves de autenticação, reduzindo consideravelmente tempos de autenticação e chamadas redundantes a sistemas externos.</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Controle de concorrência de operações</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de escalonamento e sincronização de processos para assegurar uso equilibrado dos recursos da infraestrutura, evitando contenções e melhorando a estabilidade e eficiência do sistema.</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Automatização de deployments</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementação de pipelines de build e distribuição de módulos de integração, garantindo agilidade e escalabilidade à propagação de atualizações aos nós da infraestrutura distribuída.</>,
                                <><strong style={{color: 'var(--primary-color)'}}>Fortalecimento da segurança do sistema</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Rearquiteturação do sistema de autorização, introdução rate limiting, proteções anti-bot e controle de acesso refinado, garantindo resiliência e proteção contra abusos e falhas na aplicação.</>
                        ]
                    },
                    {
                        title: "Desenvolvedor full-stack",
                        lines: ["Março de 2024 - Abril de 2025"],
                        listItems: [
                            <><strong style={{color: 'var(--primary-color)'}}>Otimização de performance de dashboards e endpoints analíticos</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Otimização de consultas SQL, reduzindo a latência e melhorando a responsividade na emissão de relatórios analíticos de grande volume.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Criação e otimização de consultas ao banco de dados</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Desenvolvimento de consultas SQL para extração e manipulação de dados, incluindo joins e filtros.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Modelagem e manutenção de dados</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Ajustar tabelas, índices e relacionamentos para suportar novas funcionalidades e garantir consistência.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Desenvolvimento e ajustes de UI</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementar e melhorar componentes visuais, layouts e formulários com validação básica.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Correção de bugs e testes</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Identificar e resolver erros em front-end e back-end, garantindo funcionamento estável das funcionalidades.</>,
                            <><strong style={{color: 'var(--primary-color)'}}>Validação de dados e regras de negócio</strong> <span style={{color: 'rgb(200, 200, 200)'}}>–</span> Implementar checagens para entradas do usuário e ajustar regras de processamento de dados conforme requisitos.</>,
                        ]
                    }
                ]}
            />
            
            <AttributeWithImage
                style={{flex: 1}}
                image={eduq_icon}
                title="Estagiário em desenvolvimento full-stack"
                lines={["Eduq Tecnologia, Goiânia", "Fevereiro - Março de 2024"]}
            />
        </Section>
    )
}