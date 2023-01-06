import React, { useContext, useEffect, } from 'react'
import { GithubContext } from '../../../context/github/githubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../../repos'
import { useParams } from 'react-router-dom'

export const Profile = () => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const params = useParams()
  const urlName = params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers_url,
    following_url, public_repos,
    gists_url
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <div className="badge badge-primary">Подписчики: {followers_url}</div>
              <div className="badge badge-success">Подписан: {following_url}</div>
              <div className="badge badge-info">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {gists_url}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </>
  )
}
