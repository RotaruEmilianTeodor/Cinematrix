import React from 'react'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import HelpImg from '../images/help.jpg'
import { RiMovieLine } from 'react-icons/ri'
import { FaInfoCircle } from 'react-icons/fa'
import { BsChatQuote } from "react-icons/bs"
import { GiStopSign } from "react-icons/gi"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Recomandari = () => {
    if (localStorage.getItem('jwt')) {
    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Recomandari</h3>
            <Link to = '/recomandari-filme' style = {{float: 'left', marginLeft: '30px', marginTop: '13px'}}>Filme</Link>
            <Link to = '/recomandari-seriale' style = {{float: 'left', marginLeft: '15px', marginTop: '13px'}}>Seriale</Link>
            <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Rachel Morrison" style = {{float: 'left', marginLeft: 50, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Life is unpredictable, and I feel, to some extent, lighting and cinematography should be a reflection of that" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <div className="movie-page">
                <div className="container">
                    <div className="headerDeVazut">
                        <h1 className = 'heading' style = {{marginLeft: '-60px'}}>Bine te-am gasit in pagina <b>Recomandari</b>!</h1>
                    </div>
                    <div style = {{marginTop: '40px', marginLeft: '-15px'}}>
                        <h5 style = {{float: 'left', color: 'gray'}}>Cum functioneaza?</h5>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Apesi pe unul din cele 2 submeniuri de pe pagina: <i style = {{color: '#0275d8'}}>Filme</i> sau <i style = {{color: '#0275d8'}}>Seriale</i></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; In bara de cautare a subpaginii introdu numele productiei cautate</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; Fiecare productie vine insotita de o iconita <RiMovieLine style = {{marginTop: '-2px', marginLeft: '5px'}} className = 'FaThumbsUp'></RiMovieLine></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Odata apasata iconita, se va deschide un modul care va incarca productii similare celei alese de utilizator</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; In dreptul fiecarei productii exista o iconita <FaInfoCircle style = {{marginLeft: '5px', marginRight: '5px'}} className = 'FaInfo'></FaInfoCircle> care va deschide pagina productiei de pe site-ul <br></br> <i style = {{marginLeft: '-470px'}}>The Movie Database (TMDb)</i></h6>
                        <br/><br/><br></br>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; <b style = {{color: 'black'}}>Felicitari!</b> Acum poti sa te bucuri de recomandari</h6>
                    </div>
                </div>

                <div class="card" style={{backgroundColor: '#373b69', float: 'right', width: '18rem', marginTop: '-365px', marginRight: '230px', border: '1px solid black', color: 'white'}}>
                    <img class="card-img-top" src = {HelpImg} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Nu uita!</h5>
                        <p style = {{fontWeight: 'lighter', fontStyle: 'italic'}} class="card-text">Daca nu te descurci, nu uita sa apelezi la meniul <Link to = '/ajutor'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button></Link> din partea de sus a paginii</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
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

export default Recomandari
