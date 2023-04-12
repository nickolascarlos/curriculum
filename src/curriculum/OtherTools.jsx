import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '16pt', color: 'rgba(48, 56, 70, 0.25)'}

export default function OtherTools(props) {
    return (
        <Section title="Outras Tecnologias">
            <Heap perRow={2.1}>
                <SkillBar
                    name="SQL"
                    level="80%"
                    icon={<i class="devicon-postgresql-plain" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Node.js"
                    level="80%"
                    icon={<i class="devicon-nodejs-plain" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Nest.JS"
                    level="20%"
                    icon={<i class="devicon-nestjs-plain" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Express"
                    level="40%"
                    icon={<i class="devicon-express-original" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Git"
                    level="40%"
                    icon={<i class="devicon-git-plain" style={iconStyle}></i>}
                />
                <SkillBar
                    name="HTML"
                    level="100%"
                    icon={<i class="devicon-html5-plain" style={iconStyle}></i>}
                />

                <SkillBar
                    name="CSS"
                    level="80%"
                    icon={<i class="devicon-css3-plain" style={iconStyle}></i>}
                />

                <SkillBar
                    name="PostgreSQL"
                    level="80%"
                    icon={<i class="devicon-postgresql-plain" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Arduino"
                    level="80%"
                    icon={<i class="devicon-arduino-plain" style={iconStyle}></i>}
                />

                <SkillBar
                    name="React.js"
                    level="80%"
                    icon={<i class="devicon-react-plain" style={iconStyle}></i>}
                />
            </Heap>
        </Section>
    )
}