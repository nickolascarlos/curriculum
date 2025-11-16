import BulletItem from "../components/BulletItem";
import Section from "../components/Section";
import Heap from "../components/Heap";

export default function Interests(props) {
    return (
        <Section title="Interesses">
            <Heap perRow={3}>
                {[
                    'Arquitetura de sistemas distribuídos e mensageria',
                    'Criptografia e segurança da informação',
                    'Blockchain e tecnologias descentralizadas',
                    'Visão computacional',
                    'Raspagem de dados',
                ].map(item => (
                    <BulletItem text={item}/>
                ))}
            </Heap>
        </Section>
    )
}