import AttributeWithContent from "../components/AttributeWithContent";
import Section from "../components/Section";

export default function Projects(props) {
    return (
        <Section title="Projetos">
            <AttributeWithContent
                title="curriculum"
                href="https://www.github.com/nickolascarlos/curriculum"
                content={
                    <>
                        <div>                            
                            <img src="https://img.shields.io/github/license/nickolascarlos/curriculum?logo=github&style=flat-square" alt=""
                                style={{
                                    height: '18px',
                                    marginRight: '5px'
                                }}
                            />
                            <img src="https://shields.io/badge/-React/JSX-black?logo=react&style=flat-square&logoColor=lightblue" alt=""
                                style={{
                                    height: '18px',
                                    marginRight: '5px'
                                }}
                            />
                        </div>
                        <article style={{fontSize: 'small'}}>
                            Se está ansioso para ver algum dos meus projetos, saiba que já está vendo 😉. Esse currículo bonitão aqui foi feito em React e seu código está liberado lá no meu GitHub, então se quiser um igual é só correr lá.
                        </article>
                    </>
                }
            />
            
            <AttributeWithContent
                title="brazil-cities-predictor"
                href="https://www.github.com/nickolascarlos/brazil-cities-predictor"
                content={
                    <>
                        <div>                            
                            <img src="https://img.shields.io/github/license/nickolascarlos/brazil-cities-predictor?logo=github&style=flat-square" alt=""
                                style={{
                                    height: '18px',
                                    marginRight: '5px'
                                }}
                            />
                            <img src="https://shields.io/badge/-TypeScript-blue?logo=typescript&style=flat-square&logoColor=white" alt=""
                                style={{
                                    height: '18px',
                                    marginRight: '5px'
                                }}
                            />
                        </div>
                        <article style={{fontSize: 'small'}}>
                            Um preditor de nomes de cidades do Brasil, útil para aplicações com campos de entrada de texto que exigem a seleção de uma cidade brasileira. Escrito em Typescript e disponibilizado como um pacote NPM.
                        </article>
                    </>
                }
            />

            <AttributeWithContent
                title="class-validator-errors-flattener"
                href="https://www.github.com/nickolascarlos/class-validator-errors-flattener"
                content={
                    <>
                        <div>                            
                        <img src="https://img.shields.io/github/license/nickolascarlos/class-validator-errors-flattener?logo=github&style=flat-square" alt=""
                            style={{
                                height: '18px',
                                marginRight: '5px'
                            }}
                        />
                        <img src="https://shields.io/badge/-TypeScript-blue?logo=typescript&style=flat-square&logoColor=white" alt=""
                            style={{
                                height: '18px',
                                marginRight: '5px'
                            }}
                        />
                        </div>
                        <article style={{fontSize: 'small'}}>
                            Biblioteca para desenvolvedores que utilizam a biblioteca 'class-validator' e desejam fornecer uma maneira clara e legível de exibir erros de validação ao usuário final. Escrita em Typescript e disponibilizada como um pacote NPM.
                        </article>
                    </>
                }
            />

            <AttributeWithContent
                title="hmac"
                href="https://www.github.com/nickolascarlos/hmac"
                content={
                    <>
                        <div>
                            <img src="https://img.shields.io/github/license/nickolascarlos/hmac?logo=github&style=flat-square" alt=""
                                style={{
                                    height: '18px',
                                    marginRight: '5px'
                                }}
                            />

                            <img src="https://shields.io/badge/-Python-yellow?logo=python&style=flat-square" alt=""
                                style={{
                                    height: '18px'
                                }}
                            />
                        </div>
                        <article style={{fontSize: 'small'}}>
                            Implementação "hash-agnostic" de um gerador e autenticador de HMAC em Python. Essa biblioteca foi escrita visando a sua utilização em um trabalho acadêmico de implementação de um chat peer-to-peer seguro.
                        </article>
                    </>
                }
            />

            <AttributeWithContent
                title="sadchat"
                href="https://www.github.com/nickolascarlos/sadchat"
                content={
                    <>
                    <div>
                        <img src="https://img.shields.io/github/license/nickolascarlos/sadchat?logo=github&style=flat-square" alt=""
                            style={{
                                height: '18px',
                                marginRight: '5px'
                            }}
                        />

                        <img src="https://shields.io/badge/-Python-yellow?logo=python&style=flat-square" alt=""
                            style={{
                                height: '18px'
                            }}
                        />
                    </div>
                    <article style={{fontSize: 'small'}}>
                    Escrito em Python, SadChat é um aplicativo de chat baseado em terminal que visa a segurança de seus usuários. Ele conecta diretamente dois usuários e, a cada mensagem trocada, verifica a integridade e autenticidade usando o algoritmo HMAC.
                    </article>
                    </>
                }
            />
        </Section>
    )
}