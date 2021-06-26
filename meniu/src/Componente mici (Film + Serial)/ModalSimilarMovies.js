import React from 'react'
import { SiThemoviedatabase } from 'react-icons/si'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const ModalSimilarMovies = ({id, title, poster_path, vote_average, release_date}) => {
    return (
        <div>
            <div style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}} className = 'movie-similar'>   
                <div className="movie-header-similar-filme">
                    <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'} alt={title}/>
                    <a style = {{position: 'absolute', top: 5, left: 17, fontFamily: 'poppins', marginLeft: '200px', color: 'black'}} href = {`https://www.themoviedb.org/movie/${id}`} target='_blank' data-toggle="tooltip" data-placement="top" title="Mai multe info"><SiThemoviedatabase className = 'FaInfoRecomandari'></SiThemoviedatabase></a>
                    <span style = {{position: 'absolute', top: '4px', left: '4px', fontSize: '17px', fontFamily: 'Poppins', fontWeight: 'lighter'}} className="badge rounded-pill bg-danger">{vote_average}</span>
                    <div className="movie-info-similar-filme">
                        <h3 style = {{fontSize: 15, color: 'black'}}>{title} ({release_date.substring(0,4)})</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSimilarMovies
