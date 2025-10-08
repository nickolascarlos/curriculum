import Email from "./Email";
import Name from "./Name";
import Phone from "./Phone";
import Photo from "./Photo";
import Title from "./Title";

export default function Header(props) {
    return (
        <div className="c-header">
            {/* <Photo src={props.photo}/> */}
            <Name>{props.name}<text className="blinker">_</text></Name>
            <Title>{props.title}</Title>
            {/* <Email>nickolascarlos@gmail.com</Email>
            <Phone>(64) 99274-3215</Phone> */}
            <div className="c-header-info-attributes">
                {props.children}
            </div>
        </div>
    )
}