export default function Section(props) {
    return (
        <div className="c-section">
            <text className="title">{props.title}</text>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}