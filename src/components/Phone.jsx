import PhoneFullIcon from "../icons/PhoneFullIcon";
import IconAttribute from "./IconAttribute";

export default function Phone(props) {
    return (
      <IconAttribute icon={<PhoneFullIcon/>}
        iconStyle={{
          width: '12px'
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