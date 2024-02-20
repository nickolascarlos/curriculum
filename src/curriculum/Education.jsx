import AttributeWithTime from "../components/AttributeWithTime";
import Section from "../components/Section";

export default function Education(props) {
    return (
        <Section title="Education">
            <AttributeWithTime
                title="Bachelor's in Computer Science"
                subtitle="Federal University of Goiás, Goiânia"
                time="2019 - 2024"
            />
        </Section>
    )
}