import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useApiRequest from '../../useApiRequest';

import '../../Pages/PersonPage.scss';

const RenderTv = ({ id }) => {

    const {data, isLoaded, error } = useApiRequest(`person/${id}/tv_credits`)
    

    const renderTvs = () => {

        if(data !== null) {
            return(
                data.cast.slice(0, 5).map(movie => {
                    return(
                            <div className='movieWrapper'>
                            <Link to={`/movie/${movie.id}`}>
                                <h4 className='margin0'>
                                {movie.original_name}
                                </h4>
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
            <div className='movies movies_tv'>
                {renderTvs()}
            </div>
        )
}

export default RenderTv