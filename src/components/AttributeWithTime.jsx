export default function AttributeWithTime(props) {
    return (
        <div className="attribute-with-time">
            <div className="attribute-head">
                <text className="attribute-title">{props.title}</text>
                <text className="attribute-subtitle">{props.subtitle}</text>
            </div>
            <text className="attribute-time">
                <text>{props.time}</text>
            </text>
        </div>
    )
}