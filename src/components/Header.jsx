import Name from "./Name";
import Photo from "./Photo";
import Title from "./Title";

export default function Header(props) {
    return (
        <div className="c-header">
            <Photo src={props.photo}/>
                <Name>{props.name}<text className="blinker">_</text></Name>
                <Title>{props.title}</Title>
                <div className="c-header-info-attributes">
                    {props.children}
                </div>
        </div>
    )
}