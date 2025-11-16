export default function AttributeWithTimeMultiline(props) {
    return (
        <div className="attribute-with-time">
            <div className="attribute-head">
                <text className="attribute-title">{props.title}</text>
                {props.lines.map(line => <text className="attribute-subtitle">{line}</text>)}
                <div className="attribute-list-items">
                    {props.numerate ? (
                        <ol>
                            {props.istItems?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                        ) : (
                        <ul>
                            {props.listItems?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <text className="attribute-time">
                <text>{props.time}</text>
            </text>
        </div>
    )
}