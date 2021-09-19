import React from 'react';
import { Link } from 'react-router-dom';
import useApiRequest from '../../useApiRequest';

const RenderMovie = ({ id }) => {
    const {data, isLoaded, error } = useApiRequest(`person/${id}/movie_credits`)
    

    const renderTvs = () => {

        if(data !== null) {
            return(
                data.cast.slice(0, 5).map(movie => {
                    return(
                            <div className='movieWrapper'>
                            <Link to={`/movie/${movie.id}`}>
                                <div  className='margin0'>
                                <h4>{movie.title}</h4>
                                <p>{movie.release_date}</p>
                                </div>
                                <div className='movieBack'
                                style={{backgroundImage: `url('https://image.tmdb.org/t/p/w300/${movie.poster_path}')`}}
                                >
                                </div>
                             </Link>
                        </div>
                    )
                })
                )
            } else {
                return <div>Loading...</div>
            }
        }

        return(
            <div className='movies'>{renderTvs()}</div>
        )
}

export default RenderMovie