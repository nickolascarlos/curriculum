import AttributeWithImage from "../components/AttributeWithImage";
import Section from "../components/Section";
import ufg_icon from "../media/ufg_icon";

export default function Education(props) {
    return (
        <Section title="Formação">
            <AttributeWithImage
                image={ufg_icon}
                title="Bacharel em ciência da computação"
                lines={["Universidade Federal de Goiás, Goiânia", "2019 - 2024"]}
            />
        </Section>
    )
}