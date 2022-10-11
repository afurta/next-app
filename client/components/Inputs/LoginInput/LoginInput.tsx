import {FC} from "react"

interface ILoginInput{
    customPlaceholder?: string
    className?: string
} 

const LoginInput:FC<ILoginInput> = ({customPlaceholder, className }) =>{
    return(
        <input 
            type="email" 
            placeholder={customPlaceholder || "Email" }
            autoComplete="nope"
            className={`${className}`}
        />
    )
}
export default LoginInput