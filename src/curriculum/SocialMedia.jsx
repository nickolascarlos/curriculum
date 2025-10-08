import Badge from "../components/Badge";
import Section from "../components/Section";
import linkedin_logo from "../media/linkedin_logo";

export default function SocialMedia(props) {
    return (
        <Section
            style={{display: 'flex', justifyContent: 'center', padding: '10px'}}
            contentStyle={{display: 'flex', columnGap: '10px'}}>

            <Badge text="GitHub" color="100000" logo="github" link="https://www.github.com/nickolascarlos"/>
            <Badge text="LinkedIn" color="0077B5" logo={linkedin_logo} link="https://www.linkedin.com/in/nickolascarlos"/>
            <Badge text="WhatsApp" color="25D366" logo="whatsapp" link="https://api.whatsapp.com/send?phone=5564992743215&text=Ol%C3%A1!%20Vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar"/>
            
        </Section>
    )
}