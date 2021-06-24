import React, { useEffect, useState } from "react"
import Film from "../Componente mici (Film + Serial)/Film";
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from './Footer'
import { BsChatQuote } from "react-icons/bs"
import { TiInfoLargeOutline } from "react-icons/ti"
import { AiOutlineAlert } from "react-icons/ai"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d7f5ba449370c217df98de84358761d&page=1";

// API pe genuri
const API_ACTIUNE = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=28";
const API_AVENTURA = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=12";
const API_ANIMATIE = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=16";
const API_COMEDIE = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=35";
const API_CRIMA = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=80";
const API_DOCUMENTAR = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=99";
const API_DRAMA = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=18";
const API_FAMILIE = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10751";
const API_FANTASY = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=14";
const API_ISTORIC = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=36";
const API_HORROR = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=27";
const API_MUSICAL = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10402";
const API_MISTER = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=9648";
const API_ROMANTIC = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10749";
const API_SF = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=878";
const API_THRILLER = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=53";
const API_RAZBOI = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10752";
const API_WESTERN = "https://api.themoviedb.org/3/discover/movie?api_key=2d7f5ba449370c217df98de84358761d&with_genres=37";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=2d7f5ba449370c217df98de84358761d&query="

function Filme() {
  const [ filme, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  
  var obiectGen = document.getElementById('textNode')

  useEffect(async () => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API+searchTerm);
      setSearchTerm('');
      obiectGen.innerText = `Rezultatele pentru: ${searchTerm.toUpperCase()}`;
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const getFilmeActiune = () => {
    getMovies(API_ACTIUNE);
    obiectGen.innerText = "Filme de actiune";
  }

  const getFilmeAventura = () => {
    getMovies(API_AVENTURA);
    obiectGen.innerText = "Filme de aventura";
  }

  const getFilmeAnimatie = () => {
    getMovies(API_ANIMATIE);
    obiectGen.innerText = "Filme de animatie";
  }

  const getFilmeComedie = () => {
    getMovies(API_COMEDIE);
    obiectGen.innerText = "Filme de comedie";
  }

  const getFilmeCrima = () => {
    getMovies(API_CRIMA);
    obiectGen.innerText = "Filme crima";
  }

  const getFilmeDocumentar = () => {
    getMovies(API_DOCUMENTAR);
    obiectGen.innerText = "Filme-documentar";
  }

  const getFilmeDrama = () => {
    getMovies(API_DRAMA);
    obiectGen.innerText = "Filme de drama";
  }

  const getFilmeFamilie = () => {
    getMovies(API_FAMILIE);
    obiectGen.innerText = "Filme pentru intreaga familie";
  }

  const getFilmeFantasy = () => {
    getMovies(API_FANTASY);
    obiectGen.innerText = "Filme fantasy";
  }

  const getFilmeIstoric = () => {
    getMovies(API_ISTORIC);
    obiectGen.innerText = "Filme istorice";
  }

  const getFilmeHorror = () => {
    getMovies(API_HORROR);
    obiectGen.innerText = "Filme horror";
  }

  const getFilmeMusical = () => {
    getMovies(API_MUSICAL);
    obiectGen.innerText = "Filme musical";
  }

  const getFilmeMister = () => {
    getMovies(API_MISTER);
    obiectGen.innerText = "Filme de mister";
  }

  const getFilmeRomantic = () => {
    getMovies(API_ROMANTIC);
    obiectGen.innerText = "Filme romantice";
  }

  const getFilmeSF = () => {
    getMovies(API_SF);
    obiectGen.innerText = "Filme SF";
  }

  const getFilmeThriller = () => {
    getMovies(API_THRILLER);
    obiectGen.innerText = "Filme thriller";
  }

  const getFilmeRazboi = () => {
    getMovies(API_RAZBOI);
    obiectGen.innerText = "Filme cu razboi";
  }

  const getFilmeWestern = () => {
    getMovies(API_WESTERN);
    obiectGen.innerText = "Filme western";
  }

  return (
    // folosim fragment, sau putem pune <div>
    <>
      <Navbar></Navbar>
      <header style = {{marginTop: 70}}>
        <h5 className = 'textFilme'>FILME</h5>
        <h3 className = 'textRecomandari'>Recomandarile saptamanii</h3>
        <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Conrad Hall" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique', fontSize: '1vw'}}>"Cinematography is infinite in its possibilities... much more so than music or language" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="search"   
            placeholder = 'cauta film...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className = 'container-butoane'>
        <div style = {{paddingTop: '25px'}} class="btn-group1" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" onClick = {getFilmeActiune} class="btn-check1" id="btncheck1" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck1">Actiune</label>

          <input type="checkbox" onClick = {getFilmeAventura} class="btn-check2" id="btncheck2" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck2">Aventura</label>

          <input type="checkbox" onClick = {getFilmeAnimatie} class="btn-check3" id="btncheck3" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck3">Animatie</label>

          <input type="checkbox" onClick = {getFilmeComedie} class="btn-check4" id="btncheck4" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck4">Comedie</label>

          <input type="checkbox" onClick = {getFilmeCrima} class="btn-check5" id="btncheck5" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck5">Crima</label>

          <input type="checkbox" onClick = {getFilmeDocumentar} class="btn-check6" id="btncheck6" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck6">Documentar</label>

          <input type="checkbox" onClick = {getFilmeDrama} class="btn-check7" id="btncheck7" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck7">Drama</label>

          <input type="checkbox" onClick = {getFilmeFamilie} class="btn-check8" id="btncheck8" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck8">Familie</label>

          <input type="checkbox" onClick = {getFilmeFantasy} class="btn-check9" id="btncheck9" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck9">Fantasy</label>
        </div>

        <div style = {{paddingBottom: '20px'}} class="btn-group2" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" onClick = {getFilmeIstoric} class="btn-check10" id="btncheck10" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck10">Istoric</label>

          <input type="checkbox" onClick = {getFilmeHorror} class="btn-check11" id="btncheck11" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck11">Horror</label>

          <input type="checkbox" onClick = {getFilmeMusical} class="btn-check12" id="btncheck12" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck12">Musical</label>

          <input type="checkbox" onClick = {getFilmeMister} class="btn-check13" id="btncheck13" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck13">Mister</label>

          <input type="checkbox" onClick = {getFilmeRomantic} class="btn-check14" id="btncheck14" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck14">Romantic</label>

          <input type="checkbox" onClick = {getFilmeSF} class="btn-check15" id="btncheck15" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck15">Science Fiction</label>

          <input type="checkbox" onClick = {getFilmeThriller} class="btn-check16" id="btncheck16" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck16">Thriller</label>

          <input type="checkbox" onClick = {getFilmeRazboi} class="btn-check17" id="btncheck17" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck17">Razboi</label>

          <input type="checkbox" onClick = {getFilmeWestern} class="btn-check18" id="btncheck18" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck18">Western</label>
        </div>
  
      </div>

      <div className = "about-section-2" style = {{paddingTop: '25px', paddingBottom: '10px'}}>
          <p id = 'textNode'></p>
      </div>

      <div style = {{paddingBottom: '10px'}} className="movie-container">

        {filme.length > 0 ? filme.map(film => (
          <Film key={film.id} {...film}></Film>
        )) : (
          <h2 style = {{color: '#c4c4c4', marginTop: '20px'}} className="no-movies">
            <AiOutlineAlert style = {{width: '40px', height: '40px', marginTop: '-5px'}}></AiOutlineAlert> Ups... Nu exista niciun film cu aceasta denumire <br /><br />
            <i style = {{fontSize: '19px', color: 'gray'}}>Iti recomandam sa: <br />
              <li>Verifici inca o data numele introdus</li>
              <li>Sa verifici daca numele cautat este film sau serial</li>
              <li>In cazul in care este serial, te invitam pe pagina de alaturi</li><br />
              <p style = {{fontWeight: 'lighter', fontStyle: 'italic', backgroundColor: '#22254b', color: 'white', marginBottom: '-1px', float: 'left', textAlign: 'center', marginTop: '10px', marginLeft: '30px'}} class="card-text">Daca nu te descurci, nu uita sa apelezi la meniul <button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button> din partea de sus a paginii</p>
            </i>
          </h2>
        )} 

      </div>

      <div className = "about-section-2" style = {{paddingTop: '25px', paddingBottom: '10px', color: 'white', fontFamily: 'Poppins'}}>
          <p><TiInfoLargeOutline style = {{width: '30px', height: '30px', marginTop: '-3px', marginRight: '-5px'}}></TiInfoLargeOutline> Productiile de pe aceasta pagina provin din sursa The Movie Database</p>
      </div>

      <ScrollToTop></ScrollToTop>

      <Footer></Footer>
      <SocialButtonsBar></SocialButtonsBar>
    </>
  );
}

export default Filme;

// SURSA: https://www.youtube.com/watch?v=sZ0bZGfg_m4&t=1757s
