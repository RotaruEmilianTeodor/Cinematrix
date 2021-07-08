import React, { useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from './Navbar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { BsChatQuote } from "react-icons/bs"
import { GoMail } from "react-icons/go"
import ReactMapGl from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'
import emailjs from 'emailjs-com'

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Contact = () => {
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)

    const [viewport, setViewPort] = useState({
        latitude: 45.730320,
        longitude: 27.227150,
        width: '180vh',
        height: '50vh',
        zoom: 13,
    })

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_eme3zch', e.target, 'user_EttyRsAEJCDQuEXVU7dFJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        obiectGen.innerText = 'Mesajul a fost trimis! Va multumim!'
    }

    var obiectGen = document.getElementById('textNode')

    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55, overflow: 'hidden'}}>Contact</h3>
            <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Slavoj Žižek" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Cinema is the ultimate pervert art. It doesn't give you what you desire - it tells you how to desire" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <div style = {{backgroundColor: '#22254b', paddingBottom: '1px', paddingTop: '20px', overflow: 'hidden'}}>
            
            <div className = 'hartaGL' style = {{width: '180vh', height: '50vh', marginLeft: '110px', border: '3px solid #0275d8'}}>
                <ReactMapGl {...viewport} mapboxApiAccessToken = "pk.eyJ1IjoiMXN0ZW1pbHUiLCJhIjoiY2twY3kzaTRxMWlkMzMxbng4Mjg0OTc4aSJ9.M0Cl-YEOp9KLvXqb2g4IYw" mapStyle = "mapbox://styles/1stemilu/ckpcyde844n9y17mslnw2r3ov" onViewportChange = {(viewport) => {setViewPort(viewport)}}></ReactMapGl>
            </div>

            <section class="mb-4">

            {userJSON ? 
            <div>
                <h2 style = {{color: 'white', fontFamily: 'Poppins'}} class="h1-responsive font-weight-bold text-center my-4">Contacteaza-ne</h2>
                <p style = {{color: 'white', paddingLeft: '300px', paddingRight: '300px', fontFamily: 'Poppins'}} class="text-center w-responsive mx-auto mb-5">Draga <b style = {{color: 'green'}}>{userJSONParsed.nume}</b>, speram ca esti multumit de platforma noastra. Daca totusi intampini probleme de orice natura, nu ezita sa ne contactezi prin completarea urmatorului formular:</p>
            </div>
            : 
            <div>
                <h2 style = {{color: 'white', fontFamily: 'Poppins'}} class="h1-responsive font-weight-bold text-center my-4">Contacteaza-ne</h2>
                <p style = {{color: 'white', paddingLeft: '300px', paddingRight: '300px', fontFamily: 'Poppins'}} class="text-center w-responsive mx-auto mb-5">Draga <b style = {{color: 'green'}}>trecatorule</b>, speram ca esti multumit de platforma noastra. Daca totusi intampini probleme de orice natura, nu ezita sa ne contactezi prin completarea urmatorului formular:</p>
            </div>}
            
                <div style = {{marginTop: '-15px'}} className = 'formularContact' class="row">

                    <div class="col-md-9 mb-md-0 mb-5">
                        <form onSubmit = {sendEmail}>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label style = {{color: 'white', marginLeft: '-100px'}} for="name" class="">Nume:</label>
                                        <input style = {{marginLeft: '200px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="text" id="name" name="name" class="form-control" required></input>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label style = {{color: 'white', marginLeft: '-110px'}} for="email" class="">Email:</label>
                                        <input style = {{marginLeft: '198px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="text" id="email" name="email" class="form-control" required></input>
                                        <br />
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label style = {{color: 'white', marginLeft: '-600px'}} for="subject" class="">Subiect <i style = {{fontWeight: 'lighter'}}>[optional]</i>:</label>
                                        <input style = {{marginLeft: '200px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="text" id="subject" name="subject" class="form-control"></input>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <label style = {{color: 'white', marginLeft: '-680px'}} for="message">Mesaj:</label>
                                        <textarea style = {{marginLeft: '200px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} type="text" id="message" name="message" rows="2" class="form-control md-textarea" required></textarea>                                       
                                    </div>

                                </div>
                            </div>

                            <div>
                                <input style = {{marginLeft: '-660px', marginTop: '20px', boxShadow: '0px 4px 7px rgba(0,0,0,.5)', backgroundColor: '#0275d8'}} type="submit" className = 'btn btn-info' value = 'Trimite'/>
                            </div>

                            <div>
                                <p style = {{fontSize: '20px', marginTop: '5px', marginLeft: '400px'}} id = 'textNode'></p>
                            </div>

                        </form>
                    </div>

                    <div style = {{marginTop: '3px'}}>
                    <ul style = {{marginTop: '0px'}} class="list-unstyled mb-0">
                        <li style = {{marginLeft: '-800px'}}><i><FaMapMarkerAlt className = 'FaMap'></FaMapMarkerAlt></i>
                            <p style = {{color: 'white'}}><b>Adresa sediului:</b> Petresti, VN, Romania</p>
                        </li>

                        <li style = {{marginTop: '-80px'}}><i><FaPhone className = 'FaPhone'></FaPhone></i>
                            <p style = {{color: 'white'}}><b>Numarul de telefon:</b> 0766 553 335</p>
                        </li>

                        <li style = {{marginLeft: '800px', marginTop: '-80px'}}><i><FaMailBulk className = 'FaMail'></FaMailBulk></i>
                            <p style = {{color: 'white'}}><b>Email:</b> rotaruemilian18@stud.ase.ro</p>
                        </li>
                    </ul>
                    <br />
                    </div>

                </div>

                <div style = {{border: '1px solid white', marginLeft: '200px', marginRight: '200px', backgroundColor: '#373b69', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}}>
                    <p style = {{color: 'white', fontFamily: 'Poppins', marginTop: '10px'}}><GoMail style = {{width: '25px', height: '25px', color: 'white', marginTop: '-2px'}}></GoMail> Daca doriti sa ne contactati in mod direct, o puteti face la una din adresele noastre de mail: <a href = "mailto:cinematrix.info.contact@gmail.com">cinematrix.info.contact@gmail.com</a></p>
                    <p style = {{color: 'white', fontFamily: 'Poppins', marginLeft: '678px'}}> sau <a href = "mailto:rotaruemilian18@stud.ase.ro">rotaruemilian18@stud.ase.ro</a></p>
                    <p style = {{color: 'white', fontFamily: 'Poppins'}}>O sa va incercam sa va raspundem in mai putin de 24 de ore. Va multumim pentru intelegere!</p>
                </div>

            </section>

            </div>

            <ScrollToTop></ScrollToTop>
        
            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
            </div>
    )
}

export default Contact
