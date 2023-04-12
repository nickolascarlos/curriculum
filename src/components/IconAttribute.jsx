import Row from "./Row";

export default function IconAttribute(props) {

    return (
        <div className="icon-attribute">
            <Row>
                <div className="icon" style={props.iconStyle}>
                    {props.icon}
                </div>
                <text 
                    className="text"
                    style={props.textStyle}>
                        {props.children}
                </text>
            </Row>
        </div>
    )
}