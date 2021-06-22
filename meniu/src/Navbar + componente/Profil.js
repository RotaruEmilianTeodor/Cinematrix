import React from 'react'
import background from "../images/fundal.jpg"
import { Link } from 'react-router-dom'
import { BiHappyBeaming } from "react-icons/bi"
import LogoCinematrix from "../images/CinematrixLogo.png"

const Profil = () => {
    const userJSON = localStorage.getItem('user')
    const userJSONParsed = JSON.parse(userJSON)
    console.log(userJSONParsed.nume)

    const DeleteFromLocalStorage = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
    }

    return (
        <div style = {{backgroundImage: `url(${background})`}} className="background">
            <div className = 'formLogin'>
                <div className="form-inner">
                    <img style = {{width: '300px', height: '70px', marginBottom: '10px'}} src = {LogoCinematrix} alt="" />
                    <p style = {{color: 'black'}}>Bine te-am regasit, {userJSONParsed.nume} <BiHappyBeaming style = {{width: '20px', height: '20px', marginTop: '-2px'}}></BiHappyBeaming></p>
                    <div style = {{marginTop: '-8px'}} className = 'about-section-3'>
                        <p style = {{fontFamily: 'Poppins', fontSize: '14px'}}>Esti in modul <b style = {{color: 'black'}}>membru</b>, deci te poti bucura <br></br> de toate functionalitatile!</p>
                        <p style = {{fontFamily: 'Poppins', fontSize: '14px', marginTop: '-12px', marginBottom: '0px'}}>Daca ai nevoie de ajutor, nu uita de pagina <br></br> specifica <b style = {{color: 'yellow'}}>AJUTOR</b>.</p>
                    </div>
                    <p style = {{fontFamily: 'Poppins', fontSize: '16px', marginTop: '5px', marginBottom: '-5px', color: 'black'}}>Distractie placuta!</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '5px', fontWeight: 'lighter', color: 'black'}}>Echipa CINEMATRIX</p>
                    <Link className = 'linkIntraInSite nav-link' to = '/home'>Intra in pagina</Link> 
                    <Link onClick = {DeleteFromLocalStorage} style = {{float: 'right', marginTop: '-43px'}} className = 'linkLogout nav-link' to = '/'>LOGOUT</Link> 
                </div>
            </div>
        </div>
    )
}

export default Profil
