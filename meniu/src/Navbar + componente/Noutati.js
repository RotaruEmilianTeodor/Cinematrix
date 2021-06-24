import React from 'react'
import Navbar from './Navbar'
import { BsChatQuote } from "react-icons/bs"
import Footer from './Footer'
import SocialButtonsBar from '../Componente mici (Film + Serial)/SocialButtonsBar'
import { TiInfoLargeOutline } from "react-icons/ti"
import { ImYoutube2 } from "react-icons/im"
import ScrollToTop from '../Componente mici (Film + Serial)/ScrollToTop'

const Noutati = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <header style = {{marginTop: 70, height: 76}}>
                <h3 className = 'textRecomandari' style = {{marginLeft: 55, overflow: 'hidden'}}>Noutati</h3>
                <h6 className = 'quotes' data-bs-toggle="tooltip" data-bs-placement="top" title="David Lynch" style = {{float: 'left', marginLeft: 30, marginTop: 15, color: '#0275d8', fontStyle: 'oblique', fontSize: '1vw'}}>"(about cinema) It's like opening a door and go into a new world." <BsChatQuote style = {{width: '25px', height: '25px', marginTop: '-5px', marginLeft: '8px'}}></BsChatQuote></h6>
                </header>

                <div style = {{backgroundColor: '#22254b', paddingBottom: '1px', paddingTop: '20px', overflow: 'hidden'}}>

                <h1 style = {{color: 'white', fontFamily: 'Poppins', fontSize: '35px'}}>Stiri</h1> 

                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"></link>

                    <section style = {{marginTop: '-50px', marginBottom: '-60px'}} class="hero-section">
                        <div class="card-grid">
                            <a class="card-new" href="https://www.filmnow.ro/stiri/elsa-pataky-plina-de-rani-pe-platoul-de-filmare-al-peliculei-interceptor-cum-s-a-fotografiat-sotia-lui-chris-hemsworth-59344" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1620671159911-1ff7aef02116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Vedete</p>
                                    <h3 class="card__heading">ELSA PATAKY, PLINĂ DE RĂNI PE PLATOUL DE FILMARE AL PELICULEI "INTERCEPTOR"</h3>
                                    <p style = {{marginTop: '20px'}} class="card__text">Soția lui Chris Hemsworth, în vârstă de 44 de ani, va interpreta rolul principal în producția Netflix, un sublocotenent al armatei, numit JJ Collins. Într-una dintre fotografiile publicate de actriță pe rețelele sociale, aceasta apare însângerată și rănită, rezultat al machiajului special realizat de experți.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.cinemagia.ro/stiri/iata-care-a-fost-de-fapt-cea-mai-dificila-parte-la-filmarile-serialului-47439/" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/original/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Seriale TV</p>
                                    <h3 class="card__heading">Cea mai dificilă parte la filmările serialului Downton Abbey</h3>
                                    <p style = {{marginTop: '100px'}} class="card__text">Aşa cum scrie Screen Rant, cea mai dificilă parte din filmările la Downton Abbey a fost îmbrăcarea starurilor masculine ale serialului.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://upfit.one/ghid-fit-tot-ce-e-nou-pe-netflix-romania-in-mai-2021" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Netflix</p>
                                    <h3 class="card__heading">Tot ce e nou pe Netflix România în mai 2021</h3>
                                    <p style = {{marginTop: '140px'}} class="card__text">Se strigă „acțiune” pe platoul de binging Netflix! În luna mai te poți bucura de numeroase noutăți în materie de filme și seriale originale bogate în acțiune, cu povești intense ce te poartă în călătorii pline de suspans.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.impact.ro/noutati-hbo-go-in-2021-ce-filme-noi-ne-asteapta-si-ce-se-intampla-cu-serialele-mult-asteptate-120943.html" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">HBO GO</p>
                                    <h3 class="card__heading">Noutăți HBO GO în 2021</h3>
                                    <p style = {{marginTop: '30px'}} class="card__text">Așa cum ne-a obișnuit la fiecare început de an și de data aceasta, HBO GO surprinde în luna ianuarie cu seriale mult așteptate de fani. Dacă în cazul unor se va divuza continuarea din 2020, unele, cum ar fi A Discovery of Witches, sezonul doi, se va difuza după doi ani de pauză.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.filmnow.ro/stiri/lauren-lapkus-din-orange-is-the-new-black-va-deveni-mamica-actrita-a-anuntat-ca-asteapta-primul-copil-59453" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1570657891791-e39a9d185540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Vedete</p>
                                    <h3 class="card__heading">LAUREN LAPKUS DIN "ORANGE IS THE NEW BLACK VA DEVENI MĂMICĂ</h3>
                                    <p style = {{marginTop: '5px'}} class="card__text">Lauren Lapkus, actrița care a interpretat-o pe Susan Fischer în "Orange Is The New Black", este în culmea fericirii, întrucât este însărcinată pentru prima oară. Vedeta, în vârstă de 35 de ani, a dat vestea cea mare zilele trecute, printr-o postare pe Instagram, în care anunța că este însărcinată cu o fetiță, care va veni pe lume vara aceasta.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.filmnow.ro/stiri/transformare-spectaculoasa-pentru-actorul-care-l-a-jucat-pe-gregor-in-got-julius-bjornsson-a-slabit-50-de-kilograme-59468" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1572560719854-04f478ba569b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Seriale TV</p>
                                    <h3 class="card__heading">TRANSFORMARE SPECTACULOASĂ PENTRU ACTORUL CARE L-A JUCAT PE GREGOR ÎN GOT</h3>
                                    <p style = {{marginTop: '40px'}} class="card__text">Hafþór Júlíus Björnsson, cunoscut, în special, pentru rolul lui Gregor Clegane, alias "Muntele", în serialul Games of Thrones, obișnuia să concureze în competițiile Strongman (atletismul de forță), iar în prezent a suferit o transformare uimitoare.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.filmnow.ro/stiri/trailerul-friends-reunion-a-cuccerit-internetul-cei-sase-prieteni-actori-si-au-emotionat-fanii-cu-legatura-lor-indestructibila-59425" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Seriale TV</p>
                                    <h3 class="card__heading">TRAILERUL "FRIENDS: REUNION" A CUCERIT INTERNETUL!</h3>
                                    <p style = {{marginTop: '20px'}} class="card__text">Trailerul pentru "Friends: Reunion" este aici! "Unde este cutia cu șervețele?" - întreabă Jennifer Aniston încă din debutul clipului ce le-a trezit emoții profunde nu doar celor șase actori principali, ci și fanilor care așteaptau de multă vreme să-i vadă în formula care i-a consacrat.</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.filmnow.ro/stiri/trailer-exploziv-pentru-the-hitmans-wifes-bodyguard-ryan-reynolds-samuel-l-jackson-si-salma-hayek-contra-lui-antonio-banderas-59200" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/original/2IQKMJRyismZkFRcrdvFhmvTfyx.jpg)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Film</p>
                                    <h3 class="card__heading">TRAILER EXPLOZIV PENTRU „THE HITMAN'S WIFE'S BODYGUARD”</h3>
                                    <p style = {{marginTop: '50px'}} class="card__text">Ryan Reynolds se întoarce în rolul Michael Bryce și este desemnat să se ocupe de o nouă misiune explozivă chiar de către fostul său coleg Darius Kincaid (Samuel L. Jackson) și de fosta soție a acestuia (Salma Hayek). Personajul negativ este interpretat de Antonio Banderas.</p>
                                </div>
                            </a>
                        <div>
                            </div>
                            </div>
                    </section>

                    <h1 style = {{color: 'white', fontFamily: 'Poppins', fontSize: '35px'}}>Trailere <span class="badge bg-secondary">New</span></h1> 

                    <section style = {{marginTop: '-50px', marginBottom: '-80px'}} class="hero-section">
                        <div class="card-grid">
                            <a class="card-new" href="https://www.youtube.com/watch?v=PwpPneZS5ew" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rEm96ib0sPiZBADNKBHKBv5bve9.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Film</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">Tom Clancy's Without Remorse</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.youtube.com/watch?v=1VIZ89FEjYI" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Film</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">Raya and the Last Dragon</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://youtu.be/IWBsDaFWyTE" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p style = {{marginLeft: '85px'}} class="card__category">Film</p>
                                    <h3 style = {{paddingTop: '170px', marginLeft: '90px'}} class="card__heading">Luca</h3>
                                    <p style = {{marginTop: '120px', fontSize: '30px', marginLeft: '87px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://youtu.be/BsOmYpP4UDU" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Film</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">Those Who Wish Me Dead</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                        <div>
                            </div>
                            </div>
                    </section>

                    <section style = {{marginTop: '-130px', marginBottom: '-80px'}} class="hero-section">
                        <div class="card-grid">
                            <a class="card-new" href="https://www.youtube.com/watch?v=PwpPneZS5ew" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cDzi8k46fpIfmPxt6xOHj7MK5OD.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Serial</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">Alfredino - Una storia italiana</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://www.youtube.com/watch?v=1VIZ89FEjYI" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p style = {{marginLeft: '85px'}} class="card__category">Serial</p>
                                    <h3 style = {{paddingTop: '170px', marginLeft: '90px'}} class="card__heading">Loki</h3>
                                    <p style = {{marginTop: '120px', fontSize: '30px', marginLeft: '87px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://youtu.be/IWBsDaFWyTE" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6kbAMLteGO8yyewYau6bJ683sw7.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Serial</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">The Falcon and the Winter Soldier</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                            <a class="card-new" href="https://youtu.be/BsOmYpP4UDU" target='_blank'>
                                <div class="card__background" style = {{backgroundImage: 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/WjQmEWFrOf98nT5aEfUfVYz9N2.jpg)', boxShadow: '0px 4px 7px rgba(0,0,0,.9)'}}></div>
                                <div class="card__content">
                                    <p class="card__category">Serial</p>
                                    <h3 style = {{paddingTop: '170px'}} class="card__heading">The Bad Batch TV Series</h3>
                                    <p style = {{marginTop: '100px', fontSize: '30px'}} class="card__text">2021</p>
                                </div>
                            </a>
                        <div>
                            </div>
                            </div>
                    </section>

                </div>

                <h1 style = {{color: 'white', fontFamily: 'Poppins', fontSize: '35px', marginTop: '10px'}}>Actori celebri</h1> 

                <div style = {{backgroundColor: '#22254b', marginTop: '-150px', marginBottom: '-120px'}} class="container-actors">
                    <div class="card-actors">
                        <img src="https://www.radiooltenia.ro/wp-content/uploads/2016/05/Morgan-Freeman.jpg" alt="Person" class="card__image"></img>
                        <p class="card__name">Morgan Freeman</p>
                        <p style = {{marginTop: '-20px'}}><i>The Shawshank Redemption, Se7en, Bruce Almighty, The Bucket List</i></p>
                        <div class="grid-container">

                        <div class="grid-child-posts">
                            30 mil
                        </div>

                        <div class="grid-child-followers">
                            9.3K Likes
                        </div>

                        </div>
                        <ul class="social-icons">
                        <li><a href="https://www.imdb.com/name/nm0000151/" target='_blank'><i class="fa fa-imdb"></i></a></li>
                        <li><a href="https://twitter.com/morgan_freeman" target='_blank'><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/MorganFreeman" target='_blank'><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=Ch5MEJk5ZCQ" target='_blank'><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>

                    <div class="card-actors">
                        <img src="https://www.avantaje.ro/wp-content/uploads/2020/01/Leonardo-DiCaprio.jpg" alt="Person" class="card__image"></img>
                        <p class="card__name">Leonardo DiCaprio</p>
                        <p style = {{marginTop: '-20px'}}><i>Titanic, Shutter Island, The Wolf of Wall Street, The Revenant, Inception</i></p>
                        <div class="grid-container">

                        <div class="grid-child-posts">
                            18 mil
                        </div>

                        <div class="grid-child-followers">
                            4.9K Likes
                        </div>

                        </div>
                        <ul class="social-icons">
                        <li><a href="https://www.imdb.com/name/nm0000138/" target='_blank'><i class="fa fa-imdb"></i></a></li>
                        <li><a href="https://twitter.com/LeoDiCaprio" target='_blank'><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/LeonardoDiCaprio" target='_blank'><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=JhWo1PXL330" target='_blank'><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>

                    <div class="card-actors">
                        <img style = {{height: '150px'}} src="https://www.geffenplayhouse.org/site/assets/files/4153/bryancranston-1000x1400.jpg" alt="Person" class="card__image"></img>
                        <p class="card__name">Bryan Cranston</p>
                        <p style = {{marginTop: '-20px'}}><i>Breaking Bad, The Upside, El Camino: A Breaking Bad Movie, Your honor</i></p> 
                        <div class="grid-container">

                        <div class="grid-child-posts">
                            4.5 mil
                        </div>

                        <div class="grid-child-followers">
                            5.4K Likes
                        </div>

                        </div>
                        <ul class="social-icons">
                        <li><a href="https://www.imdb.com/name/nm0186505/" target='_blank'><i class="fa fa-imdb"></i></a></li>
                        <li><a href="https://twitter.com/BryanCranston" target='_blank'><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/thebryancranston" target='_blank'><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=VX1Dst3GnSs" target='_blank'><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>

                </div>


                <div style = {{backgroundColor: '#22254b', marginBottom: '-20px', marginLeft: '-780px', color: 'gray', fontFamily: "Poppins", paddingTop: '10px'}}>
                    <p style = {{marginLeft: '-350px'}}><TiInfoLargeOutline style = {{width: '30px', height: '30px', marginTop: '-3px', marginRight: '-5px'}}></TiInfoLargeOutline> INFO:</p>
                    <p style = {{marginTop: '-10px', marginLeft: '-41px', marginBottom: '21px'}}>Fiecare cardbox de pe pagina este <i>clickable</i></p>
                    <p style = {{marginTop: '-10px', marginLeft: '250px'}}>Stirile de pe pagina provin din surse variate (Film Now, Cinemagia, UpFit, Impact)</p>
                    <p style = {{marginTop: '-10px', marginLeft: '-60px'}}>Trailerele de pe pagina provin de pe <ImYoutube2 style = {{width: '40px', height: '40px', marginTop: '-1px'}}></ImYoutube2></p>
                </div>

                <ScrollToTop></ScrollToTop>

                <Footer></Footer>
                <SocialButtonsBar></SocialButtonsBar>
            </div>
        </div>
    )
}

export default Noutati
