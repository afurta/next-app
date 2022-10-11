import MainForm from "../MainForm"
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('MainForm component', () => {
    it('Auth form', ()=>{
        render(<MainForm/>)
        expect(screen.getByRole( 'heading', {level: 1})).toHaveTextContent('Регистрация')
        expect(screen.getByRole( 'button', {name:'Войти'})).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument()
        expect(screen.queryByText('Забыл пароль?')).not.toBeInTheDocument()
    })
    it('Reg form', ()=>{
        render(<MainForm/>)
        const btn = screen.getByRole( 'button', {name:'Авторизация'})
        fireEvent.click(btn)
        screen.debug()
        expect(screen.getByRole( 'heading', {level: 1})).toHaveTextContent('Авторизация')
        expect(screen.getByRole( 'button', {name:'Войти'})).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument()
        expect(screen.getByText('Забыл пароль?')).toBeInTheDocument()
    })
})