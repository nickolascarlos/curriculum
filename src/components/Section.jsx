export default function Section(props) {
    return (
        <div className="c-section" style={props.style}>
            <text className="title">{props.title}</text>
            <div className="content" style={props.contentStyle}>
                {props.children}
            </div>
        </div>
    )
}