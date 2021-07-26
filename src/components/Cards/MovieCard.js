import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
   

    const renderVote = (movie) => {
    if(movie.vote_average >= 7){
        return <div className='voteGreen voteCount' style={{width: `${movie.vote_average * 10}%`}}>{movie.vote_average}/10</div>
    } else if(4 < movie.vote_average < 7) {
        return <div className='voteYellow voteCount' style={{width: `${movie.vote_average * 10}%`}}>{movie.vote_average}/10</div>
    } else if(4 >= movie.vote_average && movie.vote_average !== 0) {
        return <div className='voteRed voteCount' style={{width: `${movie.vote_average * 10}%`}}>{movie.vote_average}/10</div>
    }
    }
    //https://bibliotekant.pl/wp-content/uploads/2021/04/placeholder-image.png

    const renderImg = (movie) => {
        if(movie.poster_path === null) {
            return(
                <img src='https://bibliotekant.pl/wp-content/uploads/2021/04/placeholder-image.png'
                 alt={movie.title}
                 className='movieImage'
                 />
            )
        } else {
            return(
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
             alt={movie.title}
             className='movieImage'
             />
                )
        }
    }

    if(movie.media_type !== 'person') {
        return(
            <div key={movie.id} className='movieCard'>
            <Link to={`/movie/${movie.id}`}>
            <h2 className='movieTitle'>
                {movie.title}   
            </h2>
            <div className='movieDateWrapper'>
            <p className='movieDate'>
                {movie.release_date}
            </p>
            </div>
            </Link>
                <div className='imageSection'>
                {renderImg(movie)}
             </div>
             <div className='descriptionSection'>
                <p>{movie.overview}</p>
             </div>
                <div className='voteWrapper'>
                {renderVote(movie)}
                </div>
        </div>
    )
} else {
    return(
        <div className='personCard displayNone'>
        </div>
    )
}
}

export default MovieCard