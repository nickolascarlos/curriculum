export default function BodyColumn(props) {
    return (
        <div 
            className="c-body-column"
            style={{
                flex: props.flex
            }}
        >
            {props.children}
        </div>
    )
}