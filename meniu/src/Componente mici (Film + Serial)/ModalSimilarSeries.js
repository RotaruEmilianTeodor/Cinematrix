import React from 'react'
import { SiThemoviedatabase } from 'react-icons/si'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const ModalSimilarSeries = ({id, name, poster_path}) => {
    return (
        <div>
            <div className = 'movie-similar'>
                <div className="movie-header-similar-filme">
                    <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'} alt={name}/>
                    <a style = {{position: 'absolute', top: 5, left: 17, fontFamily: 'poppins', marginLeft: '200px', color: 'black'}} href = {`https://www.themoviedb.org/tv/${id}`} target='_blank' data-toggle="tooltip" data-placement="top" title="Mai multe info"><SiThemoviedatabase className = 'FaInfoRecomandari'></SiThemoviedatabase></a>
                    <div className="movie-info-similar-filme">
                        <h3 style = {{fontSize: 15, color: 'black'}}>{name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSimilarSeries

