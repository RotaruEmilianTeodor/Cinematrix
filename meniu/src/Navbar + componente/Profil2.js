import React from 'react'
import background from "../images/fundal.jpg"
import { Link } from 'react-router-dom'
import { BiHappyBeaming } from "react-icons/bi"
import LogoCinematrix from "../images/CinematrixLogo.png"

const Profil2 = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="background">
            <div className = 'formLogin'>
                <div className="form-inner">
                    <img style = {{width: '300px', height: '70px', marginBottom: '10px'}} src = {LogoCinematrix} alt="" />
                    <p style = {{fontFamily: 'Poppins', fontSize: '16px', color: 'black'}}>Bine te-am regasit! <BiHappyBeaming style = {{width: '20px', height: '20px', marginTop: '-2px'}}></BiHappyBeaming></p>
                    <div style = {{marginTop: '-8px'}} className = 'about-section-3'>
                        <p style = {{fontFamily: 'Poppins', fontSize: '14px'}}>Dorim sa iti reamintim ca esti in modul <b style = {{color: 'black'}}>TRECATOR</b> <br /> si ca actiunile tale vor fi limitate.</p>
                        <p style = {{fontFamily: 'Poppins', fontSize: '14px', marginTop: '-12px', marginBottom: '0px'}}>Nu uita ca poti oricand sa te inregistrezi!</p>
                        <p style = {{fontFamily: 'Poppins', fontSize: '14px', marginBottom: '0px'}}>Daca ai nevoie de ajutor, nu uita de pagina <br></br> specifica <b style = {{color: 'yellow'}}>AJUTOR</b>.</p>
                    </div>
                    <p style = {{fontFamily: 'Poppins', fontSize: '16px', marginTop: '5px', marginBottom: '-5px', color: 'black'}}>Distractie placuta!</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '5px', fontWeight: 'lighter', color: 'black'}}>Echipa CINEMATRIX</p>
                    <Link className = 'linkIntraInSite nav-link' to = '/home'>Intra in pagina</Link> 
                    <Link style = {{float: 'right', marginTop: '-43px'}} className = 'linkLogout nav-link' to = '/'>LOGOUT</Link> 
                </div>
            </div>
        </div>
    )
}

export default Profil2
