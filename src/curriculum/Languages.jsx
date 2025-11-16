import BrazilFlag from "../icons/BrazilFlag";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";
import USFlag from "../icons/USFlag";
import SpainFlag from "../icons/SpainFlag";
import ItalyFlag from "../icons/ItalyFlag";

export default function Languages(props) {
    return (
        <Section title="Idiomas">
            <div style={{display: 'flex', flexDirection: 'row', columnGap: '32px'}}>
                <SkillBar
                    style={{flex: 1}}
                    name="Português"
                    level="100%"
                    icon={<BrazilFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />

                <SkillBar
                    style={{flex: 1}}
                    name="Inglês"
                    level="80%"
                    icon={<USFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />
                <SkillBar
                    style={{flex: 1}}
                    name="Italiano"
                    level="35%"
                    icon={<ItalyFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />

                <SkillBar
                    style={{flex: 1}}
                    name="Espanhol"
                    level="15%"
                    icon={<SpainFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />
            </div>
        </Section>
    )
}