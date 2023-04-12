import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '16pt', color: 'rgba(48, 56, 70, 0.25)'}

export default function ProgrammingLanguages(props) {
    return (
        <Section title="Linguagens de Programação">
            <Heap perRow={2.1}>
            <SkillBar
                    name="Javascript"
                    level="100%"
                    icon={<i class="devicon-javascript-plain" style={iconStyle}></i>}
                />

            <SkillBar
                    name="Python"
                    level="80%"
                    icon={<i class="devicon-python-plain" style={iconStyle}></i>}
                />

            <SkillBar
                    name="C"
                    level="80%"
                    icon={<i class="devicon-c-plain" style={iconStyle}></i>}

                />

            <SkillBar
                    name="Typescript"
                    level="60%"
                    icon={<i class="devicon-typescript-plain" style={iconStyle}></i>}
                />

            <SkillBar
                    name="C#"
                    level="20%"
                    icon={<i class="devicon-csharp-plain" style={iconStyle}></i>}
                />

            <SkillBar
                    name="Kotlin"
                    level="20%"
                    icon={<i class="devicon-kotlin-plain" style={iconStyle}></i>}
                />

            <SkillBar
                    name="Rust"
                    level="20%"
                    icon={<i class="devicon-rust-plain" style={iconStyle}></i>}
                />
            </Heap>
        </Section>
    )
}