import React, { useContext } from 'react'

const MovieControls = ({ movie, type }) => {

    const removeMovieFromWatchList = (movie) =>{
        fetch('/deleteMovie',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                movie:movie
            })
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        }).then(
            window.location.reload()
        )
    }

    const removeMovieFromWatched = (movie) =>{
        fetch('/deleteMovie2',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                movie:movie
            })
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        }).then(
            window.location.reload()
        )
    }

    const fromWatchToWatched = (movie) =>{
        fetch('/fromWatchToWatched',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                movie:movie
            })
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        }).then(
            window.location.reload()
        )
    }

    const fromWatchedToWatch = (movie) =>{
        fetch('/fromWatchedToWatch',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                movie:movie
            })
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        }).then(
            window.location.reload()
        )
    }

    return (
        <div className="inner-card-controls">
            {type === 'watchList' && (
                <>
                    <button className="ctrl-btn" onClick = {() => fromWatchToWatched(movie)}>
                        <i>Vazut</i>
                    </button>
                    <button className="ctrl-btn" onClick = {() => removeMovieFromWatchList(movie)}>
                        <i>Sterge</i>
                    </button>
                </>
            )} 

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn" onClick ={() => fromWatchedToWatch(movie)}>
                        <i>Nevizionat</i>
                    </button>

                    <button className="ctrl-btn" onClick = {() => removeMovieFromWatched(movie)}>
                        <i>Sterge</i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls
