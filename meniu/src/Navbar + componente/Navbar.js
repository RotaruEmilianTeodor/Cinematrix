import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../images/user.png'
import { VscInfo } from "react-icons/vsc"
import { AiOutlineHome } from "react-icons/ai"
import { BiMovie } from "react-icons/bi"
import { BiCameraMovie } from "react-icons/bi"
import { BsPersonBoundingBox } from "react-icons/bs"
import { FcVip } from "react-icons/fc"
import { FcRules } from "react-icons/fc"
import LogoCinematrixAlb from "../images/CinematrixLogoAlb.png"

function openNav() {
    document.getElementById("myNav2").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav2").style.height = "0%";
}

const Navbar = () => {
    const DeleteFromLocalStorage = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
    }

    return (
        <nav className = 'navbar fixed-top navbar-dark bg-primary navbar-expand-lg'>
            <Link to = '/home' className = 'navbar-brand' style = {{fontSize: '30px', fontWeight: 'bold' }}><img style = {{width: '200px', height: '40px', marginTop: '-8px'}} src = {LogoCinematrixAlb} alt="" /></Link>
            <h5 className = 'motoSite' style = {{color: 'white', fontWeight: 'lighter', marginTop: 8, marginLeft: 5, marginRight: 15}}>Pentru cinefilul din tine</h5>
            <button
                className = 'navbar-toggler'
                type = 'button'
                data-bs-toggle = 'collapse'
                data-bs-target = '#toggleMenu'
                aria-controls = 'toggleMenu'
                aria-expanded = 'true'
                aria-label = 'Toggle navigation'
            >
                <span className = 'navbar-toggler-icon'></span>
            </button>
            <div className = 'collpase navbar-collapse' id = 'toggleMenu'>
                <ul style = {{marginTop: 5}} className = 'navbar-nav mr-auto'>
                    <li className = 'navbar-item'>
                        <Link to = '/home' className = 'nav-link' style = {{color: 'black'}}>HOME <AiOutlineHome style = {{marginLeft: '-2px', marginTop: '-3px', width: '18px', height: '18px'}}></AiOutlineHome></Link>
                    </li>
                    <li>
                        <Link to = '/noutati' className = 'nav-link' style = {{color: 'black', fontWeight: 'lighter'}}>Noutati</Link>
                    </li>
                    <li>
                        <Link to = '/recomandari' className = 'nav-link' style = {{color: 'black', fontWeight: 'lighter'}}>Recomandari <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></Link>
                    </li>
                    <li>
                        <Link to = '/lista-personalizata' className = 'nav-link' style = {{color: 'black', fontWeight: 'lighter'}}>Lista Personalizata <FcVip style = {{width: '23px', height: '23px', marginTop: '-3px', marginLeft: '-3px'}}></FcVip></Link>
                    </li>
                    <li>
                        <Link to = '/filme' className = 'nav-link' style = {{color: '#00FFFF', fontWeight: 'lighter'}}>Filme <BiMovie style = {{marginLeft: '-2px', marginTop: '-3px', width: '18px', height: '18px'}}></BiMovie></Link>
                    </li>
                    <li>
                        <Link to = '/seriale' className = 'nav-link' style = {{color: '#00FF00', fontWeight: 'lighter'}}>Seriale <BiCameraMovie style = {{marginLeft: '-2px', marginTop: '-3px', width: '19px', height: '19px'}}></BiCameraMovie></Link>
                    </li>
                    <li>
                        <Link to = '/actori' className = 'nav-link' style = {{color: '#FFA500', fontWeight: 'lighter'}}>Actori <BsPersonBoundingBox style = {{marginLeft: '-2px', marginTop: '-3px', width: '15px', height: '16px'}}></BsPersonBoundingBox></Link>
                    </li>
                    <li>
                        <Link to = '/contact' className = 'nav-link' style = {{color: 'black', fontWeight: 'lighter'}}>Contact</Link>
                    </li>
                    <FcRules className = 'rulesIcon' onClick = {openNav} style = {{width: '25px', height: '25px', marginTop: '8px', marginLeft: '10px', cursor: 'pointer'}}></FcRules>
                    <h2 style = {{marginLeft: '10px', marginTop: '-4px', color: 'white', fontWeight: 'lighter'}}>|</h2>
                    <li>
                        <Link to = '/ajutor' className = 'nav-link' class="btn btn-outline-warning" style = {{marginLeft: '20px'}}>Ajutor <VscInfo style = {{width: '20px', height: '20px', marginTop: '-2px'}}></VscInfo></Link>
                    </li>
                </ul>
            </div>
                <div className = 'divLogout'>
	            <a onClick = {DeleteFromLocalStorage} class="buttonLogout" href="/">
  	                <img className = 'imgLogout' src = {userImg}></img>
  
                <div class="logout">LOGOUT</div>

	            </a>
                </div>

                <div id="myNav2" className="overlay-principal">
                    <a href="#!" className="closebtn-principal" onClick = {closeNav}>&times;</a>
                    <div className="overlay-principal-content">
                        <img style = {{width: '380px', height: '80px', marginTop: '-200px'}} src = {LogoCinematrixAlb} />
                        <h2 style = {{color: 'white', marginTop: '-50px'}}>Termeni si conditii</h2>
                        <h5 style = {{color: 'gray'}}>CONDITII GENERALE PENTRU UTILIZAREA PLATFORMEI www.Cinematrix.ro</h5>
                        <p style = {{color: 'gray', paddingLeft: '50px', paddingRight: '50px'}}>Toti utilizatorii platformei www.Cinematrix.ro se obliga sa respecte prezentele  Conditii Generale pentru utilizarea Site-ului.
                        Utilizarea site-ului implica acceptarea neconditionata a acestor Conditii Generale. „Operatorul“ este Cinematrix S.A., societate comerciala cu sediul in Focsani, inregistrata la Registrul Comertului cu nr. J100/8734/2021, capital social subscris si varsat 100.000 Lei, operator de date cu caracter personal nr. 292, nr. 43 si nr. 1724. Datele cu caracter personal vor fi prelucrate conform regulamentului de baza si a legii romane si orice greseala din partea noastra se poate pedepsi.</p>
                        <p style = {{color: 'gray', paddingLeft: '50px', paddingRight: '50px'}}><b>DREPTURILE ASUPRA SITE-ULUI</b>: Grafica, forma, modalitatea de prezentare, continutul, textele, fotografiile, software-ul, logo-urile si orice alte materiale prezente in portal sunt protejate de legea dreptului de autor si sunt proprietatea Operatorului sau a partenerilor sai comerciali. Pentru mai multe informatii accesati <i>https://www.amigio.ro/model-termeni-si-conditii-site/</i></p>
                        <p style = {{color: 'gray', paddingLeft: '50px', paddingRight: '50px'}}>Conform regulamentului de ordine si supunere online toate drepturile in ceea ce priveste domeniul Cinematrix.ro sunt rezervate, iar orice abatere de natura frauduloasa poate duce la consecinte grave. Pentru detaliile complete, va invitam sa accesati site-ul <i>https://www.termsfeed.com/blog/sample-copyright-notices/</i></p>
                        <p style = {{color: 'gray', paddingLeft: '200px', paddingRight: '200px'}}>Indiferent daca esti trecator sau membru cu cont, daca ai probleme, nu uita sa apelezi la cele 2 pagini ale noastre: CONTACT - daca doresti sa intri in legatura cu noi, sau AJUTOR - daca vrei sa aflii functionalitatea unei pagini.</p>
                        <p style = {{color: 'white'}}>Cu stima, Echipa Cinematrix</p>

                        <div class="flex-center">
                            <i className="fa fa-facebook fa-4x icon-3d"><a style = {{fontSize: '12px', fontFamily: 'Poppins'}} href="https://www.facebook.com/EmilianTeo/" target = '_blank'>Facebook</a></i>
                            <i className="fa fa-twitter fa-4x icon-3d"><a style = {{fontSize: '12px', fontFamily: 'Poppins'}} href="https://twitter.com/EmilianTeodor" target = '_blank'>Twitter</a></i>
                            <i className="fa fa-linkedin fa-4x icon-3d"><a style = {{fontSize: '12px', fontFamily: 'Poppins'}} href="https://www.linkedin.com/in/emilian-teodor-rotaru-550963197/" target = '_blank'>LinkedIn</a></i>
                            <i className="fa fa-youtube fa-4x icon-3d"><a style = {{fontSize: '12px', fontFamily: 'Poppins'}} href="https://www.youtube.com/channel/UCatqZnUMMSwzVTZ8xhSJt-w" target = '_blank'>YouTube</a></i>
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar
