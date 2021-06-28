import React from 'react'
import background from "../images/fundal.jpg"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi"
import LogoCinematrix from "../images/CinematrixLogo.png"

const Signup = () => {
    const history = useHistory()
    const [nume, setNume] = useState("")
    const [parola, setParola] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("");
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError('Email invalid');
            return
        }
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                nume,
                parola,
                email
            })
        }).then(res=>res.json())
        .then(data => {
            if(data.error){
                setError(data.error);
            }
            else {
                setError(data.message);
                history.push('/')
            }
        }).catch(err=> {
            console.log(err);
        })
    }

    return (
        <div style = {{backgroundImage: `url(${background})`}} className="background">
            <div className = 'formLogin'>
                <div className="form-inner">
                    <img style = {{width: '300px', height: '70px', marginBottom: '10px'}} src = {LogoCinematrix} alt="" />
                    <hr/>
                    <h2 style = {{fontFamily: 'Poppins'}}>Inregistare</h2>
                    
                    {(error != "") ? (<div class="alert alert-warning d-flex align-items-center" role="alert"><FiAlertTriangle style = {{width: '20px', height: '20px', marginRight: '10px', marginTop: '-2px'}}></FiAlertTriangle> {error}</div>) : ""}

                    <div className="form-group">
                        <label style = {{fontFamily: 'Poppins'}} htmlFor="name">Nume: </label>
                        <input type="text" value = {nume} onChange = {(e) => setNume(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label style = {{fontFamily: 'Poppins'}} htmlFor="email">Email: </label>
                        <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label style = {{fontFamily: 'Poppins'}} htmlFor="password">Parola: </label>
                        <input type="password" value = {parola} onChange = {(e) => setParola(e.target.value)}/>
                    </div>
                    <input type="submit" value="Inregistreaza-te" onClick = {() => PostData()}/>
                    <Link style = {{float: 'right'}} className = 'linkLogout nav-link' to = '/'>Inapoi</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
