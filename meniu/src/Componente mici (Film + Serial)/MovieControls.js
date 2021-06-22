import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchList, addMovieToWatched, moveToWatchList, removeFromWatched } = useContext(GlobalContext)

    return (
        <div className="inner-card-controls">
            {type === 'watchList' && (
                <>
                    <button className="ctrl-btn" onClick = {() => addMovieToWatched(movie)}>
                        <i>Vazut</i>
                    </button>
                    <button className="ctrl-btn" onClick = {() => removeMovieFromWatchList(movie.id)}>
                        <i>Sterge</i>
                    </button>
                </>
            )} 

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn" onClick = {() => moveToWatchList(movie)}>
                        <i>Nevizionat</i>
                    </button>

                    <button className="ctrl-btn" onClick = {() => removeFromWatched(movie.id)}>
                        <i>Sterge</i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls
