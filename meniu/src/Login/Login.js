import React from 'react'
import background from "../images/fundal.jpg"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { BiLogIn } from "react-icons/bi"
import { RiLockPasswordLine } from "react-icons/ri"
import { FiAlertTriangle } from "react-icons/fi"
import LogoCinematrix from "../images/CinematrixLogo.png"
import { TiInputCheckedOutline } from "react-icons/ti"

const Login = () => {
    const history = useHistory()
    const [parola, setParola] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError('Email invalid');
            return
        }
        fetch('/signin', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                parola,
                email
            })
        }).then(res=>res.json())
        .then(data => {
          console.log(data);
            if(data.error){
                setError(data.error);
            }
            else {
                localStorage.setItem('jwt', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                setError(data.message);
                history.push('/profil')
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
                    <Link style = {{marginLeft: '5px'}} className = 'linkFaraCont nav-link' to = '/profil-2'>Intra fara cont <BiLogIn style = {{width: '20px', height: '20px', marginTop: '-1px'}}></BiLogIn></Link>
                    <hr/>
                    <h2 style = {{fontFamily: 'Poppins'}}>Logheaza-te</h2>

                    {(error != "") ? (<div className="alert alert-warning d-flex align-items-center" role="alert"><FiAlertTriangle style = {{width: '20px', height: '20px', marginRight: '10px', marginTop: '-2px'}}></FiAlertTriangle> {error}</div>) : ""}

                    <div className="form-group">
                        <label htmlFor="email" style = {{fontFamily: 'Poppins'}}>Email: </label>
                        <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style = {{fontFamily: 'Poppins'}}>Parola: </label>
                        <input type="password" value = {parola} onChange = {(e) => setParola(e.target.value)}/>
                    </div>
                    <input type="submit" value = 'LOGIN    ' onClick = {() => PostData()}/><TiInputCheckedOutline style = {{marginLeft: '-33px', width: '25px', height: '25px', color: 'white', marginTop: '-4px'}}></TiInputCheckedOutline>
                    <Link className = 'linkInregistrare nav-link' to = '/inregistrare'>Inregistrare</Link>
                    <hr/>
                    <div>
                        <Link to = '/reset'>Ai uitat parola? <RiLockPasswordLine style = {{width: '20px', height: '20px', marginTop: '-1px'}}></RiLockPasswordLine></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
