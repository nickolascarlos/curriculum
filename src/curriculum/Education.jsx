import AttributeWithTime from "../components/AttributeWithTime";
import Section from "../components/Section";

export default function Education(props) {
    return (
        <Section title="Formação">
            <AttributeWithTime
            title="Bacharel em Ciência da Computação"
            subtitle="Universidade Federal de Goiás, Goiânia"
            time="2019 - 2024"
            />
        </Section>
    )
}