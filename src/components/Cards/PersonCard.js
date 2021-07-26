import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

import './PersonCard.scss'

const PersonCard = ({ person }) => {

    const renderGender = (person) => {
        if(person.gender === 1){
            return(
                <div>Woman
                </div>
            )
        } else {
            return(
                <div>Man</div>
            )
        }
    }

    const renderKnown = (person) => {
        if(!person.known_for){
            return null
        } else {
            return(
                person.known_for.map(movie =>{
                    return(
                        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
                    )
                })
            )
        }
    }

    const renderImg = (person) => {
        if(person.profile_path === null) {
            return(
                <img src='https://e7.pngegg.com/pngimages/549/17/png-clipart-social-media-avatar-social-network-computer-icons-communication-social-media-computer-network-black.png' alt={person.name}/>
            )
        } else {
            return(
                <img src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
                alt={person.name}
                className='personImage'
                />
                )
        }
    }


    if(person.media_type !== 'person') {
        return(
            <div className='movieCard displayNone'></div>
        )
    } else {
        return(
            <div key={person.id} className='personCard'>
                <div className='imageSection'>
                <Link to={`/person/${person.id}`}>
                <h2>
                    {person.name}
                </h2>
                </Link>
                {renderImg(person)}
                 </div>

                 <div className='overviewSection'>

                     <div className='aboutSec'>
                    <p className='knownFor overviewEl'>
                        Known for {person.known_for_department} |
                    </p>
                    <p className=' overviewEl'>
                        {renderGender(person)}
                    </p>
                     </div>

                    <div className='moviesSec'>
                    <div className='moviesKnownFor  overviewEl'>
                        {renderKnown(person)}
                    </div>
                    </div>
                 </div>
        </div>
    )
}
}

export default PersonCard