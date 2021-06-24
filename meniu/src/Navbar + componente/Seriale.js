import React, { useEffect, useState } from "react"
import Serial from "../Componente mici (Film + Serial)/Serial";
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from "./Footer"
import { BsChatQuote } from "react-icons/bs"
import { TiInfoLargeOutline } from "react-icons/ti"
import { AiOutlineAlert } from "react-icons/ai"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const FEATURED_API_TV = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=2d7f5ba449370c217df98de84358761d&page=1";

// API pe genuri
const API_ACTIUNEsiAVENTURA = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10759";
const API_ANIMATIE = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=16";
const API_COMEDIE = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=35";
const API_CRIMA = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=80";
const API_DOCUMENTAR = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=99";
const API_DRAMA = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=18";
const API_FAMILIE = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10751";
const API_COPII = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10762";
const API_MISTER = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=9648";
const API_STIRI = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10763";
const API_REALITY = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10764";
const API_SFsiFANTASY = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10765";
const API_TELENOVELA = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10766";
const API_TALKSHOW = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10767";
const API_RAZBOIsiPOLITICA = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=10768";
const API_WESTERN = "https://api.themoviedb.org/3/discover/tv?api_key=2d7f5ba449370c217df98de84358761d&with_genres=37";

const SEARCH_API_TV = "https://api.themoviedb.org/3/search/tv?&api_key=2d7f5ba449370c217df98de84358761d&query="

