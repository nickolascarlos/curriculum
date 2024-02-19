import BulletItem from "../components/BulletItem";
import Section from "../components/Section";
import Heap from "../components/Heap";

export default function Interests(props) {
    return (
        <Section title="Interesses">
            <Heap perRow={3}>
                {[
                     'Automação de Processos',
                     'Criptografia',
                     'Blockchain',
                     'Sistemas Distribuídos',
                     'Microcontroladores',
                     'Processamento de Imagens',
                     'Raspagem de Dados',
                ].map(item => (
                    <BulletItem text={item}/>
                ))}
            </Heap>
        </Section>
    )
}