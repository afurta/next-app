import {FC} from "react"

interface IPasswordInput{
    customPlaceholder?: string
    className?: string
} 

const PasswordInput:FC<IPasswordInput> = ({customPlaceholder, className }) =>{
    return(
        <input 
            type="password" 
            placeholder={customPlaceholder || "Пароль" }
            autoComplete="new-password"
            className={`${className}`}
        />
    )
}
export default PasswordInput