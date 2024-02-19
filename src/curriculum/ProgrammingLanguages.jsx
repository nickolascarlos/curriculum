import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '18pt'}

export default function ProgrammingLanguages(props) {
    return (
        <Section title="Linguagens de Programação">
            <Heap perRow={2.1}>
            <SkillBar
                    name="Javascript"
                    level="100%"
                    icon={<i class="devicon-javascript-plain colored" style={iconStyle}></i>}
                />

            <SkillBar
                    name="Python"
                    level="100%"
                    icon={<i class="devicon-python-plain colored" style={iconStyle}></i>}
                />

            <SkillBar
                    name="C#"
                    level="80%"
                    icon={<i class="devicon-csharp-plain colored" style={iconStyle}></i>}
                />

            <SkillBar
                    name="Typescript"
                    level="80%"
                    icon={<i class="devicon-typescript-plain colored" style={iconStyle}></i>}
                />

            <SkillBar
                    name="C"
                    level="60%"
                    icon={<i class="devicon-c-plain colored" style={iconStyle}></i>}

                />

            <SkillBar
                    name="Kotlin"
                    level="30%"
                    icon={<i class="devicon-kotlin-plain colored" style={iconStyle}></i>}
                />

            {/* <SkillBar
                    name="Rust"
                    level="20%"
                    icon={<i class="devicon-rust-plain colored" style={iconStyle}></i>}
                /> */}
            </Heap>
        </Section>
    )
}