function Seriale() {
  const [ seriale, setSeriale ] = useState([]);
  const [ searchTermTV, setSearchTermTV ] = useState('');

  var obiectGen = document.getElementById('textNode')
  
  useEffect(async () => {
    getSeriale(FEATURED_API_TV);
  }, [])

  const getSeriale = (API) => {
    fetch(API).then((res) => res.json()).then((data) => {
      console.log(data);
      setSeriale(data.results);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTermTV) {
      getSeriale(SEARCH_API_TV+searchTermTV);
      setSearchTermTV('');
      obiectGen.innerText = `Rezultatele pentru: ${searchTermTV.toUpperCase()}`;
    }
  }

  const handleOnChange = (e) => {
    setSearchTermTV(e.target.value);
  }

  const getFilmeActiuneSiAventura = () => {
    getSeriale(API_ACTIUNEsiAVENTURA);
    obiectGen.innerText = "Seriale de actiune si aventura";
  }

  const getFilmeAnimatie = () => {
    getSeriale(API_ANIMATIE);
    obiectGen.innerText = "Seriale de animatie";
  }

  const getFilmeComedie = () => {
    getSeriale(API_COMEDIE);
    obiectGen.innerText = "Seriale de comedie";
  }

  const getFilmeCrima = () => {
    getSeriale(API_CRIMA);
    obiectGen.innerText = "Seriale cu crima";
  }

  const getFilmeDocumentar = () => {
    getSeriale(API_DOCUMENTAR);
    obiectGen.innerText = "Seriale documentar";
  }

  const getFilmeDrama = () => {
    getSeriale(API_DRAMA);
    obiectGen.innerText = "Seriale de drama";
  }

  const getFilmeFamilie = () => {
    getSeriale(API_FAMILIE);
    obiectGen.innerText = "Seriale pentru intreaga familie";
  }

  const getFilmeCopii = () => {
    getSeriale(API_COPII);
    obiectGen.innerText = "Seriale destinate copiilor";
  }

  const getFilmeMister = () => {
    getSeriale(API_MISTER);
    obiectGen.innerText = "Seriale de mister";
  }

  const getFilmeStiri = () => {
    getSeriale(API_STIRI);
    obiectGen.innerText = "Seriale - Stiri";
  }

  const getFilmeReality = () => {
    getSeriale(API_REALITY);
    obiectGen.innerText = "Seriale tip reality";
  }

  const getFilmeSFsiFantasy = () => {
    getSeriale(API_SFsiFANTASY);
    obiectGen.innerText = "Seriale SF si fantasy";
  }

  const getFilmeTelenovela = () => {
    getSeriale(API_TELENOVELA);
    obiectGen.innerText = "Seriale tip telenovela";
  }

  const getFilmeTalkShow = () => {
    getSeriale(API_TALKSHOW);
    obiectGen.innerText = "Seriale - talkshow";
  }

  const getFilmeRazboiSiPolitica = () => {
    getSeriale(API_RAZBOIsiPOLITICA);
    obiectGen.innerText = "Seriale cu razboi si politica";
  }

  const getFilmeWestern = () => {
    getSeriale(API_WESTERN);
    obiectGen.innerText = "Seriale western";
  }

  return (
    <>
      <Navbar></Navbar>
      <header style = {{marginTop: 70}}>
        <h5 className = 'textFilme'>SERIALE</h5>
        <h3 className = 'textRecomandari'>Recomandarile saptamanii</h3>
        <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Jean-Luc Godard" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Cinema is the most beautiful fraud in the world" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="search"   
            placeholder = 'cauta serial...'
            value={searchTermTV}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className = 'container-butoane'>
        <div style = {{paddingTop: '25px'}} class="btn-group1" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" onClick = {getFilmeActiuneSiAventura} class="btn-check1" id="btncheck1" autocomplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck1">Actiune si Aventura</label>

          <input type="checkbox" onClick = {getFilmeAnimatie} class="btn-check2" id="btncheck2" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck2">Animatie</label>

          <input type="checkbox" onClick = {getFilmeComedie} class="btn-check3" id="btncheck3" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck3">Comedie</label>

          <input type="checkbox" onClick = {getFilmeCrima} class="btn-check4" id="btncheck4" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck4">Crima</label>

          <input type="checkbox" onClick = {getFilmeDocumentar} class="btn-check5" id="btncheck5" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck5">Documentar</label>

          <input type="checkbox" onClick = {getFilmeDrama} class="btn-check6" id="btncheck6" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck6">Drama</label>

          <input type="checkbox" onClick = {getFilmeFamilie} class="btn-check7" id="btncheck7" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck7">Familie</label>

          <input type="checkbox" onClick = {getFilmeCopii} class="btn-check8" id="btncheck8" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck8">Copii</label>

          <input type="checkbox" onClick = {getFilmeMister} class="btn-check9" id="btncheck9" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck9">Mister</label>
        </div>

        <div style = {{paddingBottom: '20px'}} class="btn-group2" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" onClick = {getFilmeStiri} class="btn-check10" id="btncheck10" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck10">Stiri</label>

          <input type="checkbox" onClick = {getFilmeReality} class="btn-check11" id="btncheck11" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck11">Reality</label>

          <input type="checkbox" onClick = {getFilmeSFsiFantasy} class="btn-check12" id="btncheck12" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck12">SF si Fantasy</label>

          <input type="checkbox" onClick = {getFilmeTelenovela} class="btn-check13" id="btncheck13" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck13">Telenovela</label>

          <input type="checkbox" onClick = {getFilmeTalkShow} class="btn-check14" id="btncheck14" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck14">Talk Show</label>

          <input type="checkbox" onClick = {getFilmeRazboiSiPolitica} class="btn-check15" id="btncheck15" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck15">Razboi si Politica</label>

          <input type="checkbox" onClick = {getFilmeWestern} class="btn-check16" id="btncheck16" autoComplete="off"></input>
          <label class="btn btn-outline-primary" for="btncheck16">Western</label>
        </div>
      </div>

      <div className = "about-section-2" style = {{paddingTop: '25px', paddingBottom: '10px'}}>
          <p id = 'textNode'></p>
      </div>

      <div style = {{paddingBottom: '10px'}} className="movie-container">
        
        {seriale.length > 0 ? seriale.map(serial => (
          <Serial key={serial.id} {...serial}></Serial>
        )) : (
          <h2 style = {{color: '#c4c4c4', marginTop: '20px'}} className="no-movies">
            <AiOutlineAlert style = {{width: '40px', height: '40px', marginTop: '-5px'}}></AiOutlineAlert> Ups... Nu exista niciun serial cu aceasta denumire <br /><br />
            <i style = {{fontSize: '19px', color: 'gray'}}>Iti recomandam sa: <br />
              <li>Verifici inca o data numele introdus</li>
              <li>Sa verifici daca numele cautat este film sau serial</li>
              <li>In cazul in care este film, te invitam pe pagina de alaturi</li><br />
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

export default Seriale;

// SURSA: https://www.youtube.com/watch?v=sZ0bZGfg_m4&t=1757s
