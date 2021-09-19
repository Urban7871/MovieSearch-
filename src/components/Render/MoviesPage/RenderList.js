import React from 'react';
import MovieCard from '../../Cards/MovieCard';


const RenderList = ({ data }) => {

    if(data !== null) {
        return (
            <div>Loading...</div>
            ) 
        } else {
            return (
                data.results.map((movie) => {
                    return (
                        <MovieCard movie={movie} key={movie.id}/>
                        )
                    })
                    )
        }
                
}

export default RenderList