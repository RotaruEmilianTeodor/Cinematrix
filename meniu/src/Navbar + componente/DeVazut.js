import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from '../Navbar + componente/Navbar'
import { Link } from 'react-router-dom'
import MovieCard from '../Componente mici (Film + Serial)/MovieCard'
import { VscUnverified } from "react-icons/vsc"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'
import { GiStopSign } from "react-icons/gi"

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

    if (localStorage.getItem('jwt')) {
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

                    <hr style = {{border: '1px solid black', color: 'black', marginTop: '-8px', marginBottom: '20px'}}/>

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
    } else {
        return (
            <>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
                <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Lista Personalizata</h3>
            </header>
            
            <div className="movie-page">
                <GiStopSign style = {{width: '150px', height: '150px', color: 'red'}}></GiStopSign>
                <h2 style = {{color: 'white', fontFamily: 'Poppins', marginTop: '20px', marginBottom: '20px'}}>Acces restrictionat <b>trecatorilor!</b></h2>
                <p style = {{color: 'white', fontFamily: 'Poppins'}}>Din pacate aceasta pagina nu este inclusa in pachetul de beneficii pe care il detii.</p>
                <p style = {{color: 'white', fontFamily: 'Poppins'}}>Pentru a te putea bucura de pagina Lista Personalizata, va trebui sa intri in modul <b>Membru</b>. Pentru a putea face acest lucru te rugam urmeaza instructiunile de mai jos:</p>
                <p style = {{color: 'white', fontFamily: 'Poppins', fontWeight: 'lighter'}}>- Apasa pe butonul LOGOUT din partea dreapta de sus a paginii.</p>
                <p style = {{color: 'white', fontFamily: 'Poppins', fontWeight: 'lighter', marginTop: '-15px'}}>- Daca ai deja cont, introdu datele, si apasa pe butonul LOGIN.</p>
                <p style = {{color: 'white', fontFamily: 'Poppins', fontWeight: 'lighter', marginTop: '-15px'}}>- Daca nu ai cont, apasa butonul INREGISTRARE, si completeaza formularul, apoi logheaza-te cu noile date.</p>
                <p style = {{color: 'white', fontFamily: 'Poppins', fontWeight: 'lighter', marginTop: '-15px'}}>ACUM TE POTI BUCURA DE ACEASTA PAGINA!</p>
                <p style = {{color: 'white', fontFamily: 'Poppins', marginLeft: '500px', marginBottom: '-10px'}}>Echipa CINEMATRIX</p>
            </div>

            <div className="about-section-2" style = {{paddingBottom: '2px', paddingTop: '20px'}}>
                <h6 style = {{color: 'white', fontFamily: 'Poppins', marginTop: '-2px'}}><b>NU UITA!</b></h6>
                <p style = {{color: 'gray', fontFamily: 'Poppins'}}>Pentru informatiile cu privire la functionalitatile paginii acesteaza meniul <Link to = '/ajutor'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button></Link></p>
                <p style = {{color: 'gray', fontFamily: 'Poppins'}}>Pentru informatiile generale cu privire la portal acesteaza meniul <Link to = '/contact'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-danger">Contact</button></Link></p>
            </div>

            <ScrollToTop></ScrollToTop>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
            </>
        )
    }
}

export default DeVazut
