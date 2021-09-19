import { assertExpressionStatement } from '@babel/types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RenderCredits from '../Render/SingleMoviePage/RenderCredits';
import RenderSimilar from '../Render/SingleMoviePage/RenderSimilar';
import RenderStaff from '../Render/SingleMoviePage/RenderStaff';
import RenderTrailer from '../Render/SingleMoviePage/RenderTrailer';

import useApiRequest from '../useApiRequest';

import './MoviePage.scss';

const MoviePage = () => {
    
    const {id} = useParams();

    const {data, isLoaded, error} = useApiRequest(`movie/${id}`);
    const [check, setCheck] = useState(false);

    const renderImg = (data) => {
        if(data.poster_path === null) {
            return(
                <img src='https://e7.pngegg.com/pngimages/549/17/png-clipart-social-media-avatar-social-network-computer-icons-communication-social-media-computer-network-black.png'
                 alt={data.name}
                 className='movieImage'/>
            )
        } else {
            return(
                <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                alt={data.name}
                className='movieImage'
                />
                )
        }
    }

    const renderGenres = (data) => {
        if(data === null) {
            return <div>Loading...</div>
        } else {
            return(
                data.genres.map(genre => {
                    return(
                        <div>
                            {genre.name}
                        </div>
                    )
                })
            )
        }
    }

    const renderAdult = () => {
        if(data.adult === true) {
            return <div>adult</div>
        } else {
            return <div>Family Friendly</div>
        }
    }

    const renderBackground = (data) => {
        if(data === null) {
            return <div>Loading...</div>
        } else {
            return <img className='background_image' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} /> 
        }
    }


    if(data !== null) {
        return(
            <div>
            {renderBackground(data)}
        <div className='mainWrapper moviesWrapper'>
            <div className='imgSection'>
            <div className='imgSection_title'>
              <h2>{data.title}</h2>
              <h4>{data.release_date}</h4>
            </div>
            {renderImg(data)}
            <p>{data.tagline}</p>
            <p>{renderAdult()}</p>
            <div className='imgSection_genres'>
                {renderGenres(data)}
            </div>
            </div>

            <div className='bioSection bioSectionMovie'>
                <h3>Overview</h3>
                <p>{data.overview}</p>
                <RenderTrailer id={id} />
                <RenderCredits id={id}/>
                <RenderStaff id={id} />
            </div>
        </div>
        <h3 
        style={{marginLeft: '11rem'}}>Similar Movies</h3>
        <div className='similar_wrapper'>
            <RenderSimilar id={id} checked={check}/>
        </div>

        <div className='mb1'>
        <label className='loadMore'>
        <input type='checkbox' checked={check}
        onClick={() => setCheck(!check)} 
        className='loadMore loadMore_check'/>
        Load More...
        </label>
        </div>
        </div>
    )
} else {
    return(
        <div>Loading...</div>
    )
}
}

export default MoviePage