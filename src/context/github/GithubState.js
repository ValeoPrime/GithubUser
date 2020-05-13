import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../actionTypes'



export const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async (value) => {
        setLoading()
        // запрос на сервер

        dispatch({
            type: SEARCH_USERS,
            payload: [] //данные с сервера
        })
    }

    const getUser = async (userName) => {
        setLoading()
        //...

        dispatch({
            type: GET_USER,
            payload: []//...
        })
    }

    const getRepos = async (userName) => {
        setLoading()
        //...

        dispatch({
            type: GET_REPOS,
            payload: []//...
        })
    }

    const clearUsers = () => { dispatch({ type: CLEAR_USERS }) }

    const setLoading = () => { dispatch({ type: SET_LOADING }) }

    const { user, users, loading, repos } = state




    return (
        <GithubContext.Provider value={{
            search, getUser, getRepos, clearUsers, setLoading, user, users, loading, repos
        }}>
            {children}
        </GithubContext.Provider>

    )
}