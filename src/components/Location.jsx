import PinFullIcon from "../icons/PinFullIcon";
import IconAttribute from "./IconAttribute";

export default function Location(props) {
    return (
        <IconAttribute icon={<PinFullIcon/>}
            iconStyle={{
            width: '11px'
            }}

            textStyle={{
            color: '#979ba2',
            fontSize: '9pt'
            }}
        >
        {props.children}
      </IconAttribute>
    )
}