import React from 'react'
import { BsChatQuote } from "react-icons/bs"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'
import { BsInfoSquare } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { BsBootstrap } from "react-icons/bs"
import { RiTeamLine } from "react-icons/ri"
import { BiMovie } from "react-icons/bi"
import { RiMovie2Line } from "react-icons/ri"
import { AiOutlineFunction } from "react-icons/ai"
import AboutPage from '../images/aboutPage.jpg'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>About</h3>
            <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Abu Bakr" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Without knowledge action is useless and knowledge without action is futile" <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <img style = {{width: '100%', height: 'auto'}} src = {AboutPage} alt="" />

            <div style = {{backgroundColor: '#22254b'}}>
                <div className = 'statistics-about'>
                    <h3 style = {{color: 'white', fontFamily: 'Poppins', paddingTop: '20px'}}>Hai sa vezi cu ce ne mandrim!</h3>
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
                </div>

                <br />

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

                <div style = {{backgroundColor: '#22254b', paddingBottom: '10px', paddingTop: '20px', justifyContent: 'center'}}>
                    <h4 style = {{color: 'white', textAlign: 'left', marginLeft: '100px', textDecoration: 'underline'}}>Alte informatii importante</h4>
                    <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Produsul final a fost realizat cu ajutorul bibliotecii JavaScript <b>React</b> <FaReact style = {{marginTop: '-2px'}}></FaReact> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://reactjs.org/' target = '_blank'>link</a>.</p>
                    <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Baza de date privind utilizatorii a fost implentata in <b>MongoDB Atlas</b> <DiMongodb style = {{width: '20px', height: '20px', marginLeft: '-4px'}}></DiMongodb> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://www.mongodb.com/cloud/atlas' target = '_blank'>link</a>.</p>
                    <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}>Pentru stilizarea la nivel de pagina, pe langa CSS-ul obisnuit, se pot identifica elemente din framework-ul <b>Bootstrap 5</b> <BsBootstrap style = {{marginTop: '-3px'}}></BsBootstrap> Pentru documentatia completa si oficiala, accesati acest <a href = 'https://getbootstrap.com/' target = '_blank'>link</a>.</p>
                    <p style = {{color: 'white', textAlign: 'left', marginLeft: '100px'}}><i style = {{fontWeight: 'lighter'}}>Restul informatiilor cu privire la tehnologiile folosite in realizarea prezentei platforme sunt disponibile in documentul de cercetare aferent lucrarii de licenta.</i></p>
                </div>
            </div>

            <ScrollToTop></ScrollToTop>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
    )
}

export default About
