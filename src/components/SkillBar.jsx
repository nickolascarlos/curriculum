import ProgressBar from "./ProgressBar";

export default function SkillBar(props) {
    return (
        <div className="skill-bar" style={props.style}>
            <div className="skill-bar-head">
                {
                    props.icon &&
                    <div className="skill-bar-icon"
                        style={{marginRight: props.labelIconDistance ?? '12px', ...props.iconStyle}}
                    >
                        {props.icon}
                    </div>
                }
                <text className="skill-name">{props.name}</text>
            </div>
            {
            props.level &&
                <ProgressBar 
                    progress={props.level}
                    animate={true}
                    after={300}
                    />
            }
        </div>
    )
}