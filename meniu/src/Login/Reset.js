import React from 'react'
import background from "../images/fundal.jpg"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import LogoCinematrix from "../images/CinematrixLogo.png"

const Reset = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("");
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError('Email invalid');
            return
        }
        fetch('/reset-password', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
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
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input style = {{border: '1px solid rgb(175, 175, 175)', boxShadow: '0px 4px 7px rgba(0,0,0,.2)'}} type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <input style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.7)'}} type="submit" value="Resetare parola" onClick = {() => PostData()}/>
                    <Link style = {{float: 'right', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} className = 'linkLogout nav-link' to = '/'>Inapoi</Link>
                </div>
            </div>
        </div>
    )
}

export default Reset
