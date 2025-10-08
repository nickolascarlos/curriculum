import AttributeWithTimeMultiline from "./AttributeWithTimeMultiline";
import VerticalDivisor from "./VerticalDivisor";

export default function TimelinedAttributesWithImage(props) {
    return (
        <div className="timelined-attributes-with-image" style={props.style}>
            <img className="attribute-image" src={props.image}/>
            <div className="attribute-content">
                {
                    props.attributes.map(({title, lines, time, listItems, numerate = false}) => (
                        <div className="attribute-with-time">
                            <div className="attribute-head">
                                <text className="attribute-title">{title}</text>
                                {lines.map(line => <text className="attribute-subtitle">{line}</text>)}
                                <div className="attribute-list-items">
                                    {numerate ? (
                                        <ol>
                                            {listItems?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                            ))}
                                        </ol>
                                        ) : (
                                        <ul>
                                            {listItems?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        )}
                                </div>
                            </div>
                            <text className="attribute-time">
                                <text>{time}</text>
                            </text>
                        </div>
                    ))
                }   
                
            </div>
        </div>
    )
}