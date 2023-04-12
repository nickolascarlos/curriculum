export default function AttributeWithContent(props) {
    return (
        <div className="attribute-with-content">
        <div className="attribute-head">
            {
                props.href ?
                <a href={props.href} target="blank" className="attribute-title-href">
                    <text className="attribute-title">{props.title}</text>
                </a>
                    :
                <text className="attribute-title">{props.title}</text>
            }
            
            {props.subtitle && <text className="attribute-subtitle">{props.subtitle}</text>}
        </div>

        <div className="attribute-content">
            {props.content}
        </div>
    </div>
    )
}