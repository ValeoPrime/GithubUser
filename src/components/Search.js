import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {

    const [startInputValue, setInputValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)

    // console.log('ГИТХАБ КОНТЕКСТ',github);
    

   const onSubmit = (event) => {
    if(event.key !== 'Enter'){
        return 
    }

    if(startInputValue.trim()){
        hide()
        github.search(startInputValue.trim())
    } else {
        github.clearUsers()
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