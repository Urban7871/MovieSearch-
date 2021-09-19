import React from 'react';
import { Link } from 'react-router-dom';
import useApiRequest from '../../useApiRequest';

import './RenderSimilar.scss'

const RenderSimilar = ({ id, checked }) => {

    const{ data, isLoaded, error } = useApiRequest(`movie/${id}/similar`);


    if(data === null) {
        return <div>Loading...</div>
    } else if(data !== null && checked === true) {
        return (
            data.results.map((movie) => {
                return(
                    <div key={movie.id} className='similar'>
                        <Link to={`/movie/${movie.id}`}>
                        <h3 className='similar_title'>
                            {movie.title}
                        </h3>
                        </Link>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                            className='similar_poster' />
                    </div>
                )
            })
        )
    } else {
        return(
            data.results.slice(0, 4).map((movie) => {
                return(
                    <div key={movie.id} className='similar'>
                        <Link to={`/movie/${movie.id}`}>
                        <h3 className='similar_title'>
                            {movie.title}
                        </h3>
                        </Link>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                            className='similar_poster' />
                    </div>
                )
            })
        )
    }
}

export default RenderSimilar;