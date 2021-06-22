import React from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from './Navbar'
import ReactPlayer from 'react-player'
import HollywoodImg from '../images/Hollywood.jpg'
import CinemaImg from '../images/cinema.jpg'
import NetflixImg from '../images/netflix.jpg'
import NewsImg from '../images/news.jpg'
import Me from '../images/Me.jpg'
import RecomandariImg from '../images/recomandari.jpg'
import ListaImg from '../images/listaPersonalizata.jpg'
import MovieAndSeries from '../images/MovieAndSeries.jpg'
import { Link } from 'react-router-dom'
import { BsNewspaper } from "react-icons/bs"
import { BsTv } from "react-icons/bs"
import { BsCameraVideo } from "react-icons/bs"
import { BsChatQuote } from "react-icons/bs"
import { SiImdb } from "react-icons/si"
import { SiThemoviedatabase } from "react-icons/si"
import { AiOutlineFacebook } from "react-icons/ai"
import { FiYoutube } from "react-icons/fi"
import StarRating from '../Componente mici (Film + Serial)/StarRating'
import { ImEnter } from "react-icons/im"
import { CgProfile } from "react-icons/cg"
import { FcVip } from "react-icons/fc"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Home = () => {
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Pagina principala</h3>
            <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Molly Haskell" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"There are two cinemas: the films we have actually seen and the memories we have of them" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            <article className = 'articleUtilizator'>
                <h1 className = 'h1Utilizator'>{localStorage.getItem('user') ? <p>{userJSONParsed.nume}</p> : <p style = {{fontFamily: 'Poppins'}}>Esti in modul <b>trecator</b></p>}</h1>
            </article>
            <Link to = '/profil-mare'><CgProfile style = {{width: '27px', height: '27px', marginTop: '11px', right: '40px' , position: 'absolute', color: 'hsl(339, 79%, 51%)'}}></CgProfile></Link>
            </header>

            <div style = {{paddingBottom: '10px'}} className = 'homeContainer'>
                <div className="news">
                    <span>News Feed</span>
                    <ul>
                    <li><a href="https://www.filmnow.ro/stiri/primul-trailer-pentru-west-side-story-al-lui-steven-spielberg-unul-dintre-cele-mai-asteptate-filme-ale-anului-58386" target='_blank'>PRIMUL TRAILER PENTRU „WEST SIDE STORY”...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/momentele-surprinzatoare-si-controversele-care-au-marcat-gala-premiilor-oscar-2021-58363" target='_blank'>GALA PREMIILOR OSCAR 2021</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/phoebe-dynevor-actrita-din-bridgerton-a-confirmat-relatia-cu-fostul-logodnic-al-arianei-grande-cum-au-fost-suprinsi-cei-doi-58355" target='_blank'>PHOEBE DYNEVOR, ACTRIȚA DIN BRIDGERTON...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/anthony-hopkins-cel-mai-in-varsta-star-premiat-cu-oscarul-pentru-cel-mai-bun-actor-chiar-nu-ma-asteptam-sa-castig-58348" target='_blank'>ANTHONY HOPKINS, CEL MAI ÎN VÂRSTĂ STAR PREMIAT...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/fotografii-rare-cu-jack-depp-fiul-lui-johnny-depp-tanarul-se-apropie-de-imaginea-tatalui-sau-in-anii-90-58313" target='_blank'>FOTOGRAFII RARE CU JACK DEPP, FIUL LUI JOHNNY DEPP...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/brie-larson-actrita-care-ar-putea-trece-drept-model-cum-a-fost-surprinsa-aceasta-pe-plajele-din-hawaii-58148" target='_blank'>BRIE LARSON, ACTRIȚA CARE AR PUTEA TRECE DREPT MODEL...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/matthew-mcconaughey-vrea-sa-fie-guvernatorul-texasului-sondajele-il-arata-favorit-58109" target='_blank'>MATTHEW MCCONAUGHEY VREA SĂ FIE GUVERNATORUL...</a></li>
                    <li><a href="https://www.filmnow.ro/stiri/game-of-thrones-le-a-schimbat-viata-top-10-cei-mai-bogati-actori-din-got-58047" target='_blank'>TOP 10 CEI MAI BOGAȚI ACTORI DIN GOT...</a></li>
                    </ul>
                </div>
            </div>

            <div className="about-section-2">
                <h1 style = {{fontWeight: 'lighter'}}>Bine te-am gasit pe platforma CINEMATRIX! <ImEnter style = {{marginTop: '-4px'}}></ImEnter></h1>
            </div>
            
            <div className = 'homeContainer'>
                <div style = {{width: '830px', marginLeft: '70px', border: '2px solid white', borderRadius: '5px'}} id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    <img style = {{height: '500px'}} className="d-block w-100" src = {HollywoodImg}
                        alt="First slide"></img>
                        <div className="carousel-caption">
                        <h3 className="h3-responsive">Hollywood</h3>
                        <p style = {{fontWeight: 'lighter'}}>Hollywood este un cartier al orașului Los Angeles, California din Statele Unite și principalul centru al industriei cinematografice și de televiziune americane (din 1911)</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img style = {{height: '500px'}} className="d-block w-100" src = {CinemaImg}
                        alt="Second slide"></img>
                        <div className="carousel-caption">
                        <h3 className="h3-responsive">Cinema</h3>
                        <p style = {{fontWeight: 'lighter'}}>Ace Hotel Downtown Los Angeles, Los Angeles, United States</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img style = {{height: '500px'}} className="d-block w-100" src = {NetflixImg}
                        alt="Third slide"></img>
                        <div className="carousel-caption">
                        <h3 className="h3-responsive">Netflix</h3>
                        <p style = {{fontWeight: 'lighter'}}>Netflix, Inc. este o companie americană, cu sediul central în Los Gatos (California), venitul primar al companiei bazându-se pe abonamentele de streaming video</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>

            <div className="card" style={{backgroundColor: '#373b69', float: 'right', width: '510px', height: '505px', marginTop: '-505px', marginRight: '65px', border: '1px solid black', color: 'white'}}>
                    <img className = 'NewsImgclassName' style = {{width: '380px', height: '250px', marginLeft: '65px', marginTop: '20px'}} className="card-img-top" src = {NewsImg} alt="Card image cap"></img>
                    <div style = {{marginTop: '-15px'}} className="card-body">
                        <h5 className="card-title">Noutati</h5>
                        <p className="card-text">GALA OSCAR 2021:</p>
                        <p style = {{fontWeight: 'lighter', fontStyle: 'italic', marginTop: '-10px'}}>Cel mai bun film - Nomadland <br/> Cel mai bun film străin: "Another Round" - Danemarca <br/> Cel mai bun film de animație - "Soul" <br/></p>
                        <p style = {{marginTop: '-15px', marginBottom: '-5px'}}>Pentru mai multe noutati, va invitam pe pagina <Link to = '/noutati'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" className="btn btn-outline-light">Noutati</button></Link></p>
                        <hr className = 'hrclassName'/>
                        <h6 style = {{marginTop: '-7px'}} className="text-muted"><a href="https://www.filmnow.ro/stiri/oscar-2021-lista-castigatorilor-58261" target='_blank'>Sursa</a></h6>
                    </div>
            </div>

            <div style = {{backgroundColor: '#22254b', paddingTop: '20px', color: 'white', marginLeft: '-245px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div style = {{border: '1px solid black'}} className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src = {Me}></img>
                            </div>
                            <div className="team-content">
                                <h5 style = {{color: 'black', fontFamily: "Poppins"}} className="name">Rotaru Emilian-Teodor</h5>
                                <h4 className="title">Administrator</h4>
                            </div>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/EmilianTeo/" target='_blank' className="fa fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="https://twitter.com/EmilianTeodor" target='_blank' className="fa fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="https://www.youtube.com/channel/UCatqZnUMMSwzVTZ8xhSJt-w" target='_blank' className="fa fa-youtube" aria-hidden="true"></a></li>
                                <li><a href="https://www.linkedin.com/in/emilian-teodor-rotaru-550963197/" target='_blank' className="fa fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style = {{float: 'right', marginTop: '-300px', marginRight: '1060px'}}>
                <BsNewspaper className = 'BsNews'></BsNewspaper>
            </div>

            <div style = {{float: 'right', marginTop: '-200px', marginRight: '1060px'}}>
                <BsTv className = 'BsNews'></BsTv>
            </div>

            <div style = {{float: 'right', marginTop: '-100px', marginRight: '1060px'}}>
                <BsCameraVideo className = 'BsNews'></BsCameraVideo>
            </div>

            <div style = {{float: 'right', marginTop: '-340px', marginRight: '430px'}}>
                <h6 style = {{color: 'white', fontFamily: "Poppins"}}>Ce va ofera portalul nostru? <span className="badge bg-secondary">New</span></h6>
            </div>

            <div style = {{float: 'right', marginTop: '-310px', marginRight: '710px',}}>
                <div className="card" style = {{width: '18rem', backgroundColor: 'white'}}>
                        <img style = {{width: '288px', marginLeft: '-1px', marginTop: '-1px'}} src = {RecomandariImg} className="card-img-top"></img>
                        <div className="card-body">
                            <h5 style = {{marginTop: '-10px'}} className="card-title">Pagina Recomandari <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></h5>
                            <div style = {{marginLeft: '48px'}} className="btn-framed">
                                <span className="noselect"><Link className = 'linkDisabled' to = '/recomandari'>Link</Link></span>
                            </div>
                        </div>
                </div>
            </div>

            <div style = {{float: 'right', marginTop: '-310px', marginRight: '390px',}}>
                <div className="card" style = {{width: '18rem', backgroundColor: 'white'}}>
                        <img style = {{width: '288px', marginLeft: '-1px', marginTop: '-1px'}} src = {ListaImg} className="card-img-top"></img>
                        <div className="card-body">
                            <h5 style = {{marginTop: '-10px'}} className="card-title">Lista Personalizata <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></h5>
                            <div style = {{marginLeft: '48px'}} className="btn-framed">
                                <span className="noselect"><Link className = 'linkDisabled' to = '/lista-personalizata'>Link</Link></span>
                            </div>
                        </div>
                </div>
            </div>

            <div style = {{float: 'right', marginTop: '-310px', marginRight: '70px'}}>
                <div className="card" style = {{width: '18rem', backgroundColor: 'white'}}>
                        <img style = {{width: '288px', marginLeft: '-1px', marginTop: '-1px'}} src = {MovieAndSeries} className="card-img-top"></img>
                        <div className="card-body">
                            <h5 style = {{marginTop: '-10px'}} className="card-title">Filme, seriale si actori</h5>
                            <div style = {{marginLeft: '48px'}} className="btn-framed">
                                <span className="noselect"><Link className = 'linkDisabled' to = '/filme'>Link</Link></span>
                            </div>
                        </div>
                </div>
            </div>

            <div style = {{backgroundColor: '#22254b', paddingTop: '20px'}}>

            </div>
            
            <div className="about-section-2" style = {{paddingBottom: '2px', paddingTop: '20px'}}>
                <h6 style = {{color: 'white', fontFamily: 'Poppins', marginTop: '-2px'}}><b>NU UITA!</b></h6>
                <p style = {{color: 'gray', fontFamily: 'Poppins'}}>Pentru informatiile cu privire la functionalitatile paginii acesteaza meniul <Link to = '/ajutor'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" className="btn btn-outline-warning">Ajutor</button></Link></p>
                <p style = {{color: 'gray', fontFamily: 'Poppins'}}>Pentru informatiile generale cu privire la portal acesteaza meniul <Link to = '/contact'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" className="btn btn-outline-danger">Contact</button></Link></p>
                <p style = {{color: 'gray', fontFamily: 'Poppins'}}>Meniurile marcate cu <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px'}}></FcVip> anunta utilizatorul ca trebuie sa fie logat pentru a benficia de functionalitatea respectiva</p>
            </div>

            <div style = {{backgroundColor: '#22254b', marginBottom: '-40px', paddingTop: '20px', overflow: 'hidden'}}>
            <h5 style = {{marginLeft: '-1100px', fontFamily: "Poppins", color: 'white'}}>Productiile mele preferate</h5>
            <h4 style = {{transform: 'rotate(-90deg)', color: 'white', marginLeft: '-1350px', marginTop: '45px', overflowY: 'hidden'}}>FILME</h4>
            <h4 style = {{transform: 'rotate(-90deg)', color: 'white', marginLeft: '70px', marginTop: '-25px', overflowY: 'hidden'}}>SERIALE</h4>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div style = {{marginTop: '1386px', marginLeft: '-330px', overflowY: 'hidden'}} className="wrapper">
                    <div className="card-new-2" style = {{cursor: 'auto'}}>
                        <img src = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'></img>
                        <div className="descriptions">
                            <h1>The Shawshank Redemption</h1>
                        <p>
                            Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates.              
                        </p>
                        <div style = {{marginTop: '-50px', justifyContent: 'space-between'}}>
                            <a href="https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0" target = '_blank'><SiImdb style = {{width: '30px', height: '30px', color: '#22254b', marginLeft: '2px'}}></SiImdb></a>
                            <a href="https://www.themoviedb.org/movie/278-the-shawshank-redemption" target = '_blank'><SiThemoviedatabase style = {{width: '32px', height: '32px', color: '#22254b', marginLeft: '25px'}}></SiThemoviedatabase></a>
                            <a href="https://www.facebook.com/ShawshankRedemptionFilm" target = '_blank'><AiOutlineFacebook style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></AiOutlineFacebook></a>
                            <a href="https://www.youtube.com/watch?v=6hB3S9bIaco" target = '_blank'><FiYoutube style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></FiYoutube></a>
                        </div>
                        <h4 style = {{color: 'gray', marginTop: '30px'}}>1994</h4>
                        </div>
                    </div>
                </div>

                <div style = {{marginTop: '1386px', marginLeft: '10px', overflowY: 'hidden'}} className="wrapper">
                    <div className="card-new-2" style = {{cursor: 'auto'}}>
                        <img src = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg'></img>
                        <div className="descriptions">
                            <h1>Shutter Island</h1>
                        <p>
                            World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.             
                        </p>
                        <div style = {{marginTop: '-27px', justifyContent: 'space-between'}}>
                            <a href="https://www.imdb.com/title/tt1130884/" target = '_blank'><SiImdb style = {{width: '30px', height: '30px', color: '#22254b', marginLeft: '2px'}}></SiImdb></a>
                            <a href="https://www.themoviedb.org/movie/11324-shutter-island" target = '_blank'><SiThemoviedatabase style = {{width: '32px', height: '32px', color: '#22254b', marginLeft: '25px'}}></SiThemoviedatabase></a>
                            <a href="https://www.facebook.com/ShutterIsland" target = '_blank'><AiOutlineFacebook style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></AiOutlineFacebook></a>
                            <a href="https://www.youtube.com/watch?v=5iaYLCiq5RM" target = '_blank'><FiYoutube style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></FiYoutube></a>
                        </div>
                        <h4 style = {{color: 'gray', marginTop: '30px'}}>2010</h4>
                        </div>
                    </div>
                </div>

                <div style = {{marginTop: '1386px', marginLeft: '380px', overflowY: 'hidden'}} className="wrapper">
                    <div className="card-new-2" style = {{cursor: 'auto'}}>
                        <img src = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'></img>
                        <div className="descriptions">
                            <h1>Breaking Bad</h1>
                        <p>
                            When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.             
                        </p>
                        <div style = {{marginTop: '-25px', justifyContent: 'space-between'}}>
                            <a href="https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0" target = '_blank'><SiImdb style = {{width: '30px', height: '30px', color: '#22254b', marginLeft: '2px'}}></SiImdb></a>
                            <a href="https://www.themoviedb.org/tv/1396-breaking-bad" target = '_blank'><SiThemoviedatabase style = {{width: '32px', height: '32px', color: '#22254b', marginLeft: '25px'}}></SiThemoviedatabase></a>
                            <a href="https://www.facebook.com/BreakingBad" target = '_blank'><AiOutlineFacebook style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></AiOutlineFacebook></a>
                            <a href="https://www.youtube.com/watch?v=HhesaQXLuRY" target = '_blank'><FiYoutube style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></FiYoutube></a>
                        </div>
                        <h4 style = {{color: 'gray', marginTop: '30px'}}>2008</h4>
                        </div>
                    </div>
                </div>

                <div style = {{marginTop: '1386px', marginLeft: '545px'}} className="wrapper-special">
                    <div className="card-new-2" style = {{cursor: 'auto'}}>
                        <img src = 'https://www.themoviedb.org/t/p/original/d5pEXITX9nfxIDg46U678payY1p.jpg'></img>
                        <div className="descriptions">
                            <h1>True Detective</h1>
                        <p>
                            An American anthology police detective series utilizing multiple timelines in which investigations seem to unearth personal and professional secrets of those involved, both within or outside the law.             
                        </p>
                        <div style = {{marginTop: '-27px', justifyContent: 'space-between'}}>
                            <a href="https://www.imdb.com/title/tt2356777/?ref_=nv_sr_srsg_0" target = '_blank'><SiImdb style = {{width: '30px', height: '30px', color: '#22254b', marginLeft: '2px'}}></SiImdb></a>
                            <a href="https://www.themoviedb.org/tv/46648-true-detective" target = '_blank'><SiThemoviedatabase style = {{width: '32px', height: '32px', color: '#22254b', marginLeft: '25px'}}></SiThemoviedatabase></a>
                            <a href="https://www.facebook.com/TrueDetective" target = '_blank'><AiOutlineFacebook style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></AiOutlineFacebook></a>
                            <a href="https://www.youtube.com/watch?v=fVQUcaO4AvE" target = '_blank'><FiYoutube style = {{width: '35px', height: '35px', color: '#22254b', marginLeft: '20px'}}></FiYoutube></a>
                        </div>
                        <h4 style = {{color: 'gray', marginTop: '30px'}}>2014</h4>
                        </div>
                    </div>
                </div>

            </div>

            <div style = {{backgroundColor: '#22254b', marginBottom: '-10px', paddingTop: '20px'}}>
                <h5 style = {{marginLeft: '-950px', fontFamily: "Poppins", color: 'white'}}>Cateva clipuri pentru cunoscatori <span style = {{color: 'black'}} className="badge bg-danger">YouTube</span></h5>
            </div>

            <div className = 'homeContainer'>
                <ReactPlayer style = {{border: '1px solid white'}} className = 'reactPlayer1' controls = {true} width = {450} height = {300}
                    url="https://youtu.be/0GAj1tsUN5I"
                ></ReactPlayer>
                <ReactPlayer style = {{border: '1px solid white'}} className = 'reactPlayer2' controls = {true} width = {450} height = {300}
                    url="https://youtu.be/8ArdvbPdt4g"
                ></ReactPlayer>
                <ReactPlayer style = {{border: '1px solid white'}} className = 'reactPlayer3' controls = {true} width = {450} height = {300}
                    url="https://youtu.be/MUS_QuK75qE"
                ></ReactPlayer>
            </div>
            <div className = 'textVideo'>
                <h5 style = {{marginLeft: 230}}>Top 5 Seriale</h5>
                <h5 style = {{marginLeft: 280}}>Top 5 Thrillere Psihologice</h5>
                <h5 style = {{marginLeft: 230}}>Top 10 Filme Animate</h5>
            </div>

            <div style = {{backgroundColor: '#22254b', marginBottom: '-10px', paddingTop: '20px'}}>
                <h6 style = {{marginLeft: '0px', fontFamily: "Poppins", color: 'white'}}>Daca ai cateva secunde, acorda-ne o nota :)</h6>
                <StarRating></StarRating>
            </div>

            <ScrollToTop></ScrollToTop>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
    )
}

export default Home
