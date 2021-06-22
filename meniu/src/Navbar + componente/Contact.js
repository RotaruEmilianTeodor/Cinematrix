import React, { useState } from 'react'
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from './Navbar'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { BsChatQuote } from "react-icons/bs"
import { BsInfoSquare } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { BsBootstrap } from "react-icons/bs"
import ReactMapGl from 'react-map-gl'
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Contact = () => {
    const [viewport, setViewPort] = useState({
        latitude: 45.730320,
        longitude: 27.227150,
        width: '180vh',
        height: '50vh',
        zoom: 13,
    })

    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55, overflow: 'hidden'}}>Contact</h3>
            <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="Slavoj Žižek" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Cinema is the ultimate pervert art. It doesn't give you what you desire - it tells you how to desire" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <div style = {{backgroundColor: '#22254b', paddingBottom: '1px', paddingTop: '20px', overflow: 'hidden'}}>
            
            <div style = {{width: '180vh', height: '50vh', marginLeft: '110px', border: '3px solid #0275d8'}}>
                <ReactMapGl {...viewport} mapboxApiAccessToken = "pk.eyJ1IjoiMXN0ZW1pbHUiLCJhIjoiY2twY3kzaTRxMWlkMzMxbng4Mjg0OTc4aSJ9.M0Cl-YEOp9KLvXqb2g4IYw" mapStyle = "mapbox://styles/1stemilu/ckpcyde844n9y17mslnw2r3ov" onViewportChange = {(viewport) => {setViewPort(viewport)}}></ReactMapGl>
            </div>
        
            <section class="mb-4">
                
                <h2 style = {{color: 'white'}} class="h1-responsive font-weight-bold text-center my-4">Contacteaza-ne</h2>

                <p style = {{color: 'white'}} class="text-center w-responsive mx-auto mb-5">Speram ca sunteti multumiti de platforma noastra. Daca totusi intampinati probleme de orice natura, nu ezitati sa ne contactati.</p>

                <div>
                    <ul style = {{marginTop: '20px'}} class="list-unstyled mb-0">
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

            </section>
            </div>

            <div class="about-section">
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

            <div style = {{backgroundColor: '#22254b', paddingBottom: '10px', paddingTop: '20px'}}>
                <h4 style = {{color: 'white', textAlign: 'left', marginLeft: '100px', textDecoration: 'underline'}}>Alte informatii importante</h4>
                <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Produsul final a fost realizat cu ajutorul bibliotecii JavaScript <b>React</b> <FaReact style = {{marginTop: '-2px'}}></FaReact> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://reactjs.org/' target = '_blank'>link</a>.</p>
                <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Baza de date privind utilizatorii a fost implentata in <b>MongoDB Atlas</b> <DiMongodb style = {{width: '20px', height: '20px', marginLeft: '-4px'}}></DiMongodb> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://www.mongodb.com/cloud/atlas' target = '_blank'>link</a>.</p>
                <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Pentru stilizarea la nivel de pagina, pe langa CSS-ul obisnuit, se pot identifica elemente din framework-ul <b>Bootstrap 5</b> <BsBootstrap style = {{marginTop: '-3px'}}></BsBootstrap> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://getbootstrap.com/' target = '_blank'>link</a>.</p>
                <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}><i style = {{fontWeight: 'lighter'}}>Restul informatiilor cu privire la tehnologiile folosite in realizarea prezentei platforme sunt disponibile in documentul de cercetare aferent lucrarii de licenta.</i></p>
            </div>

            <ScrollToTop></ScrollToTop>
        
            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
            </div>
    )
}

export default Contact
