import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

export default function Languages(props) {
    return (
        <Section title="Idiomas">
            <SkillBar
                name="Português"
                level="100%"
            />

            <SkillBar
                name="Inglês"
                level="80%"
            />

            <SkillBar
                name="Espanhol"
                level="20%"
            />

            <SkillBar
                name="Italiano"
                level="20%"
            />
        </Section>
    )
}