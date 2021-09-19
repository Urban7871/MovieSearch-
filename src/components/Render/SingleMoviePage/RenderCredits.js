import React from 'react';
import { Link } from 'react-router-dom';
import useApiRequest from '../../useApiRequest';

const RenderCredits =({ id }) => {

    const { data, isLoaded, error } = useApiRequest(`/movie/${id}/credits`);

    console.log(data);

    const RenderCast = () => {
        if(data !== null) {
            return (
                data.cast.slice(0, 6).map(member => {
                    return(
                        <div>
                            <div className='credit_name'>
                            <Link to={`/person/${member.id}`}>
                            <h4>
                                {member.name}
                                 <span style={{fontWeight: 400}}> as </span>
                            </h4>
                            </Link>
                            <h4>
                                {member.character}
                            </h4>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w300/${member.profile_path}`} 
                            className='memberImage'
                            alt={member.name}
                            />
                        </div>
                    )
                })
            )
        } else {
            return <div>Loading...</div>
        }
    }

    if(isLoaded) {
        return (
            <div className='castWrapper'>
                {RenderCast()}
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

export default RenderCredits