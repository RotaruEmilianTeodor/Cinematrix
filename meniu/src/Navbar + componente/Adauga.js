import React, { useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from '../Navbar + componente/Navbar'
import { Link } from 'react-router-dom'
import ResultCard from '../Componente mici (Film + Serial)/ResultCard'
import { VscUnverified } from "react-icons/vsc"
import { AiOutlineAlert } from "react-icons/ai"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Adauga = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

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
                    <div className = 'container'>
                        <div className = 'add-content'>
                            <div className = 'input-wrapper'>
                                <input type="text" placeholder = 'Gaseste o productie' value = {query} onChange = {onChange}/>
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
}

export default Adauga
