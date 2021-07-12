import React from 'react'
import background from "../images/fundal.jpg"
import loginPhoto from "../images/LoginPhoto2.jpg"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi"
import LogoCinematrix from "../images/CinematrixLogo.png"
import { BsInfoSquare } from "react-icons/bs"
import { RiTeamLine } from "react-icons/ri"
import { BiMovie } from "react-icons/bi"
import { RiMovie2Line } from "react-icons/ri"
import { AiOutlineFunction } from "react-icons/ai"
import Time from '../Componente mici (Film + Serial)/Time'
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

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
        <div>
            <div style = {{backgroundImage: `url(${background})`}} className="background">
                <div className = 'formLogin'>
                    <div className="form-inner">
                        <img style = {{width: '300px', height: '70px', marginBottom: '10px'}} src = {LogoCinematrix} alt="" />
                        <hr/>
                        {(error != "") ? (<div style = {{maxWidth: '300px'}} class="alert alert-warning d-flex align-items-center" role="alert"><FiAlertTriangle style = {{width: '20px', height: '20px', marginRight: '10px', marginTop: '-2px'}}></FiAlertTriangle> {error}</div>) : ""}
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input style = {{border: '1px solid rgb(175, 175, 175)', boxShadow: '0px 4px 7px rgba(0,0,0,.2)'}} type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <input style = {{boxShadow: '0px 4px 7px rgba(0,0,0,.7)'}} type="submit" value="Resetare parola" onClick = {() => PostData()}/>
                        <Link style = {{float: 'right', boxShadow: '0px 4px 7px rgba(0,0,0,.5)'}} className = 'linkLogout nav-link' to = '/'>Inapoi</Link>
                    </div>
                </div>
            </div>
            <div className = 'aboutLogin' style = {{backgroundColor: '#22254b'}}>
                <div style = {{marginTop: '-35px'}} class="about-section-login">
                    <div style = {{marginTop: '-46px'}}>
                        <Time></Time>
                    </div>
                    <h1>Ce este platforma CINEMATRIX? <BsInfoSquare style = {{marginTop: '-7px'}}></BsInfoSquare></h1>
                    <p><i>-povestea unui site facut din pasiune, pentru pasionati-</i></p>
                    <p style = {{margin: '5px 10px auto'}}>Totul a inceput din dorinta de a imbina utilul cu placutul, si anume una dintre pasiunile mele, cinematografia, cu lucrarea de licenta. Din momentul in care aceasta idee mi-a aparut in minte, scopul a fost unul sigur. Cu o interfata atat simplu de utilizat cat si moderna, Cinematrix va fi partenerul ideal al fiecarui cinefil din intreaga lume. Acestia vor putea afla informatii pretioase atat despre filmele si serialele preferate, cat si despre lucrurile care se intampla in lumea cinematrografiei. De asemenea, pot face cautari pe pagina, afla recomandari pe baza altor productii, si chiar sa isi creeze propriile liste personalizate. In continuare, consider important sa prezentam pe scurt, in mod succint caracteristicile fiecarui meniu: <br /><br />
                    <p style = {{fontWeight: 'lighter'}}>- Pagina HOME =&gt; Aceasta este prima pagina a platformei, acolo unde veti gasi informatii la nivel de platforma, cat si legate de lumea cinematografiei. <br />
                    - Pagina NOUTATI =&gt; Aceasta pagina este destinata ultimelor stiri si noutati din lumea filmului. <br />
                    - Pagina RECOMANDARI =&gt; Aceasta pagina este destinata cautarii productiilor similare celor pe care utilizatorul le urmareste de obicei. <br />
                    - Pagina LISTA PERSONALIZATA =&gt; Aceasta pagina este destinata crearii listelor custom. <br />
                    - Pagina FILME =&gt; Acest meniu este destinat utilizatorilor care vor sa caute informatii despre diverse filme. <br />
                    - Pagina SERIALE =&gt; Acest meniu este destinat utilizatorilor care vor sa caute informatii despre diverse seriale. <br />
                    - Pagina ACTORI =&gt; Acest meniu este destinat utilizatorilor care vor sa caute informatii despre diversi actori pe baza productiilor in care apar. <br />
                    - Pagina CONTACT =&gt; Aceasta pagina reprezinta modul de legatura al utilizatorului cu echipa tehnica din spatele portalului CINEMATRIX. <br />
                    - Pagina AJUTOR =&gt; Ultima pagina, dar nu cea din urma, pagina Ajutor este modul perfect de a afla mai multe lucruri despre portal.</p> 
                    </p>
                </div>
                <h3 style = {{color: 'white', fontFamily: 'Poppins', marginTop: '-30px'}}>Hai sa vezi cu ce ne mandrim!</h3>
                <br />
                <div style = {{marginLeft: '-1000px'}}>
                    <RiTeamLine className = 'aboutIcons' style = {{width: '150px', height: '150px'}}></RiTeamLine>
                    <p style = {{fontFamily: 'Poppins', color: 'white'}}>Avem cea mai muncitoare echipa</p>
                </div>

                <div style = {{marginLeft: '-350px', marginTop: '-190px'}}>
                    <BiMovie className = 'aboutIcons' style = {{width: '150px', height: '150px'}}></BiMovie>
                    <p style = {{fontFamily: 'Poppins', color: 'white'}}>Peste 650.000 filme</p>
                </div>

                <div style = {{marginLeft: '300px', marginTop: '-190px'}}>
                    <RiMovie2Line className = 'aboutIcons' style = {{width: '150px', height: '150px'}}></RiMovie2Line>
                    <p style = {{fontFamily: 'Poppins', color: 'white'}}>Peste 110.000 seriale</p>
                </div>

                <div style = {{marginLeft: '1000px', marginTop: '-190px'}}>
                    <AiOutlineFunction className = 'aboutIcons' style = {{width: '150px', height: '150px'}}></AiOutlineFunction>
                    <p style = {{fontFamily: 'Poppins', color: 'white'}}>Cele mai tari functionalitati</p>
                </div>

                <h5 style = {{color: 'white', fontFamily: 'Poppins', paddingTop: '10px'}}>And still counting...</h5>

                <h1 style = {{fontFamily: 'Zen Loop', color: 'white', marginLeft: '370px', marginRight: '370px', paddingTop: '5px', paddingBottom: '5px'}}>Asadar, ce mai astepti? Povestea incepe cu tine!</h1>

                <img style = {{width: '100%', height: 'auto'}} src = {loginPhoto} alt="" />
            </div>
            <ScrollToTop></ScrollToTop>
        </div>
    )
}

export default Reset
