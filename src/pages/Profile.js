import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const Profile = ({ match }) => {
    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const curentUser = match.params.name

    
    useEffect(()=>{
        getUser(curentUser)
        getRepos(curentUser)
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <p>Идет загрузка</p>
    }


    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos,
        public_gists
      } = user

      
      return (
        <Fragment>
          <Link to="/" className="btn btn-link btn-light">На главную</Link>
          
          <div className="card mb-4 mt-2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <img
                    src={avatar_url}
                    alt={name}
                    style={{width: '150px', borderRadius: '10px'}}
                  />
                  <h1>{name}</h1>
                  {location && <p>Местоположение: {location}</p>}
                </div>
                <div className="col">
                  {
                    bio && <Fragment>
                      <h3>BIO</h3>
                      <p>{bio}</p>
                    </Fragment>
                  }
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >Открыть профиль  на GitHub</a>
                  <ul>
                    {login && <li className='mt-2'>
                      <strong>Username: </strong> {login}
                    </li>}
    
                    {company && <li className='mt-2'>
                      <strong>Компания: </strong> {company}
                    </li>}
    
                    {blog && <li className='mt-2'>
                      <strong>Website: </strong> {blog}
                    </li>}
                  </ul>
    
                  <div className="badge badge-primary mr-2">Подписчики: {followers}</div>
                  <div className="badge badge-success mr-2">Подписан: {following}</div>
                  <div className="badge badge-info mr-2">Репозитории: {public_repos}</div>
                  <div className="badge badge-dark mr-2">Gists: {public_gists}</div>
                </div>
              </div>
            </div>
          </div>
    
          {repos.join()
          }
        <div className='row'>

          { repos.map(item => {
            return (
            <div className='col-sm-4 mb-4' key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Создан: {item.created_at}</h6>
                  <p className="card-text">{item.description || 'Автор не указал описание:('}</p>
                  <a href={item.html_url} className="btn btn-primary">Перейти на репозиторий в Github</a>
                </div>
              </div>
            </div>

            )
          })

          }
          
        </div>
          </Fragment> 
        
      )
}
