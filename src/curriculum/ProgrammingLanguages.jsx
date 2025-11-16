import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '18pt'}

export default function ProgrammingLanguages(props) {
    return (
        <Section title="Linguagens de programação">
            <div style={{display: 'flex', flexDirection: 'row', gap: '32px'}}>
                <SkillBar
                    style={{flex: 1}}
                    name="C#"
                    level="90%"
                    icon={<i class="devicon-csharp-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    style={{flex: 1}}
                    name="Typescript"
                    level="80%"
                    icon={<i class="devicon-typescript-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    style={{flex: 1}}
                    name="Python"
                    level="70%"
                    icon={<i class="devicon-python-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    style={{flex: 1}}
                    name="Javascript"
                    level="80%"
                    icon={<i class="devicon-javascript-plain colored" style={iconStyle}></i>}
                />
            </div>
        </Section>
    )
}