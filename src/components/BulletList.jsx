import BulletItem from "./BulletItem";

export default function BulletList(props) {
    return (
        <ul className="bullet-list">
            {props.items.map(item => (
                <BulletItem text={item}/>
            ))}
        </ul>
    )
}