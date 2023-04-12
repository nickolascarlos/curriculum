import BrazilFlag from "../icons/BrazilFlag";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";
import GBFlag from "../icons/GBFlag";
import SpainFlag from "../icons/SpainFlag";
import ItalyFlag from "../icons/ItalyFlag";

export default function Languages(props) {
    return (
        <Section title="Idiomas">
            <SkillBar
                name="Português"
                level="100%"
                icon={<BrazilFlag/>}
                iconStyle={{
                    width: '30px'
                }}
            />

            <SkillBar
                name="Inglês"
                level="80%"
                icon={<GBFlag/>}
                iconStyle={{
                    width: '30px'
                }}
            />

            <SkillBar
                name="Espanhol"
                level="20%"
                icon={<SpainFlag/>}
                iconStyle={{
                    width: '30px'
                }}
            />

            <SkillBar
                name="Italiano"
                level="20%"
                icon={<ItalyFlag/>}
                iconStyle={{
                    width: '30px'
                }}
            />
        </Section>
    )
}