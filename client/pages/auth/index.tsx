import styles from './Auth.module.scss'
import AuthForm from "../../components/AuthForm"
import RegForm from '../../components/RegForm'
import { useState } from 'react'
import { ICONS } from '../../assets/icons'
import Image from 'next/image'

const Auth = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Image 
                    src={ICONS.Logo} 
                    height={30} 
                    width={30} 
                    fill={'white'}
                />
            </div>
            {
                isAuth 
                ? <AuthForm setForm={() => setIsAuth(!isAuth)}/>
                : <RegForm setForm={() => setIsAuth(!isAuth)}/>
            }
            <div className={styles.wrapper__footer}>
            </div>
        </div>
    )
}

export default Auth
