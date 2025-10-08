import AttributeWithTimeMultiline from "./AttributeWithTimeMultiline";


export default function AttributeWithImage(props) {
    return (
        <div className="attribute-with-image" style={props.style}>
            <img className="attribute-image" src={props.image} />
            <div className="attribute-content">
                <AttributeWithTimeMultiline
                    title={props.title}
                    lines={props.lines}
                    time={props.time}
                />
            </div>
        </div>
    )
}