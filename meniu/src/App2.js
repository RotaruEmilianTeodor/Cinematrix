import React from 'react'
import './App.css';
import Home from './Navbar + componente/Home'
import Recomandari from './Navbar + componente/Recomandari'
import Filme from './Navbar + componente/Filme'
import Seriale from './Navbar + componente/Seriale'
import Contact from './Navbar + componente/Contact'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Profil from './Navbar + componente/Profil'
import { Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Reset from './Login/Reset';
import NewPassword from './Login/NewPassword'
import ListaPersonalizata from './Navbar + componente/ListaPersonalizata'
import DeVazut from './Navbar + componente/DeVazut'
import Vazute from './Navbar + componente/Vazute';
import Adauga from './Navbar + componente/Adauga';
import Ajutor from './Navbar + componente/Ajutor'
import RecomandariFilme from './Navbar + componente/RecomandariFilme';
import RecomandariSeriale from './Navbar + componente/RecomandariSeriale';
import ModalSimilarMovies from './Componente mici (Film + Serial)/ModalSimilarMovies';
import Noutati from './Navbar + componente/Noutati';
import Actori from './Navbar + componente/Actori';
import ActoriFilme from './Navbar + componente/ActoriFilme';
import ActoriSeriale from './Navbar + componente/ActoriSeriale';
import ModalActors from './Componente mici (Film + Serial)/ModalActors';
import Profil2 from './Navbar + componente/Profil2';
import ProfilMare from './Navbar + componente/ProfilMare';
import MesajConfrmareInregistrare from './Componente mici (Film + Serial)/MesajConfrmareInregistrare';

const App2 = ({ }) => {
    return (
        <div>
            <Route exact path = '/' component = {Login}></Route>
            <Route exact path = '/inregistrare' component = {Signup}></Route>
            <Route exact path = '/profil' component = {Profil}></Route>
            <Route exact path = '/profil-2' component = {Profil2}></Route>
            <Route exact path = '/confirmare' component = {MesajConfrmareInregistrare}></Route>
            <Route exact path = '/profil-mare' component = {ProfilMare}></Route>
            <Route exact path = '/reset' component = {Reset}></Route>
            <Route exact path = '/reset/:token' component = {NewPassword}></Route>
            <Route exact path = '/home' component = {Home}></Route>
            <Route exact path = '/noutati' component = {Noutati}></Route>
            <Route exact path = '/recomandari' component = {Recomandari}></Route>
            <Route exact path = '/recomandari-filme' component = {RecomandariFilme}></Route>
            <Route exact path = '/recomandari-filme-similar' component = {ModalSimilarMovies}></Route>
            <Route exact path = '/recomandari-seriale' component = {RecomandariSeriale}></Route>
            <Route exact path = '/lista-personalizata' component = {ListaPersonalizata}></Route>
            <Route exact path = '/de-vazut' component = {DeVazut}></Route>
            <Route exact path = '/vazute' component = {Vazute}></Route>
            <Route exact path = '/adauga' component = {Adauga}></Route>
            <Route exact path = '/filme' component = {Filme}></Route>
            <Route exact path = '/seriale' component = {Seriale}></Route>
            <Route exact path = '/actori' component = {Actori}></Route>
            <Route exact path = '/actori-filme' component = {ActoriFilme}></Route>
            <Route exact path = '/actori-seriale' component = {ActoriSeriale}></Route>
            <Route exact path = '/actori-modal' component = {ModalActors}></Route>
            <Route exact path = '/contact' component = {Contact}></Route>
            <Route exact path = '/ajutor' component = {Ajutor}></Route>
        </div>
    )
}

export default App2
