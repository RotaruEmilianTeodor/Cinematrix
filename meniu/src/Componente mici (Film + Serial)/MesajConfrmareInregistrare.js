import React from 'react'
import background from "../images/fundal.jpg"
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from "react-icons/ai"
import LogoCinematrix from "../images/CinematrixLogo.png"

const MesajConfrmareInregistrare = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="background">
            <div className = 'formLogin'>
                <div className="form-inner">
                    <img style = {{width: '300px', height: '70px', marginBottom: '10px'}} src = {LogoCinematrix} alt="" />
                    <h6 style = {{fontFamily: 'Poppins', textAlign: 'center'}}>Inregistrare realizata cu succes! <AiFillCheckCircle style = {{width: '20px', height: '20px', marginTop: '-1px'}}></AiFillCheckCircle></h6>
                    <hr />
                    <div style = {{marginTop: '-8px'}} className = 'about-section-3'>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px'}}>Esti doar la un click distanta de a beneficia</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '-10px'}}>de platforma Cinematrix. Ultimul lucru pe</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '-10px'}}>care il ai de facut este sa te loghezi</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '-10px'}}>apasand butonul de mai jos.</p>
                    <p style = {{fontFamily: 'Poppins', fontSize: '13px', marginTop: '-10px', textAlign: 'center', marginBottom: '0px'}}>Iti multumim si distractie placuta!</p>
                    </div>
                    <br />
                    <Link style = {{float: 'right', boxShadow: '0px 4px 7px rgba(0,0,0,.5)', marginTop: '-17px', marginRight: '100px'}} className = 'linkLogout nav-link' to = '/'>Inapoi</Link>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default MesajConfrmareInregistrare
