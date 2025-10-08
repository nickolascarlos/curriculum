import { Children } from "react";

export default function Heap(props) {
    return (
        <>
            <div className="attributes-heap" style={props.style}>
                {Children.map(props.children, (child, i) => (
                    <div style={{overflow: 'hidden', ...(props.perRow ? {width: `${100/props.perRow}%`} : {})}}>
                        {child}
                    </div>
                ))}
            </div>
        </>
    )
}