import React, { Fragment, useContext } from 'react'
import {Search} from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/githubContext'
import { Loader } from '../components/loader/Loader'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)
    console.log('лоадинг',loading);
    

    return (
        <Fragment>
            <Search/>
            <div className='row'>

            {loading 
            ?
            <Loader/>
            : 
            users.map(user => {
                return (
                    <div className='col-sm-4 mb-4' key={user.id}>
                        <Card
                            user={user}
                        />
                    </div>
                )
            })
        }
            </div>
        </Fragment> 
    )
}