import {FC} from 'react'
import styles from './AuthForm.module.scss'

interface IAuthForm{
    setForm: Function
}
const AuthForm:FC<IAuthForm> = ({setForm}) => (
    <div className={styles.login_form}>
        <form>
            <h1>Авторизация</h1>
            <div className={styles.content}>
            <div className={styles.input_field}>
                <input 
                type="email" 
                placeholder="Email" 
                autoComplete="nope"
                />
            </div>
            <div className={styles.input_field}>
                <input 
                type="password" 
                placeholder="Пароль" 
                autoComplete="new-password"
                />
            </div>
            <a href="styles.#" className={styles.link}>
                Забыл пароль?
                </a>
            </div>
            <div className={styles.action}>
            <button onClick={() => setForm()}>Регистрация</button>
            <button>Войти</button>
            </div>
        </form>
    </div>
)

export default AuthForm
