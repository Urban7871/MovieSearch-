import React from 'react';
import useApiRequest from '../useApiRequest';

const RenderSimilar = ({ id }) => {

    const{ data, isLoaded, error } = useApiRequest(`movie/${id}/similar`);

    if(data === null) {
        return <div>Loading...</div>
    } else {
        return (
            data.results.map((movie) => {
                return(
                    <div key={movie.id}>
                        {movie.title}
                    </div>
                )
            })
        )
    }
}

export default RenderSimilar;