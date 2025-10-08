import Heap from "../components/Heap";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";

const iconStyle = {fontSize: '18pt'}

export default function OtherTools(props) {
    return (
        <Section title="Outras ferramentas">
            <Heap style={{gap: '16px', justifyContent: 'space-evenly', columnGap: '32px'}}>
                {/* <SkillBar
                    name="SQL"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-postgresql-plain colored" style={iconStyle}></i>}
                /> */}
                
                {/* 🟦 Back-end */}
<SkillBar
    name=".NET"
    style={{ padding: '0px' }}
    icon={<i class="devicon-dot-net-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="Entity Framework"
    style={{ padding: '0px' }}
    icon={<i class="devicon-entityframeworkcore-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="NodeJS"
    style={{ padding: '0px' }}
    icon={<i class="devicon-nodejs-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

{/* 🟧 Front-end */}
<SkillBar
    name="Angular"
    style={{ padding: '0px' }}
    icon={<i class="devicon-angularjs-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="React"
    style={{ padding: '0px' }}
    icon={<i class="devicon-react-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="Ionic"
    style={{ padding: '0px' }}
    icon={<i class="devicon-ionic-original colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

{/* 🟩 Banco de Dados, Cache & Mensageria */}
<SkillBar
    name="PostgreSQL"
    style={{ padding: '0px' }}
    icon={<i class="devicon-postgresql-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="Redis"
    style={{ padding: '0px' }}
    icon={<i class="devicon-redis-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="RabbitMQ"
    style={{ padding: '0px' }}
    icon={<i class="devicon-rabbitmq-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

{/* 🛠️ DevOps & Infra */}
<SkillBar
    name="Firebase"
    style={{ padding: '0px' }}
    icon={<i class="devicon-firebase-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="Docker"
    style={{ padding: '0px' }}
    icon={<i class="devicon-docker-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="Linux"
    style={{ padding: '0px' }}
    icon={<i class="devicon-linux-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

{/* 📝 Controle de versão */}
<SkillBar
    name="Git"
    style={{ padding: '0px' }}
    icon={<i class="devicon-git-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

<SkillBar
    name="GitHub"
    style={{ padding: '0px' }}
    icon={<i class="devicon-github-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>

{/* 💻 Ambiente de Desenvolvimento */}
<SkillBar
    name="Visual Studio"
    style={{ padding: '0px' }}
    icon={<i class="devicon-visualstudio-plain colored" style={iconStyle}></i>}
    labelIconDistance="7px"
/>


                {/* <SkillBar
                    name="Electron"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-electron-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Arduino"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-arduino-plain colored" style={iconStyle}></i>}
                />

                <SkillBar 
                    name="Latex"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-latex-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Linux"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-linux-plain colored" style={iconStyle}></i>}
                />
            
                <SkillBar
                    name="Markdown"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-markdown-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="NPM"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-npm-original-wordmark colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Socket.io"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-socketio-original colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="VS Code"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-vscode-plain colored" style={iconStyle}></i>}
                />

                <SkillBar
                    name="Visual Studio"
                    style={{'padding': '0px'}}
                    icon={<i class="devicon-visualstudio-plain colored" style={iconStyle}></i>}
                /> */}
          
            </Heap>
        </Section>
    )
}