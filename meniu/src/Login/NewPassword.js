import React from 'react'
import background from "../images/fundal.jpg"
import { Link, useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const history = useHistory()
    const [parola, setParola] = useState("")
    const [error, setError] = useState("");
    const { token } = useParams()
    console.log(token);
    const PostData = () => {
        fetch('/new-password', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                parola,
                token
            })
        }).then(res=>res.json())
        .then(data => {
          console.log(data);
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
                    <h1 className = 'navbar-brand' style = {{fontSize: 35}}>CINEMATRIX</h1>
                    <hr/>
                    <h2>Introdu o noua parola</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="password">Parola: </label>
                        <input type="password" value = {parola} onChange = {(e) => setParola(e.target.value)}/>
                    </div>
                    <input type="submit" value="Schimba parola" onClick = {() => PostData()}/>
                </div>
            </div>
        </div>
    )
}

export default Login
