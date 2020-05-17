import React from 'react'
import {Link} from 'react-router-dom'


export const Card = ({user}) => {
    
    return (
        <div className="card .bg-gradient-light pt-4" style={{ alignItems: 'center', }}>
            <img className="card-img-top" src={user.avatar_url} alt={user.login} style={{maxWidth: '200px', borderRadius: '10px'
        }}/>
            <div className="card-body">
                <h5 className="card-title">${user.login}</h5>
                <Link to={'/profile/' + user.login } className="btn btn-primary">О пользователе подробно</Link>
            </div>
        </div>
    )
    
}