import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GithubContext} from '../context/github/githubContext'

export const About = () => {
    const {clearUsers} = useContext(GithubContext)

    return (
        <div className="jumbotron">
            <h1 className="display-4">Привет всем</h1>
            <p className="lead">Это небольшое приложение использует публичное АПИ гитхаба для поиска пользователей и их репозиториев</p>
            <hr className="my-4"/>
            <p>Вы можете ознакомится с основными его возможностями нажав кнопку ниже</p>
            <p className="lead">
                <NavLink className="btn btn-success btn-lg mt-4" to="/" role="button"
                onClick={clearUsers}
                >Попробовать найти себя:)</NavLink>
            </p>
        </div>
    )
}