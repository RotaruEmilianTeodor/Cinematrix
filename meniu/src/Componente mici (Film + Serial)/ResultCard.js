import React, { useState,useEffect } from 'react'

const ResultCard = ({movie}) => {
    const [watchList, setWatchList] = useState([])
    const [watched, setWatched] = useState([])

    useEffect(() => {
        setWatchList(JSON.parse(localStorage.getItem("user")).watchList)
        setWatched(JSON.parse(localStorage.getItem("user")).watched)
    }, [])

    const addWatchList = (movie) =>{
        fetch('/add-watchList',{
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
            watchList.push(JSON.stringify(movie))
            setWatchList(watchList)
            var user = JSON.parse(localStorage.getItem("user"))
            user.watchList=watchList
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
        }).then(
            document.getElementById(movie.id).disabled = 'true'
        )
    }

    const addWatched = (movie) =>{
        fetch('/add-watched',{
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
            watched.push(JSON.stringify(movie))
            setWatched(watched)
            var user = JSON.parse(localStorage.getItem("user"))
            user.watched=watched
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
        }).then(
            document.getElementById(movie.title).disabled = 'true',
            document.getElementById(movie.id).disabled = 'true'
        )
    }

    return (
        <div className = 'result-card'>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                ) : (
                    <div className = 'filler-poster'></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <br/>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                    </h4>
                </div>
                <div>
                    <button id = {movie.id} style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.6)'}} className="btnLista" 
                    disabled={watchList.includes(JSON.stringify(movie)) ? true : false}
                    onClick = {() => addWatchList(movie)}>Adauga la DE VAZUT</button>
                    <button id = {movie.title} style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.6)'}} className="btnLista2"
                    disabled={watched.includes(JSON.stringify(movie)) ? true : false}
                    onClick = {() => addWatched(movie)}>Adauga la VAZUTE</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
