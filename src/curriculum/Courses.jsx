import AttributeWithTime from "../components/AttributeWithTime";
import Section from "../components/Section";

export default function Courses(props) {
    return (
        <Section title="Cursos">
            <AttributeWithTime
                title="NestJs Course for Beginners - Create a REST API"
                subtitle="FreeCodeCamp"
                time="2022"
            />

            <AttributeWithTime
                title="Programação Funcional com Elixir"
                subtitle="Minicurso - Semana da Computação 2021 - UNEMAT"
                time="2021"
            />

            <AttributeWithTime
                title="Javascript do Básico Ao Avançado (c/ Node.js e projetos)"
                subtitle="Udemy"
                time="2019"
            />

            <AttributeWithTime
                title="Curso React.js Ninja: Módulo React + Webpack"
                subtitle="Udemy"
                time="2019"
            />

            <AttributeWithTime
                title="Code Your First Game: Arcade Classic in Javascript on Canvas"
                subtitle="Udemy"
                time="2017"
            />

            <AttributeWithTime
                title="Introdução a banco de dados com MySQL & PHPMyAdmin"
                subtitle="Udemy"
                time="2016"
            />
        </Section>
    )
}