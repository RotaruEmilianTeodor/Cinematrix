import React from 'react'
import { SiThemoviedatabase } from "react-icons/si"
import { SiImdb } from "react-icons/si"
import { IoHandRightSharp } from "react-icons/io5"
import LogoCinematrix from "../images/CinematrixLogo.png"
import { Link } from 'react-router-dom'
 
const Footer = () => {
    const DeleteFromLocalStorage = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
    }

    return (
        <footer style = {{paddingTop: '30px'}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css'></link>

            <div class="social">
                <h6>Urmariti-ne pe retelele de socializare</h6>
                <a href="https://www.facebook.com/EmilianTeo/" target='_blank'><i class="fa fa-facebook"></i></a> 
                <a href="https://twitter.com/EmilianTeodor" target='_blank'><i class="fa fa-twitter"></i></a> 
                <a href="https://www.instagram.com/emilu.teo/" target='_blank'><i class="fa fa-instagram"></i></a> 
                <a href="https://www.linkedin.com/in/emilian-teodor-rotaru-550963197/" target='_blank'><i class="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UCatqZnUMMSwzVTZ8xhSJt-w" target='_blank'><i class="fa fa-youtube"></i></a> 
            </div>
    
            <div style = {{textAlign: 'center', paddingTop: 15, paddingBottom: 15, marginTop: '-10px'}}>
                <a href="https://www.themoviedb.org/?language=ro" target='_blank'>The Movie Database <SiThemoviedatabase style = {{width: '20px', height: '20px'}}></SiThemoviedatabase></a>
                <a href="https://www.imdb.com/" target='_blank' style = {{marginLeft: 30}}>IMDB <SiImdb style = {{width: '20px', height: '20px', marginTop: '-3px'}}></SiImdb></a>
                <a href="https://www.cinemagia.ro/" target='_blank' style = {{marginLeft: 30}}>Cinemagia</a>
            </div>

            <p style = {{marginTop: '-5px'}}><Link to = 'profil-mare'>Pagina de utilizator</Link>&nbsp;&nbsp;<Link onClick = {DeleteFromLocalStorage} to = '/'>LOGOUT</Link></p>
            
            <div style = {{backgroundColor: '#373b69', paddingTop: 20, paddingBottom: 20}}>
                <img style = {{width: '150px', height: '30px', marginTop: '-3px'}} src = {LogoCinematrix} alt="" /> © 2021 by Rotaru Emilian-Teodor. <b>All rights reserved</b> <a href="https://www.termsfeed.com/blog/sample-copyright-notices/" target = "_blank"><IoHandRightSharp style = {{marginTop: '-4px', color: 'black'}}></IoHandRightSharp></a>
            </div>
        </footer>
    )
}

export default Footer
