import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import axios from 'axios'

import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../actionTypes'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}


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
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async (userName) => {
        setLoading()
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${userName}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async (userName) => {
        setLoading()
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${userName}/repos?per_page=10&`)
        )
      
        dispatch({
            type: GET_REPOS,
            payload: response.data
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