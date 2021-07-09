import React from 'react'
import Navbar from './Navbar'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import FilmeImg from '../images/filme.jpg'
import SerialeImg from '../images/seriale.jpg'
import ListaImg from '../images/listaPersonalizata.jpg'
import HomeImg from '../images/home.jpg'
import NoutatiImg from '../images/noutati.jpg'
import ContactImg from '../images/contact.jpg'
import RecomandariImg from '../images/recomandari.jpg'
import ActorsImg from '../images/actors.jpg'
import ProfilImg from '../images/profile.jpg'
import { BsChatQuote } from "react-icons/bs"
import { FcVip } from "react-icons/fc"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'
import { FcRules } from "react-icons/fc"
import emailjs from 'emailjs-com'
import StarRating from '../Componente mici (Film + Serial)/StarRating'

const Ajutor = () => {
    var obiectGen = document.getElementById('textNode')
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_pbrco1z', e.target, 'user_EttyRsAEJCDQuEXVU7dFJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        obiectGen.innerText = 'Mesajul a fost trimis! Va multumim!'
    }

    return (
        <div>
            <Navbar></Navbar>
            {/* One of the biggest defects in life is the inability to ask for help. */}
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Ajutor</h3>
            <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Robert Kiyosaki" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"One of the biggest defects in life is the inability to ask for help" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <div style = {{paddingLeft: '170px', backgroundColor: '#22254b', paddingTop: '50px'}}>
                <div class="card-group" style = {{width: '1200px', backgroundColor: '#22254b'}}>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {HomeImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-primary">HOME</button></h5>
                        <p class="card-text">Aceasta este prima pagina a platformei, acolo unde veti gasi informatii si noutati legate de lumea cinematografiei, dar si diverse informatii legate de portal.</p>
                        <p class="card-text">Componente: <i>News Feed, Slider, Info, Intrebati frecvente, Youtube Video</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/home'>Home</Link></small>
                        </div>
                    </div>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {RecomandariImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-warning">Recomandari</button></h5>
                        <p class="card-text">Aceasta pagina este destinata cautarii productiilor similare celor pe care utilizatorul le urmareste de obicei.</p>
                        <p class="card-text">ATENTIE! Aceasta pagina este de tipul <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></p>
                        <p class="card-text">Componente: <i>Filme, Seriale, Productii Similare</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/recomandari'>Recomandari</Link></small>
                        </div>
                    </div>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {ListaImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-secondary">Lista Personalizata</button></h5>
                        <p class="card-text">Aceasta pagina este destinata crearii listelor custom. Odata deschis meniul exista explicatii amanuntite despre cum se foloseste sistemul.</p>
                        <p class="card-text">ATENTIE! Aceasta pagina este de tipul <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></p>
                        <p class="card-text">Componente: <i>De vazut, Vazute, Adauga</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/lista-personalizata'>Lista Personalizata</Link></small>
                        </div>
                    </div>
                </div>
                <div class="card-group" style = {{width: '1200px', backgroundColor: '#22254b', paddingTop: '30px'}}>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {FilmeImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-danger">Filme</button></h5>
                        <p class="card-text">Acest meniu este destinat utilizatorilor care vor sa caute informatii despre diverse filme. De asemenea, utilizatorul va putea acorda note productiilor.</p>
                        <p class="card-text">Componente: <i>Poster, Descriere, Data de lansare, Limba, Rating, Nota proprie</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/filme'>Filme</Link></small>
                        </div>
                    </div>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {SerialeImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-success">Seriale</button></h5>
                        <p class="card-text">Acest meniu este destinat utilizatorilor care vor sa caute informatii despre diverse seriale. De asemenea, utilizatorul va putea acorda note productiilor.</p>
                        <p class="card-text">Componente: <i>Poster, Descriere, Data de lansare, Limba, Rating, Nota proprie</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/seriale'>Seriale</Link></small>
                        </div>
                    </div>
                    <div class="card">
                        <div className = 'ImgDiv'>
                            <img src = {ContactImg} class="card-img-top" className = 'ImgForZoom'></img>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-info">Contact</button></h5>
                        <p class="card-text">Aceasta pagina reprezinta modul de legatura al utilizatorului cu echipa tehnica din spatele portalului CINEMATRIX. In partea de jos a paginii exista sectiunea About.</p>
                        <p class="card-text">Componente: <i>Formular de contact, Map, Date de contact, Informatii, About</i></p>
                        </div>
                        <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/contact'>Contact</Link></small>
                        </div>
                    </div>
                </div>
                <div class="card" style = {{width: '25rem', marginTop: '30px'}}>
                    <div className = 'ImgDiv'>
                        <img src = {NoutatiImg} class="card-img-top" className = 'ImgForZoom'></img>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-dark">Noutati</button></h5>
                        <p class="card-text">Aceasta pagina este destinata ultimelor stiri si noutati din lumea filmului. De asemenea, in partea de mijloc, exista o parte creata special pentru trailerele celor mai noi productii, iar in partea de jos sunt prezentati unii din cei mai buni actori contemporani. </p>
                        <p class="card-text">Componente: <i>Card, Stiri, Trailere, Actori</i></p>
                    </div>
                    <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/noutati'>Noutati</Link></small>
                    </div>
                </div>
                <div class="card" style = {{width: '25rem', marginLeft: '400px', marginTop: '-550px'}}>
                    <div className = 'ImgDiv'>
                        <img style = {{height: '225px'}} src = {ActorsImg} class="card-img-top" className = 'ImgForZoom'></img>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-warning">Actori</button></h5>
                        <p class="card-text">Aceasta pagina este destinata celor mai importante personaje din lumea filmului, actorii. In aceasta pagina exista date preluate dintr-un API, referitoare la fiecare actor care participa la o anumita productie. Subpagina principala ofera informatii cu privire la modul de folosire.</p>
                        <p class="card-text">Componente: <i>CardActors, Informatii, Poza de Profil</i></p>
                    </div>
                    <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/actori'>Actori</Link></small>
                    </div>
                </div>
                <div class="card" style = {{width: '25rem', marginLeft: '800px', marginTop: '-550px'}}>
                    <div className = 'ImgDiv'>
                        <img style = {{height: '225px'}} src = {ProfilImg} class="card-img-top" className = 'ImgForZoom'></img>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Despre pagina <button type="button" class="btn btn-outline-danger">Profil</button></h5>
                        <p class="card-text">Aceasta este o pagina dinamica, care se schimba în functie de tipul de utilizator. Daca este in modul trecator, utilizatorul va putea vedea informatii cu ajutorul carora sa se inregistreze, iar daca este membru, va putea sa isi vada informatiile cu care este logat.</p>
                        <p class="card-text">Componente: <i>Informatii profil</i></p>
                    </div>
                    <div class="card-footer" style = {{backgroundColor: 'rgb(209, 209, 209)'}}>
                        <small class="text-muted">Link: <Link to = '/profil-mare'>Profil</Link></small>
                    </div>
                </div>
            </div>
            
            <div style = {{backgroundColor: '#22254b', paddingTop: '40px'}}>

            </div>

            <div style = {{backgroundColor: '#22254b', paddingLeft: '420px', paddingRight: '400px', paddingBottom: '40px', marginBottom: '-15px'}}>
                <form onSubmit = {sendEmail}>
                    <h4 style = {{color: 'white', marginTop: '-20px', fontFamily: 'Poppins'}}>Lasa-ne review-ul tau!</h4>
                    {userJSON ? 
                        <p style = {{color: 'gray', fontFamily: 'Poppins'}}><b style = {{color: 'green'}}>{userJSONParsed.nume}</b>, dupa ce utilizezi platforma noastra, iti asteptam parerea intr-un mesaj care va ajunge direct la administratorul site-ului. Iti multumim ca esti aici!</p>
                    : 
                        <p style = {{color: 'gray', fontFamily: 'Poppins'}}><b style = {{color: 'green'}}>Trecatorule</b>, dupa ce utilizezi platforma noastra, iti asteptam parerea intr-un mesaj care va ajunge direct la administratorul site-ului. Iti multumim ca esti aici!</p>
                    }
                    <div style = {{border: '1px solid white', padding: '20px', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}>
                        <div class="form-floating mb-3">
                            <input style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="email" name = 'email' class="form-control" id="floatingInput" placeholder="name@example.com" required></input>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="text" name = 'text' class="form-control" id="floatingText" placeholder="Text" required></input>
                            <label for="floatingText">Review</label>
                        </div>
                        {localStorage.getItem('jwt') ? 
                        <p style = {{color: 'white', marginTop: '10px', marginBottom: '-10px'}}>Cate stele meritam? :)<StarRating></StarRating></p>
                        : ''}
                        <div>
                            <input style = {{marginLeft: '0px', marginTop: '20px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)', backgroundColor: '#0275d8'}} type="submit" className = 'btn btn-info' value = 'Trimite'/>
                        </div>
                        <div>
                            <p style = {{fontSize: '17px', marginTop: '10px', marginBottom: '-10px'}} id = 'textNode'></p>
                        </div>
                    </div>
                </form>
            </div>
            
            <div style = {{paddingBottom: '10px'}} className = "about-section-2">
                <p style = {{fontFamily: 'Poppins'}}>Pentru a afla <b>termenii si conditiile</b> folosirii site-ului, te invitam sa apesi pe iconita <FcRules style = {{width: '25px', height: '25px', marginTop: '-2px'}}></FcRules> din meniu.</p>
                <p style = {{fontFamily: 'Poppins'}}>In cazul in care doresti sa iesi din cont sau sa revii la pagina de Login, te invitam sa apesi pe butonul de <b>LOGOUT</b> din coltul din dreapta sus.</p>
                <p style = {{fontFamily: 'Poppins'}}>Pentru orice alta informatie sau nelamurire iti stam la dispozitie prin meniul <b>CONTACT</b>.</p>
            </div>

            <ScrollToTop></ScrollToTop>
            
            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
    )
}

export default Ajutor
