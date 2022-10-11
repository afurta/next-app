// import styles from './Auth.module.scss'
// import  './Auth.scss'
import AuthForm from "../../components/MainForm"
import { useState } from 'react'
import { ICONS } from '../../assets/icons'
import Image from 'next/image'

const Auth = () => {

    return(
        <div className='wrapper'>
            <div className='wrapper__header'>
                <Image 
                    src={ICONS.Logo} 
                    height={30} 
                    width={30} 
                    fill={'white'}
                />
            </div>
            <AuthForm />
            <div className='wrapper__footer'></div>
        </div>
    )
}

export default Auth