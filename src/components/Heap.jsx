import { Children } from "react";

export default function Heap(props) {
    return (
        <>
            <div className="attributes-heap">
                {Children.map(props.children, child => (
                    <div style={{width: `${100/props.perRow}%`, overflow: 'hidden'}}>
                        {child}
                    </div>
                ))}
            </div>
        </>
    )
}