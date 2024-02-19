import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '18pt'}

export default function OtherTools(props) {
    return (
        <Section title="Outras Ferramentas">
            <Heap perRow={2.1}>
                {/* <SkillBar
                    name="SQL"
                    level="80%"
                    icon={<i class="devicon-postgresql-plain colored" style={iconStyle}></i>}
                /> */}
                <SkillBar
                    name="Nest.JS"
                    level="60%"
                    icon={<i class="devicon-nestjs-plain colored" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Django"
                    level="60%"
                    icon={<i class="devicon-django-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name=".NET"
                    level="50%"
                    icon={<i class="devicon-dot-net-plain colored" style={iconStyle}></i>}
                />      
                <SkillBar
                    name="PostgreSQL"
                    level="80%"
                    icon={<i class="devicon-postgresql-plain colored" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Express"
                    level="40%"
                    icon={<i class="devicon-express-original" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Docker"
                    level="20%"
                    icon={<i class="devicon-docker-plain colored" style={iconStyle}></i>}
                />
                <SkillBar
                    name="Git"
                    level="40%"
                    icon={<i class="devicon-git-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="React"
                    level="80%"
                    icon={<i class="devicon-react-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="HTML"
                    level="100%"
                    icon={<i class="devicon-html5-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="CSS"
                    level="80%"
                    icon={<i class="devicon-css3-plain colored" style={iconStyle}></i>}
                />



                {/* <SkillBar
                    name="Electron"
                    level="60%"
                    icon={<i class="devicon-electron-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Arduino"
                    level="80%"
                    icon={<i class="devicon-arduino-plain colored" style={iconStyle}></i>}
                />

                <SkillBar 
                    name="Latex"
                    level="40%"
                    icon={<i class="devicon-latex-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Linux"
                    level="60%"
                    icon={<i class="devicon-linux-plain colored" style={iconStyle}></i>}
                />
            
                <SkillBar
                    name="Markdown"
                    level="80%"
                    icon={<i class="devicon-markdown-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="NPM"
                    level="80%"
                    icon={<i class="devicon-npm-original-wordmark colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Socket.io"
                    level="80%"
                    icon={<i class="devicon-socketio-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="VS Code"
                    level="100%"
                    icon={<i class="devicon-vscode-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Visual Studio"
                    level="20%"
                    icon={<i class="devicon-visualstudio-plain colored" style={iconStyle}></i>}
                /> */}
          
            </Heap>
        </Section>
    )
}