import BulletItem from "../components/BulletItem";
import Section from "../components/Section";
import Heap from "../components/Heap";

export default function Interests(props) {
    return (
        <Section title="Interests">
            <Heap perRow={3}>
                {[
                    'Process Automation',
                    'Cryptography',
                    'Blockchain',
                    'Distributed Systems',
                    'Microcontrollers',
                    'Image Processing',
                    'Data Scraping',
                ].map(item => (
                    <BulletItem text={item}/>
                ))}
            </Heap>
        </Section>
    )
}