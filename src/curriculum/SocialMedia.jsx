import Section from "../components/Section";

export default function SocialMedia(props) {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: "5px"}}>
            <a href="https://www.github.com/nickolascarlos" target="blank" style={{marginRight: '7px'}}>
                <img alt="GitHub profile link" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" style={{borderRadius: '5px', overflow: 'hidden'}}/>
            </a>

            <a href="https://www.linkedin.com/in/nickolascarlos" target="blank">
                <img alt="Linkedin profile link" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" style={{borderRadius: '5px', overflow: 'hidden'}}/>
            </a>
        </div>
    )
}