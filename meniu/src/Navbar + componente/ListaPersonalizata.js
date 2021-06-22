import React from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from '../Navbar + componente/Navbar'
import { Link } from 'react-router-dom'
import HelpImg from '../images/help.jpg'
import { GiStopSign } from "react-icons/gi"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const ListaPersonalizata = () => {
    if (localStorage.getItem('jwt')) {
    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
                <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Lista Personalizata</h3>
                <Link to = '/de-vazut' style = {{float: 'left', marginTop: '13px', marginLeft: '760px'}}>De vazut</Link>
                <Link to = '/vazute' style = {{float: 'left', marginTop: '13px', marginLeft: '20px'}}>Vazute</Link>
                <Link to = '/adauga' class='btn btn-outline-danger' style = {{float: 'left', marginTop: '8px', marginLeft: '20px'}}>+ ADAUGA</Link>
            </header>

            <div className="movie-page">
                <div className="container">
                    <div className="headerDeVazut">
                        <h1 className = 'heading' style = {{marginLeft: '-60px'}}>Bine te-am gasit in pagina <b>LISTE PERSONALIZATE</b>!</h1>
                    </div>
                    <div style = {{marginTop: '40px', marginLeft: '-15px'}}>
                        <h5 style = {{float: 'left', color: 'gray'}}>Cum functioneaza?</h5>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Apesi butonul <button class = 'btn btn-outline-danger' style = {{fontSize: '12px', marginLeft: '5px', marginRight: '5px'}}>+ ADAUGA</button> din meniul paginii curente</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; In bara de cautare introdu numele productiei cautate</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; Fiecare productie vine insotita de 2 butoane: <button className="btnLista2" style = {{marginTop: '-7px', fontSize: '10px', marginLeft: '10px'}}>Adauga la DE VAZUT</button><button className="btnLista2" style = {{marginTop: '-7px', fontSize: '10px'}}>Adauga la VAZUTE</button></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Odata apasat primul buton, productia va fi automat incadrata in pagina <i style = {{color: '#0275d8'}}>De Vazut</i></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; daca apesi pe al doilea buton, productia va fi automat incadrata in pagina <i style = {{color: '#0275d8'}}>Vazute</i></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; In dreptul fiecarei inregistrari din meniurile <i style = {{color: '#0275d8'}}>De Vazut</i> si <i style = {{color: '#0275d8'}}>Vazute</i> exista controale specifice</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; <b style = {{color: 'black'}}>Felicitari!</b> Acum poti sa iti personalizezi lista!</h6>
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

export default ListaPersonalizata
