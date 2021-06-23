import React from 'react'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import HelpImg from '../images/help.jpg'
import { RiMovieLine } from 'react-icons/ri'
import { FaInfoCircle } from 'react-icons/fa'
import { BsChatQuote } from "react-icons/bs"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Actori = () => {
    return (
        <div>
            <Navbar></Navbar>
            <header style = {{marginTop: 70, height: 76}}>
            <h3 className = 'textRecomandari' style = {{marginLeft: 55}}>Actori</h3>
            <Link to = '/actori-filme' style = {{float: 'left', marginLeft: '30px', marginTop: '13px'}}>Filme</Link>
            <Link to = '/actori-seriale' style = {{float: 'left', marginLeft: '15px', marginTop: '13px'}}>Seriale</Link>
            <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="Jean-Luc Godard" style = {{float: 'left', marginLeft: 50, marginTop: 15, color: '#0275d8', fontStyle: 'oblique'}}>"Photography is truth. The cinema is truth twenty-four times..." <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
            </header>

            <div className="movie-page">
                <div className="container">
                    <div className="headerDeVazut">
                        <h1 className = 'heading' style = {{marginLeft: '-60px'}}>Bine te-am gasit in pagina <b>Actori</b>!</h1>
                    </div>
                    <div style = {{marginTop: '40px', marginLeft: '-15px'}}>
                        <h5 style = {{float: 'left', color: 'gray'}}>Cum functioneaza?</h5>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Apesi pe unul din cele 2 submeniuri de pe pagina: <i style = {{color: '#0275d8'}}>Filme</i> sau <i style = {{color: '#0275d8'}}>Seriale</i></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; In bara de cautare a subpaginii introdu numele productiei cautate</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; Fiecare productie vine insotita de o iconita <RiMovieLine style = {{marginTop: '-2px', marginLeft: '5px'}} className = 'FaThumbsUp'></RiMovieLine></h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; Odata apasata iconita, se va deschide un modul care va incarca toti actorii</h6>
                        <br/><br/>
                        <h6 style = {{float: 'left', color: 'gray', marginLeft: '30px', fontWeight: 'lighter'}}>=&gt; In dreptul fiecarei actor exista o iconita <FaInfoCircle style = {{marginLeft: '5px', marginRight: '5px'}} className = 'FaInfo'></FaInfoCircle> care va deschide pagina acestuia de pe site-ul <br></br> <i style = {{marginLeft: '-470px'}}>The Movie Database (TMDb)</i></h6>
                        <br/><br/><br></br>
                        <h6 style = {{float: 'left', color: 'gray', whiteSpace: 'initial'}}>-&gt; <b style = {{color: 'black'}}>Felicitari!</b> Acum poti sa aflii cine joaca in diverse productii</h6>
                    </div>
                </div>

                <div class="card" style={{backgroundColor: '#373b69', float: 'right', width: '18rem', marginTop: '-365px', marginRight: '230px', border: '1px solid black', color: 'white'}}>
                    <img class="card-img-top" src = {HelpImg} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Nu uita!</h5>
                        <p style = {{fontWeight: 'lighter', fontStyle: 'italic'}} class="card-text">Daca nu te descurci, nu uita sa apelezi la meniul <Link to = '/ajutor'><button style = {{marginLeft: '5px', marginRight: '5px'}} type="button" class="btn btn-outline-warning">Ajutor</button></Link> din partea de sus a paginii</p>
                    </div>
                </div>
            </div>

            <ScrollToTop></ScrollToTop>

            <Footer></Footer>
            <SocialButtonsBar></SocialButtonsBar>
        </div>
    )
}

export default Actori

