import React, { useEffect, useState } from "react"
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from './Footer'
import { VscUnverified } from "react-icons/vsc"
import { TiInfoLargeOutline } from "react-icons/ti"
import { AiOutlineAlert } from "react-icons/ai"
import ActorFilme from "../Componente mici (Film + Serial)/ActorFilme";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d7f5ba449370c217df98de84358761d&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=2d7f5ba449370c217df98de84358761d&query="

function ActoriFilme() {
  const [ filme, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  
  useEffect(async () => {
    getMovies(FEATURED_API);
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
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <Navbar></Navbar>
      <header style = {{marginTop: 70, height: 76}}>
      <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Actori Filme</h3>
      <Link to = '/actori-filme' style = {{float: 'left', marginLeft: '30px', marginTop: '13px'}}>Filme</Link>
      <Link to = '/actori-seriale' style = {{float: 'left', marginLeft: '15px', marginTop: '13px'}}>Seriale</Link>
      <Link to = '/actori'><VscUnverified style = {{marginLeft: '12px', marginTop: '12px'}} className = 'DetailsIcon'></VscUnverified></Link>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="searchRecomandari" 
            type="search"   
            placeholder = 'cauta film...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className="movie-container-recomandari">
        
      {filme.length > 0 ? filme.map(film => (
          <ActorFilme key={film.id} {...film}></ActorFilme>
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

      <div style = {{backgroundColor: '#22254b', paddingTop: '10px'}}>

      </div>

      <div className = "about-section-2" style = {{paddingTop: '30px', paddingBottom: '20px'}}>
          <p style = {{fontFamily: 'Poppins'}}><TiInfoLargeOutline style = {{width: '30px', height: '30px', marginTop: '-3px', marginRight: '-5px'}}></TiInfoLargeOutline> Productiile de pe aceasta pagina provin din sursa The Movie Database</p>
      </div>

      <Footer></Footer>
      <SocialButtonsBar></SocialButtonsBar>
    </>
  );
}

export default ActoriFilme

