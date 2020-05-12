import React from 'react'
import {Link} from 'react-router-dom'

export const Card = () => {
    
    return (
        <div className="card">
            <img className="card-img-top" src={''} alt={''}/>
            <div className="card-body">
                <h5 className="card-title">Пользователь гитхаба</h5>
                {/* <p className="card-text">Его краткое описание.</p> */}
                <Link to={'/profile/' } className="btn btn-primary">Перереход на список его репо</Link>
            </div>
        </div>
    )
    
}