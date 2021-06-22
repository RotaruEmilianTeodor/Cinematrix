import React from 'react'
import { SiThemoviedatabase } from 'react-icons/si'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const ModalActors = ({id, name, character, profile_path, popularity}) => {
    return (
        <div>

            <div class="boxActors">
                <div class="cardActors">
                    <div class="imgBx">
                        <img src={profile_path ? (IMG_API + profile_path) : 'https://images.unsplash.com/photo-1546872006-42c78c0ccb29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'} alt={name}/>
                        <h5 style = {{color: 'white', float: 'left', position: 'absolute', top: 5, left: 5, backgroundColor: '#22254b', border: '1px solid white', borderRadius: 5, fontFamily: 'poppins', fontSize: '15px'}}>Popularitate: {popularity.toFixed(1)}
                        </h5>
                        <a style = {{position: 'absolute', top: 5, left: 50, fontFamily: 'poppins', marginLeft: '200px', color: 'black'}} href = {`https://www.themoviedb.org/person/${id}`} target='_blank' data-toggle="tooltip" data-placement="top" title="Mai multe info"><SiThemoviedatabase className = 'FaInfo'></SiThemoviedatabase></a>
                    </div>
                    <div class="detailsActors">
                        <h2>{name}<br></br><span>{character}</span></h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ModalActors

