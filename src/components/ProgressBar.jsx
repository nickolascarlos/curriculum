import { useEffect, useRef} from "react"
import useIsVisible from "../custom_hooks/useIsVisible"

export default function ProgressBar(props) {
    const progressRef = useRef()
    const isVisible = useIsVisible(progressRef)

    useEffect(() => {
        if (progressRef.current && isVisible)
            setTimeout(() => progressRef.current.style.width = `${parseInt(props.progress)}%`, 200)
    }, [progressRef, isVisible])

    return (
        <div className="progress-bar">
            <div className="progress"
                ref={progressRef}
                style={{
                    width: 0
                }}
            ></div>
        </div>
    )
}