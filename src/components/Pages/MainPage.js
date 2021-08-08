import React from 'react';
import { Link } from 'react-router-dom';
import PopularSlider from '../Sliders/PopularSlider';
import UpcomingSlider from '../Sliders/UpcomingSlider';
import useApiRequest from '../useApiRequest';

import './MainPage.scss';


const MainPage = () => {

    const { data, isLoaded, error } = useApiRequest('movie/popular');
    
    const generateImage = () => {
    if(data === null) {
        return 'Loading...'
    } else {
       const number =  Math.floor(Math.random() * (19 - 0 + 1) + 0);
     return (
         <div className='wrapper'>
            <img className='background_img' src={`https://image.tmdb.org/t/p/original/${data.results[number].backdrop_path}`} />   
            <Link to={`/movie/${data.results[number].id}`}>
            <h3 className='background_title'>{data.results[number].title}</h3>
            </Link> 
         </div>
     )
    }
    }
    return(
        <div>
            <div className='background'>
                {generateImage()}
            </div>
            <div>
                <h4></h4>
            </div>
            <main>
            <PopularSlider />
            <UpcomingSlider />
            </main>
        </div>
        ) 
        
}

export default MainPage