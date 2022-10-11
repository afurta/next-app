import {FC, useState} from 'react'
import LoginInput from '../Inputs/LoginInput'
import PasswordInput from '../Inputs/PasswordInput'


const AuthForm:FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    return (
        <div className='form' onSubmit={(e) => e.preventDefault()}>
            <form >
                {
                  isAuth
                  ? <h1 className='form__heading'>Авторизация</h1>
                  : <h1 className='form__heading'>Регистрация</h1>
                }
                <div className='form__content'>
                    <div className='form__field'>
                        <LoginInput className='form__field-input'/>
                    </div>
                    <div className='form__field'>
                        <PasswordInput className='form__field'/>
                    </div>
                    { isAuth && <a href="#" className='form__link'>Забыл пароль?</a> }
                </div>
                <div className='form__action-block'>
                    {
                        !isAuth
                            ? <button className='form__button' onClick={() => setIsAuth(!isAuth)}>Авторизация</button>
                            : <button className='form__button' onClick={() => setIsAuth(!isAuth)}>Регистрация</button>
                    }
                    <button className='form__button form__button_active'>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm