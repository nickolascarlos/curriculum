import EmailFullIcon from "../icons/EmailFullIcon";
import IconAttribute from "./IconAttribute";

export default function Email(props) {
    return (
        <IconAttribute icon={<EmailFullIcon/>}
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