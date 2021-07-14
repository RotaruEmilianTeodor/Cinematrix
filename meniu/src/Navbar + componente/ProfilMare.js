import React from 'react'
import { Link } from 'react-router-dom'
import LogoCinematrixAlb from "../images/CinematrixLogoAlb.png"
import { GiExitDoor } from "react-icons/gi"
import { RiEmotionHappyLine } from "react-icons/ri"
import Cartoon from '../images/cartoon.png'

const ProfilMare = () => {
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    const DeleteFromLocalStorage = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        localStorage.removeItem('NewRatingValue')
    }

    // if (localStorage.getItem('jwt')) {
    // return (
    //     <div className = 'bodyProfilMare'>
    //         <article className = 'articleProfilMare'>
    //             <img style = {{width: '400px', height: '90px', marginTop: '60px'}} src = {LogoCinematrixAlb} alt="" />
    //             <h1 style = {{marginTop: '-60px'}} className = 'h1ProfilMare2'>Esti in modul <b>MEMBRU</b></h1>
    //             <p className = 'pProfilMare'>Multumim pentru ca ai ales site-ul nostru! <br></br><br></br> <b>Profil</b>: <br></br>Nume: {userJSONParsed.nume} <br></br> Email: {userJSONParsed.email} <br></br><br /> Daca ti-ai pierdut parola sau vrei sa o schimbi, apasa pe <Link style = {{border: '1px solid white', padding: '5px', borderRadius: '5px'}} to = '/reset'>Resetare parola</Link> <br></br><br></br> Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT. Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-7px'}}></RiEmotionHappyLine><br></br><br></br><p style = {{marginLeft: '700px'}}>Echipa Cinematrix</p></p>
    //             <Link to = '/home'><GiExitDoor style = {{marginTop: '-100px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
    //         </article>
    //     </div>
    // )

    // } else {
    //     return (
    //         <div className = 'bodyProfilMare'>
    //             <article className = 'articleProfilMare'>
    //                 <img style = {{width: '400px', height: '90px', marginTop: '60px'}} src = {LogoCinematrixAlb} alt="" />
    //                 <h1 style = {{marginTop: '-30px'}} className = 'h1ProfilMare'>Esti in modul <b>TRECATOR</b></h1>
    //                 <p className = 'pProfilMare'>Multumim pentru ca ai ales site-ul nostru! <br></br><br></br> Consideram important sa te instiintam ca vei fi restrictionat din cauza rolului tau, insa poti oricand sa devii membru. <br></br> Tot ce trebuie sa faci e sa te inregistrezi si te poti bucura din plin de portalul nostru. <br></br><br></br> <p>Cum poti face asta?</p>E simplu! Doar apasa pe <Link style = {{border: '1px solid white', padding: '5px', borderRadius: '5px'}} to = '/inregistrare'>Inregistrare</Link> <br></br><br></br> Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT. Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-7px'}}></RiEmotionHappyLine> <br></br><br></br><p style = {{marginLeft: '700px'}}>Echipa Cinematrix</p></p>
    //                 <Link to = '/home'><GiExitDoor style = {{marginTop: '-100px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
    //             </article>
    //         </div>
    //     )
    // }
    if (localStorage.getItem('jwt')) {
    return (
        <div style = {{backgroundColor: '#22254b', paddingBottom: '28px'}}>
        <div class="container">
    <div class="main-body"></div>
        <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div style = {{float: 'left'}} class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                <div class="mt-3">
                  <h4>{userJSONParsed.nume}</h4>
                  <p class="text-secondary mb-1">Membru CINEMATRIX</p>
                  <button className = "btn btn-info"><Link style = {{color: 'black'}} to = '/contact'>CONTACT</Link></button>&nbsp;
                  <button className = "btn btn-warning"><Link style = {{color: 'black'}} to = '/ajutor'>AJUTOR</Link></button>&nbsp;
                  <button className = "btn btn-danger"><Link onClick = {DeleteFromLocalStorage} style = {{color: 'white'}} to = '/'>LOGOUT</Link></button>&nbsp;
                </div>
              </div>
            </div>
          </div>
          </div>
          <div style = {{float: 'right'}} class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
            <h5 style = {{marginTop: '-10px', marginBottom: '20px', marginRight: '600px', textDecoration: 'underline'}}>Profil</h5>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Numele complet:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {userJSONParsed.nume}
                </div>
              </div>
              </div>
              <hr></hr>
              <div style = {{marginBottom: '9px'}} class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {userJSONParsed.email}
                </div>
              </div>
              <hr></hr>
              <div style = {{marginBottom: '8px'}} class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Id unic:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {userJSONParsed._id}
                </div>
              </div>
              <hr></hr>
              <div style = {{marginBottom: '20px'}} class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Stare:</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Membru
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <p style = {{paddingTop: '20px'}}>Multumim pentru ca ai ales site-ul nostru!</p>
            <p>Daca ti-ai pierdut parola sau vrei sa o schimbi, apasa pe <Link style = {{border: '1px solid red', padding: '5px', borderRadius: '5px'}} to = '/reset'>Resetare parola</Link> </p>
            <p>Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT.</p>
            <p>Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-3px'}}></RiEmotionHappyLine></p>
            <p style = {{marginLeft: '400px'}}>Echipa Cinematrix</p>
          </div>
        </div>
          </div>
          <Link to = '/home'><GiExitDoor style = {{marginTop: '27px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
          </div>
    )
    } else {
        return (
            <div style = {{backgroundColor: '#22254b', paddingBottom: '25px'}}>
        <div class="container">
    <div class="main-body"></div>
        <div class="row gutters-sm">
        <div style = {{marginLeft: '370px'}} class="col-md-4 mb-3">
          <div class="card">
            <div style = {{float: 'left'}} class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src = {Cartoon} alt="Admin" class="rounded-circle" width="150"></img>
                <div class="mt-3">
                  <h4>Anonim</h4>
                  <p class="text-secondary mb-1">Trecator CINEMATRIX</p>
                  <button className = "btn btn-info"><Link style = {{color: 'black'}} to = '/contact'>CONTACT</Link></button>&nbsp;
                  <button className = "btn btn-warning"><Link style = {{color: 'black'}} to = '/ajutor'>AJUTOR</Link></button>&nbsp;
                  <button className = "btn btn-danger"><Link style = {{color: 'white'}} to = '/'>LOGOUT</Link></button>&nbsp;
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="card mt-3">
           <p style = {{paddingTop: '20px'}}>Multumim pentru ca ai ales site-ul nostru!</p>
           <p>Consideram important sa te instiintam ca vei fi restrictionat din cauza rolului tau, insa poti oricand sa devii membru.</p>
           <p>Tot ce trebuie sa faci e sa te inregistrezi si te poti bucura din plin de portalul nostru. Doar apasa pe <Link style = {{border: '1px solid red', padding: '5px', borderRadius: '5px'}} to = '/inregistrare'>Inregistrare</Link></p>
           <p>Daca te putem ajuta cu orice altceva, anunta-ne cu ajutorul paginii CONTACT. Enjoy! <RiEmotionHappyLine style = {{color: 'hsl(204 100% 59%)', width: '25px', height: '25px', marginTop: '-4px', marginLeft: '-1px'}}></RiEmotionHappyLine></p>
           <p style = {{marginLeft: '400px'}}>Echipa Cinematrix</p>
          </div>
        </div>
          </div>
          <Link to = '/home'><GiExitDoor style = {{marginTop: '30px', width: '70px', height: '70px', color: 'white'}}></GiExitDoor></Link>
          </div>
        )
    }
}

export default ProfilMare
