import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'

export const Search = () => {

    const [startInputValue, setInputValue] = useState('')
    const {show} = useContext(AlertContext)

   const onSubmit = (event) => {
    if(event.key !== 'Enter'){
        return 
    }

    if(startInputValue.trim()){
        
        //запрос на получение данных
    } else {
        show('Чтобы я что-то поискал, надо что-то ввести', 'info')
    }
    
       
    }

    return (
        <div className='form-group'>
            <input
            type='text'
            className='form-control'
            placeholder='Введите ник пользователя'
            onKeyPress={onSubmit}
            value = {startInputValue}
            onChange = {event => setInputValue(event.target.value)}
            >
            
            </input>
        </div>
    )
}