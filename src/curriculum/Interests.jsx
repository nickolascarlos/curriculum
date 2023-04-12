import BulletList from "../components/BulletList";
import Section from "../components/Section";

export default function Interests(props) {
    return (
        <Section title="Interesses">
            <BulletList
                items={[
                'Automação de Processos',
                'Criptografia',
                'Blockchain',
                'Sistemas Distribuídos',
                'Microcontroladores',
                'Processamento Digital de Imagens',
                'Raspagem de Dados',
                ]}
            />
        </Section>
    )
}