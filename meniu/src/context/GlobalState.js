import React, { CreateContext, useReducer, useEffect, createContext } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //asa se salveaza in localStorage
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchlist = movie => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const removeMovieFromWatchList = (id) => {
        dispatch({type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: 'ADD_MOVIE_TO_WATCHED', payload: movie})
    }

    const moveToWatchList = (movie) => {
        dispatch({type: 'MOVE_TO_WATCH_LIST', payload: movie})
    }

    const removeFromWatched = (id) => {
        dispatch({type: 'REMOVE_FROM_WATCHED', payload: id})
    }

    return (
        <GlobalContext.Provider value = {{ 
            watchList: state.watchList, 
            watched: state.watched, 
            addMovieToWatchlist,
            removeMovieFromWatchList,
            addMovieToWatched,
            moveToWatchList,
            removeFromWatched 
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}