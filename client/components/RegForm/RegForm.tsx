import {FC} from 'react'
import styles from './RegForm.module.scss'

interface IRegForm{
    setForm: Function
}

const RegForm:FC<IRegForm> = ({setForm}) => (
    <div className={styles.reg_form}>
        <form>
            <h1>Регистрация</h1>
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
            </div>
            <div className={styles.action}>
            <button onClick={() => setForm()}>Авторизация</button>
            <button>Войти</button>
            </div>
        </form>
    </div>
)

export default RegForm