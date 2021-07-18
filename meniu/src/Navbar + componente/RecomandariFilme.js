import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from './Footer'
import FilmRecomandari from "../Componente mici (Film + Serial)/FilmRecomandari"
import { VscUnverified } from "react-icons/vsc"
import { TiInfoLargeOutline } from "react-icons/ti"
import { AiOutlineAlert } from "react-icons/ai"
import { GiStopSign } from "react-icons/gi"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d7f5ba449370c217df98de84358761d&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=2d7f5ba449370c217df98de84358761d&query="

function RecomandariFilme() {
  const [ filme, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  const userJSON = localStorage.getItem('user')
  const userJSONParsed = JSON.parse(userJSON)

  var obiectGen = document.getElementById('textNode')
  
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
      obiectGen.innerText = `Rezultatele pentru: ${searchTerm.toUpperCase()}`;
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  if (localStorage.getItem('jwt')) {
  return (
    <>
      <Navbar></Navbar>
      <header style = {{marginTop: 70, height: 76}}>
      <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Recomandari filme</h3>
      <Link to = '/recomandari-filme' style = {{float: 'left', marginLeft: '30px', marginTop: '13px'}}>Filme</Link>
      <Link to = '/recomandari-seriale' style = {{float: 'left', marginLeft: '15px', marginTop: '13px'}}>Seriale</Link>
      <Link to = '/recomandari'><VscUnverified style = {{marginLeft: '12px', marginTop: '12px'}} className = 'DetailsIcon'></VscUnverified></Link>
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

      <div style = {{backgroundColor: '#22254b', paddingTop: '20px', paddingBottom: '20px'}}>
          <h4 style = {{color: 'white', fontFamily: 'Poppins', fontWeight: 'lighter'}}>Buna, <b style = {{color: 'greenyellow'}}>{userJSONParsed.nume}</b>! Pentru ce film iti doresti recomandari astazi?</h4>
      </div>

      <div className = "about-section-2" style = {{paddingTop: '16px', paddingBottom: '1px'}}>
          <p style = {{fontSize: '18px'}} id = 'textNode'></p>
      </div>

      <div className="movie-container-recomandari">
        
      {filme.length > 0 ? filme.map(film => (
          <FilmRecomandari key={film.id} {...film}></FilmRecomandari>
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
  )
  } else {
      return (
        <>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
                <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Recomandari</h3>
            </header>
            
            <div className="movie-page">
                <GiStopSign style = {{width: '150px', height: '150px', color: 'red'}}></GiStopSign>
                <h2 style = {{color: 'white', fontFamily: 'Poppins', marginTop: '20px', marginBottom: '20px'}}>Acces restrictionat <b>trecatorilor!</b></h2>
                <p style = {{color: 'white', fontFamily: 'Poppins'}}>Din pacate aceasta pagina nu este inclusa in pachetul de beneficii pe care il detii.</p>
                <p style = {{color: 'white', fontFamily: 'Poppins'}}>Pentru a te putea bucura de pagina Recomandari, va trebui sa intri in modul <b>Membru</b>. Pentru a putea face acest lucru te rugam urmeaza instructiunile de mai jos:</p>
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

export default RecomandariFilme
