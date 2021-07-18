import React, { useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from '../Navbar + componente/Navbar'
import { Link } from 'react-router-dom'
import ResultCard from '../Componente mici (Film + Serial)/ResultCard'
import { VscUnverified } from "react-icons/vsc"
import { AiOutlineAlert } from "react-icons/ai"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'
import { GiStopSign } from "react-icons/gi"

const Adauga = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    const onChange = e => {
        e.preventDefault()
        
        setQuery(e.target.value)
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d7f5ba449370c217df98de84358761d&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                setResults(data.results)
            } else {
                setResults([])
            }
        })
    }

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
            <div style = {{backgroundColor: '#22254b'}} className = 'add-page'>
                <h5 style = {{color: 'white', paddingTop: '30px', fontFamily: 'Poppins'}}><b style = {{color: 'greenyellow', fontWeight: 'lighter'}}>{userJSONParsed.nume}</b>, scrie numele unui film</h5>
                    <div style = {{marginTop: '-50px', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}} className = 'container'>
                        <div className = 'add-content'>
                            <div className = 'input-wrapper'>
                                <input type="text" value = {query} onChange = {onChange}/>
                            </div>
                        </div>
                    </div>
            </div>

            {results.length > 0 ? (
                <ul className="results">
                    {results.map(movie => (
                        <li key = {movie.id}>
                            <ResultCard movie = {movie}></ResultCard>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2 style = {{color: '#c4c4c4', marginTop: '20px', backgroundColor: '#22254b', marginTop: '-10px', marginBottom: '-10px', paddingTop: '36px', paddingBottom: '40px'}} className="no-movies">
                    <AiOutlineAlert style = {{width: '40px', height: '40px', marginTop: '-5px'}}></AiOutlineAlert> Ups... Nu exista niciun film cu aceasta denumire <br />
                    <p style = {{fontWeight: 'lighter', fontStyle: 'italic', backgroundColor: '#22254b', color: 'white', marginBottom: '-1px', float: 'left', textAlign: 'center', marginTop: '15px', marginLeft: '450px', fontSize: '18px'}} class="card-text">Daca nu te descurci, nu uita sa apelezi la meniul <button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button> din partea de sus a paginii</p>
                    <br />
                </h2>
            )}

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

export default Adauga
