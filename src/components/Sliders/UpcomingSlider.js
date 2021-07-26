import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Slider from './Slider';

import './UpcomingSlider.scss';

const UpcomingSlider = () => {
    const [transform, setTransform] = useState(0);
    const [upcoming, setUpcoming] = useState(null);

    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
            api_key: "6887f1d67a54680fad363717ca703331"
        }
    }).then((response) => {
        setUpcoming(response.data.results);
    });

    const generateClass = () => {
        if(window.innerWidth < 1000) {
            return 'slideLarge'
        } else {
            return 'slide'
        }
    }

    const renderSlide = () =>{
        if(upcoming === null){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
                upcoming.map(movie => {
                    return(
                        <div key={movie.id} className={generateClass()}>
                            <Link to={`/movie/${movie.id}`}>
                            <h2 className='title'>{movie.original_title}</h2>
                            </Link>
                            <div className='posterWrapper'>
                                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                                className='poster' />
                                <div className='flexColumn'>
                                <p>{movie.overview}</p>
                                    <div className='ratingWrapper'>
                                        <p>
                                        {movie.vote_average}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            )
        })
        )
    }
    };

    return(
        <div className='upcomingWrapper'>
            <Slider sliderTitle='Now playing' renderSlide={renderSlide} transform={transform} setTransform={setTransform}
            transformValue={55} times={18} 
            multiplier={1.818}/>
        </div>
    )
}

export default UpcomingSlider

