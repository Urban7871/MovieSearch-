import React from 'react';
import { Link } from 'react-router-dom';
import useApiRequest from '../useApiRequest';

const RenderTrailer = ({ id }) => {
    const { data, isLoaded, error } = useApiRequest(`/movie/${id}/videos`);

    console.log(data);
    const RenderTrailers = () => {
        if(data !== null) {
            let movie = data.results[0];
            return (
                <div>
                    <iframe 
                    width='853'
                    height='480'
                    src={`https://www.youtube.com/embed/${movie.key}`} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"/>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }

    if(isLoaded) {
        return (
            <div className='iframe_wrapper'>
                {RenderTrailers()}
            </div>
    )
    } else {
        return(
            <div>
                Loading...
            </div>
        )
    }
}

export default RenderTrailer