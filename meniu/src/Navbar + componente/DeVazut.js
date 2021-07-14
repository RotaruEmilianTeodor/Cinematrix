import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from '../Navbar + componente/Navbar'
import { Link } from 'react-router-dom'
import MovieCard from '../Componente mici (Film + Serial)/MovieCard'
import { VscUnverified } from "react-icons/vsc"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const DeVazut = () => {
    const [watchList, setWatchList]=useState([])

    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    useEffect(() => {
        fetch("/getWatchList",{
            headers:{
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(movies =>{
            console.log(JSON.parse(movies.data.watchList[0]))
            setWatchList(movies.data.watchList)
        })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
                <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Lista Personalizata</h3>
                <Link to = '/lista-personalizata'><VscUnverified className = 'DetailsIcon2'></VscUnverified></Link>
                <Link to = '/de-vazut' style = {{float: 'left', marginTop: '13px', marginLeft: '20x'}}>De vazut</Link>
                <Link to = '/vazute' style = {{float: 'left', marginTop: '13px', marginLeft: '20px'}}>Vazute</Link>
                <Link to = '/adauga' class='btn btn-outline-danger' style = {{float: 'left', marginTop: '8px', marginLeft: '20px'}}>+ ADAUGA</Link>
            </header>
            <div className="movie-page">
                <div className="container">
                    <div className="headerDeVazut">
                        <h1 className = 'heading'>Filme de vazut pentru utilizatorul <b style = {{color: 'greenyellow', fontWeight: 'lighter'}}>{userJSONParsed.nume}</b></h1>

                        <span className="count-pill">
                            {watchList.length} {watchList.length === 1 ? 'Film' : 'Filme'} 
                        </span>
                    </div>

                    {watchList.length > 0 ? (
                        <div className="movie-grid">
                        {watchList.map(movie => (
                            <MovieCard movie = {JSON.parse(movie)} type = 'watchList'></MovieCard>
                        ))}
                        </div>
                    ) : (
                        <h2 style = {{paddingTop: '72px', paddingBottom: '41px'}} className="no-movies">
                            Nu ai niciun film in lista!
                        </h2>
                    )}
                </div>
            </div>

            <ScrollToTop></ScrollToTop>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
    )
}

export default DeVazut
