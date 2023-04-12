import ProgressBar from "./ProgressBar";

export default function SkillBar(props) {
    return (
        <div className="skill-bar">
            <div className="skill-bar-head">
                {
                    props.icon &&
                    <div className="skill-bar-icon"
                        style={props.iconStyle}
                    >
                        {props.icon}
                    </div>
                }
                <text className="skill-name">{props.name}</text>
            </div>
            <ProgressBar progress={props.level}/>
        </div>
    )
}