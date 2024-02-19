import Section from "../components/Section";

export default function AboutMe(props) {
    return (
        <Section title="Um pouco sobre mim 🤝">
            <article style={{
                fontSize: '11pt',
                textAlign: 'justify',
                color: '#505050'
            }}>
            <p>Sou estudante de Ciência da Computação na Universidade Federal de Goiás e estou em busca de oportunidades para
aprimorar minhas habilidades como desenvolvedor de software e crescer profissional e pessoalmente.</p>

            <p>Possuo experiência tanto no back-end quanto no front-end, destacando-me na criação de APIs REST com Python, Javascript e C#, usando frameworks como Django, Nest.js e ASP .NET.</p>
            
            <p>Além disso, tenho experiência com modelagem de bancos de dados relacionais e experiência ocasional com bancos não relacionais, além de experiência com testagem de software e padrões arquiteturais.</p>
            
            <p>No front-end, domino HTML, CSS, JavaScript, React e Electron, com familiaridade em Django Template Language. Embora meu foco seja o desenvolvimento back-end, consigo ser produtivo em ambas as áreas.</p>

            </article>
        </Section>
    )
}