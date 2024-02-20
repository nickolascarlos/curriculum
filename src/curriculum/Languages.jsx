import BrazilFlag from "../icons/BrazilFlag";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";
import USFlag from "../icons/USFlag";
import SpainFlag from "../icons/SpainFlag";
import ItalyFlag from "../icons/ItalyFlag";
import Heap from "../components/Heap";

export default function Languages(props) {
    return (
        <Section title="Languages">
            <Heap perRow={2.1}>
                <SkillBar
                    name="Portuguese"
                    level="100%"
                    icon={<BrazilFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />

                <SkillBar
                    name="English"
                    level="80%"
                    icon={<USFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />
            </Heap>
            <Heap perRow={2.1}>
                <SkillBar
                    name="Italian"
                    level="20%"
                    icon={<ItalyFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />

                <SkillBar
                    name="Spanish"
                    level="15%"
                    icon={<SpainFlag/>}
                    iconStyle={{
                        width: '30px'
                    }}
                />
            </Heap>
        </Section>
    )
}