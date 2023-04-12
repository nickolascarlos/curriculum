import Section from "../components/Section";

export default function AboutMe(props) {
    return (
        <Section title="Um pouco sobre mim 🤝">
            <article style={{
                fontSize: '11pt',
                textAlign: 'justify',
                color: '#505050'
            }}>
                <p>
                Sou um estudante de Ciência da Computação na Universidade Federal de Goiás e busco oportunidades para desenvolver minhas habilidades como desenvolvedor de software.
                </p>

                <p>
                Possuo conhecimento em diversas linguagens de programação, como Javascript, Python, C, entre outras, além de tecnologias como Nest.JS, SQL, Git, HTML, CSS, e React.js.
                </p>

                <p>
                Com meu foco em desenvolvimento back-end e habilidades em desenvolvimento full-stack e em tecnologias front-end, busco contribuir de forma positiva em projetos de desenvolvimento de software, aplicando tecnologias inovadoras para criar soluções eficientes e escaláveis.
                </p>
                
                <p>
                Busco oportunidades para aprender e crescer enquanto ainda estou na universidade, para contribuir para projetos de desenvolvimento de software de forma mais ampla no futuro.
                </p>
            </article>
        </Section>
    )
}