import React, { useState, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { SiThemoviedatabase } from 'react-icons/si'
import { FaRegWindowClose } from 'react-icons/fa'
import { FaRegListAlt } from 'react-icons/fa'
import { FaLanguage } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { RiEmotionSadLine } from 'react-icons/ri'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { ImYoutube2 } from 'react-icons/im'
import ReactPlayer from 'react-player'
import { RiUserStarLine } from 'react-icons/ri'

const IMG_API_TV = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const Serial = ({ name, poster_path, overview, vote_average, first_air_date, original_language, genre_ids, id, backdrop_path, vote_count }) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [ videos2, setVideos ] = useState('')
    const [ actors, setActors ] = useState([])

    const VIDEO_API = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=2d7f5ba449370c217df98de84358761d&language=en-US`
    const ACTORS_API = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=2d7f5ba449370c217df98de84358761d`

    useEffect(async () => {
        getVideos(VIDEO_API);
      }, [])
    
    const getVideos = (API) => {
        fetch(API).then((res) => res.json()).then((data) => {
          console.log(data.results[0]);
          setVideos(data.results[0]);
        })
    }

    useEffect(async () => {
        getActors(ACTORS_API);
    }, [])
    
    const getActors = (API) => {
        fetch(API).then((res) => res.json()).then((data) => {
          console.log(data.cast[0])
          setActors(data.cast[0]);
        })
    }

    return (
        <div className='movie'>
            <div className="movie-header" style = {{position: 'relative'}}>

                <div style = {{cursor: 'auto', height: '370px', border: '1px solid white'}} class="card-new-2">
                    <img src={poster_path ? (IMG_API_TV + poster_path) : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'} alt={name}/>
                    <div class="descriptions">
                    <h5 style = {{color: 'white', float: 'left', position: 'absolute', top: 5, left: 5, backgroundColor: '#22254b', border: '1px solid white', borderRadius: 5, fontFamily: 'poppins'}}>{original_language.toUpperCase()}
                    </h5>
                    <button data-toggle="tooltip" data-placement="top" title="Mai multe info" style = {{position: 'absolute', top: 5, left: 5, fontFamily: 'poppins', marginLeft: '200px'}} onClick = {() => setmodalIsOpen(true)}><FaInfoCircle className = 'FaInfo'></FaInfoCircle></button>
                    <h1 style = {{marginTop: '20px'}}>Despre serial: </h1>
                    <p className = 'scroll' style = {{overflow: 'scroll', maxHeight: '220px'}}>
                        {overview}              
                    </p>
                    <h4 style = {{color: 'gray', marginTop: '20px', fontSize: '15px', color: 'red'}}>Data de lansare: {first_air_date}</h4>
                    </div>
                </div>
                
                <div className="movie-info">
                    <h3 style = {{fontSize: 20, color: 'rgb(1, 0, 44)'}}>{name}</h3>
                    <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>

            </div>

            <Modal closeTimeoutMS={400} isOpen = {modalIsOpen} onRequestClose = {() => setmodalIsOpen(true)} style = {{content: {marginTop: '30px', width: '800px', height: '500px', position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(2, 117, 216, 0.7)', color: 'white', border: '1px solid white', boxShadow: '0px 4px 7px rgba(0,0,0,.9)', overflow: 'visible'}, overlay: {marginTop: '30px', backgroundImage: `url(${backdrop_path ? (IMG_API_TV + backdrop_path) : 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}}>
                <img className = 'imgModal' style = {{maxWidth: '280px', marginTop: '0px', float: 'left', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} src={poster_path ? (IMG_API_TV + poster_path) : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80'} alt={name}/>
                <h4 style = {{textAlign: 'center', fontFamily: 'poppins', marginTop: '10px', fontWeight: 'bold', backgroundColor: 'rgb(0,0,0,0.7)', marginLeft: '310px'}}><FaThumbsDown></FaThumbsDown> {name} <FaThumbsUp></FaThumbsUp></h4>
                <p className = 'scroll' style = {{float: 'right', maxWidth: '440px', maxHeight: '170px', overflowY: 'scroll', marginTop: '10px', marginBottom: '15px'}}><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{overview}</i></p>
                <p style = {{fontFamily: 'poppins', marginLeft: '320px', fontWeight: 'bold'}}><FaRegListAlt className = 'FaList'></FaRegListAlt> Gen: {genre_ids.includes(10759) ? 'Actiune si Aventura' : ''}  {genre_ids.includes(16) ? 'Animatie' : ''} {genre_ids.includes(35) ? 'Comedie' : ''} {genre_ids.includes(80) ? 'Crima' : ''} {genre_ids.includes(99) ? 'Documentar' : ''} {genre_ids.includes(18) ? 'Drama' : ''} {genre_ids.includes(10751) ? 'Familie' : ''} {genre_ids.includes(10762) ? 'Copii' : ''} {genre_ids.includes(9648) ? 'Mister' : ''} {genre_ids.includes(10763) ? 'Stiri' : ''} {genre_ids.includes(10764) ? 'Reality' : ''} {genre_ids.includes(10765) ? 'SF si Fantasy' : ''} {genre_ids.includes(10766) ? 'Telenovela' : ''} {genre_ids.includes(10767) ? 'Talk Show' : ''} {genre_ids.includes(10768) ? 'Razboi si Politica' : ''} {genre_ids.includes(37) ? 'Western' : ''}</p>
                <p style = {{marginLeft: '320px', fontFamily: 'poppins', marginTop: '-10px'}}><FaLanguage className = 'FaLanguage'></FaLanguage> Limba originala: {original_language}</p>
                <p style = {{marginLeft: '320px', fontFamily: 'poppins', marginTop: '-10px'}}><FaCalendarAlt className = 'FaCalendar'></FaCalendarAlt> Data de lansare: {first_air_date}</p>
                {(
                    actors 
                ) ? <p style = {{fontFamily: 'Poppins', color: 'black', marginTop: '-5px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <RiUserStarLine style = {{width: '25px', height: '25px'}}></RiUserStarLine> Din distributie face parte: <b>{actors.name}</b></p> : 'Nu avem actori'}
                <Link style = {{marginLeft: '40px', fontSize: '13px'}} to = '/recomandari-seriale' type="button" class="btn btn-danger">Recomandari seriale</Link>
                <Link style = {{marginLeft: '10px', fontSize: '13px'}} to = '/lista-personalizata' type="button" class="btn btn-warning">Lista personalizata</Link>
                <Link style = {{marginLeft: '10px', fontSize: '13px'}} to = '/actori-seriale' type="button" class="btn btn-success">Actori</Link>
                <div style = {{position: 'absolute', bottom: '0', marginLeft: '120px', marginBottom: '2px', float: 'left'}}>
                    <p style = {{fontWeight: 'lighter'}}>Acest serial a fost votat de <b style = {{color: 'black'}}>{vote_count}</b> de oameni</p>
                </div>
                <p className={`tag-nou ${setVoteClass(vote_average)}`} style = {{fontSize: '35px', position: 'absolute', marginTop: '-10px', marginLeft: '-5px', bottom: -10}}><FaAward></FaAward> {vote_average} /</p>
                <a style = {{float: 'right', marginTop: '-20px', marginRight: '10px'}} href = {`https://www.themoviedb.org/tv/${id}`} target='_blank'><SiThemoviedatabase className = 'FaFilm'></SiThemoviedatabase></a>
                <button style = {{marginTop: '-475px', marginLeft: '780px', float: 'left'}} onClick = {() => setmodalIsOpen(false)}><FaRegWindowClose className = 'FaClose'></FaRegWindowClose></button>
                {/* <div className = 'videosYT'>
                    {(
                        videos2
                    ) ? <a href={`https://www.youtube.com/watch?v=${videos2.key}`} target='_blank'><ImYoutube2 className = 'YoutubeIcon' style = {{position: 'absolute', left: '5px', bottom: '-50px', width: '60px', height: '60px', paddingTop: '12px'}}></ImYoutube2></a> : "loading"}
                </div> */}
                <div className = 'videosYT'>
                    {(
                        videos2
                    ) ? <button onClick = {openNav}><ImYoutube2 className = 'YoutubeIcon' style = {{position: 'absolute', left: '5px', bottom: '-50px', width: '60px', height: '60px', paddingTop: '12px'}}></ImYoutube2></button> : <button onClick = {openNav}><ImYoutube2 className = 'YoutubeIcon' style = {{position: 'absolute', left: '5px', bottom: '-50px', width: '60px', height: '60px', paddingTop: '12px'}}></ImYoutube2></button>}
                </div>
                <h3 style = {{position: 'absolute', left: '70px', bottom: '-50px'}}><span style = {{color: 'black'}} class="badge bg-primary">#cinematrix</span></h3>
                <h3 style = {{position: 'absolute', left: '210px', bottom: '-50px'}}><span style = {{color: 'black'}} class="badge bg-success">#serial</span></h3>
                <h3 style = {{position: 'absolute', left: '297px', bottom: '-50px'}}><span style = {{color: 'black'}} class="badge bg-success">#{name}</span></h3>
                
                <div id="myNav" className="overlay-tv">
                    <a href="#!" className="closebtn" onClick = {closeNav}>&times;</a>

                    <div className="overlay-tv-content">
                        {(
                            videos2 
                        ) ? 
                        <>
                        <h3 style = {{marginTop: '-80px', fontFamily: 'Poppins'}}>Trailerul pentru <b style = {{color: 'green'}}>{name}</b></h3>
                        <ReactPlayer style = {{marginLeft: '170px', marginTop: '10px'}} className = 'reactPlayer1' controls = {true} width = {450} height = {300}
                        url = {`https://www.youtube.com/watch?v=${videos2.key}`}
                        ></ReactPlayer>
                        <a style = {{fontSize: '17px', fontFamily: 'Poppins', marginLeft: '-5px'}} href={`https://www.youtube.com/watch?v=${videos2.key}`} target = '_blank'>Link catre YouTube</a>
                        </> 
                        : 
                        <>
                        <RiEmotionSadLine style = {{width: '60px', height: '60px'}}></RiEmotionSadLine>
                        <h1 style = {{fontFamily: 'Poppins'}}>Ne pare rau!</h1>
                        <br />
                        <h4 style = {{fontFamily: 'Poppins', paddingLeft: '20px', paddingRight: '20px'}}>Nu exista pentru moment trailer pentru serialul <br></br> <b style = {{color: 'green'}}>{name}</b></h4>
                        </>
                        }
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Serial
