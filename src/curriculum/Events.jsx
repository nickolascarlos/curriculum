import AttributeWithTime from "../components/AttributeWithTime";
import Section from "../components/Section";

export default function Events(props) {
    return (
        <Section title="Eventos">
            <AttributeWithTime
                title="Semana da Computação (SECOMP)"
                subtitle="Universidade do Estado do Mato Grosso"
                time="2021"
            />

            <AttributeWithTime
                title="II Conferência de Redes de Computadores - Mulheres que Transformam o Mundo"
                subtitle="Universidade Estadual de Goiás, Pires do Rio - Goiás"
                time="2021"
            />
        </Section>
    )
}