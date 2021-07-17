import React, { useState, useEffect } from 'react'
import { RiMovieLine } from 'react-icons/ri'
import Modal from 'react-modal'
import ModalSimilarMovies from './ModalSimilarMovies'
import { AiOutlineAlert } from "react-icons/ai"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

Modal.setAppElement('#root')
const FilmRecomandari = ({ title, poster_path, backdrop_path, id }) => {

    const [ filme, setMovies ] = useState([]);
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const SIMILAR_API = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=2d7f5ba449370c217df98de84358761d`

    useEffect(async () => {
        getMovies(SIMILAR_API);
      }, [])
    
    const getMovies = (API) => {
        fetch(API).then((res) => res.json()).then((data) => {
          console.log(data);
          setMovies(data.results);
        })
    }

    return (
        <div style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}} className='movie-recomandari'>
            <div className="movie-header" style = {{position: 'relative'}}>
                <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'} alt={title}/>
                <button style = {{position: 'absolute', top: 2, left: 5, fontFamily: 'poppins', marginLeft: '110px'}} onClick = {() => setmodalIsOpen(true)}><RiMovieLine className = 'FaThumbsUp'></RiMovieLine></button>
                <div className="movie-info-recomandari">
                    <h3 style = {{fontSize: 12, color: 'rgb(1, 0, 44)'}}>{title}</h3>
                </div>
            </div>

            <Modal closeTimeoutMS={400} className = 'scroll' isOpen = {modalIsOpen} onRequestClose = {() => setmodalIsOpen(false)} style = {{content: {marginTop: '30px', width: '1500px', height: '490px', position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(2, 117, 216, 0.5)', color: 'white', border: '1px solid white', overflowX: 'scroll', overflowY: 'hidden'}, overlay: {marginTop: '30px', backgroundImage: `url(${IMG_API + backdrop_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}}>
            <h4 style = {{marginLeft: '10px', marginTop: '5px', fontWeight: 'lighter'}}>Daca ti-a placut filmul <span style = {{color: 'black'}} class="badge bg-dark text-white">{title}</span> incearca si...</h4>  
            <div className="similarMovies">          
                {filme.length > 0 ? filme.map(film => (
                    <ModalSimilarMovies key={film.id} {...film}></ModalSimilarMovies>
                )) : (
                    <h2 style = {{color: 'black', marginTop: '180px', marginLeft: '250px'}} className="no-movies">
                        <AiOutlineAlert style = {{width: '40px', height: '40px', marginTop: '-5px'}}></AiOutlineAlert> Ups... Nu exista momentan nicio recomadare pentru acest film
                        <p style = {{marginTop: '5px', fontSize: '25px', marginLeft: '430px'}}>Keep trying!</p>
                        <p style = {{fontWeight: 'lighter', fontStyle: 'italic', backgroundColor: 'transparent', color: 'white', marginBottom: '-1px', marginTop: '10px', marginLeft: '120px', fontSize: '20px'}} class="card-text">Daca nu te descurci, nu uita sa apelezi la meniul <button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button> din partea de sus a paginii</p>
                    </h2>
                )}

            </div>
            </Modal>

            <ScrollToTop></ScrollToTop>
        </div>
    )
}

export default FilmRecomandari
