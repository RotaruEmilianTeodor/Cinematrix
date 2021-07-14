import React from 'react'
import MovieControls from './MovieControls'

const MovieCard = ({ movie, type }) => {
    return (
        <div style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.7)'}} className="movie-card">
            <div className="overlay">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                ) : (
                    <div style = {{width: '197px', height: '296px'}} className = 'filler-poster'></div>
                )}

                <MovieControls type = {type} movie = {movie}></MovieControls>
            </div>
        </div>
    )
}

export default MovieCard
