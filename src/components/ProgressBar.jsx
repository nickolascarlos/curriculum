export default function ProgressBar(props) {
    return (
        <div className="progress-bar">
            <div className="progress"
                style={{
                    width: props.progress
                }}
            ></div>
        </div>
    )
}