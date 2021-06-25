import React from 'react'
import { Link } from 'react-router-dom'
import LogoCinematrixAlb from "../images/CinematrixLogoAlb.png"
import { GiExitDoor } from "react-icons/gi"
import { RiEmotionHappyLine } from "react-icons/ri"

const ProfilMare = () => {
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    if (localStorage.getItem('jwt')) {
    return (
        <div className = 'bodyProfilMare'>
            <article className = 'articleProfilMare'>
                <img style = {{width: '400px', height: '90px', marginTop: '60px'}} src = {LogoCinematrixAlb} alt="" />
                <h1 style = {{marginTop: '-60px'}} className = 'h1ProfilMare2'>Esti in modul <b>MEMBRU</b></h1>
                <p className = 'pProfilMare'>Multumim pentru ca ai ales site-ul nostru! <br></br><br></br> <b>Profil</b>: <br></br>Nume: {userJSONParsed.nume} <br></br> Email: {userJSONParsed.email} <br></br><br /> Daca ti-ai pierdut parola sau vrei sa o schimbi, apasa pe <Link style = {{border: '1px solid white', padding: '5px', borderRadius: '5px'}} to = '/reset'>Resetare parola</Link> <br></br><br></br> Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT. Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-7px'}}></RiEmotionHappyLine><br></br><br></br><p style = {{marginLeft: '700px'}}>Echipa Cinematrix</p></p>
                <Link to = '/home'><GiExitDoor style = {{marginTop: '-100px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
            </article>
        </div>
    )

    } else {
        return (
            <div className = 'bodyProfilMare'>
                <article className = 'articleProfilMare'>
                    <img style = {{width: '400px', height: '90px', marginTop: '60px'}} src = {LogoCinematrixAlb} alt="" />
                    <h1 style = {{marginTop: '-30px'}} className = 'h1ProfilMare'>Esti in modul <b>TRECATOR</b></h1>
                    <p className = 'pProfilMare'>Multumim pentru ca ai ales site-ul nostru! <br></br><br></br> Consideram important sa te instiintam ca vei fi restrictionat din cauza rolului tau, insa poti oricand sa devii membru. <br></br> Tot ce trebuie sa faci e sa te inregistrezi si te poti bucura din plin de portalul nostru. <br></br><br></br> <p>Cum poti face asta?</p>E simplu! Doar apasa pe <Link style = {{border: '1px solid white', padding: '5px', borderRadius: '5px'}} to = '/inregistrare'>Inregistrare</Link> <br></br><br></br> Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT. Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-7px'}}></RiEmotionHappyLine> <br></br><br></br><p style = {{marginLeft: '700px'}}>Echipa Cinematrix</p></p>
                    <Link to = '/home'><GiExitDoor style = {{marginTop: '-100px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
                </article>
            </div>
        )
    }
}

export default ProfilMare
