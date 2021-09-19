import { transform } from 'async';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import useApiRequest from '../useApiRequest';
import Slider from './Slider';


const PopularSlider = () => {
    const [transform, setTransform] = useState(0);

    const { data, isLoaded, error } = useApiRequest(
        'movie/popular'
    );

    const rating = (vote) => {
        if(vote < 4) {
            return 'under4'
        } else if (vote < 7) {
            return 'over4'
        } else {
            return 'over7'
        }
    }

    const width = (vote) => {
        let divWidth = vote * 10 + '%';
        return {width: divWidth}
    }

    const renderSlide = () =>{
        if(data === null){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
                data.results.map(movie => {
                    return(
                        <div key={movie.id} className='slide'>
                            <Link to={`/movie/${movie.id}`}
                            style={{ textDecoration: 'none' }}>
                            <h2 className='title'
                            style={{color: 'black'}}>
                                {movie.original_title}</h2>
                            </Link>
                            <div>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                            className='poster' />
                            </div>
                            <p>
                                {movie.vote_average}/10
                            </p>
                            <div className={rating(movie.vote_average)}
                            style={width(movie.vote_average)}></div>
                        </div>
            )
        })
        )
    }
    };

    return (
        <div>
            <Slider sliderTitle='Trending' 
              renderSlide={renderSlide} 
              transform={transform} 
              setTransform={setTransform}
              transformValue={20}
              times={14}
              multiplier={1.65}/>
        </div>
        )
}

export default PopularSlider