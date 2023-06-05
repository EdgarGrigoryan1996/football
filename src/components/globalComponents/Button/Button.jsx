import s from "./Button.module.css"


const Button = ({text,color,callback,disabled}) => {

    return (
        <button
            disabled={disabled}
            className={s.btn + " "  + s[color]}
            onClick={() => {
                callback()
            }}
        >{text}</button>
    )
}

export default Button