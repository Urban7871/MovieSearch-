import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RenderTv from '../Render/PersonPage/RenderTv';
import RenderMovie from '../Render/PersonPage/RenderMovie';
import useApiRequest from '../useApiRequest';

import './PersonPage.scss'


const PersonPage = () => {

    const {id} = useParams();
    const[movieData, setMovieData] = useState(null);
    const[tvData, setTvData] = useState(null);
    
    const {data, isLoaded, error} = useApiRequest(`person/${id}`);

    
    const renderImg = (data) => {
        if(data.profile_path === null) {
            return(
                <img src='https://e7.pngegg.com/pngimages/549/17/png-clipart-social-media-avatar-social-network-computer-icons-communication-social-media-computer-network-black.png'
                 alt={data.name}
                 className='personImage'/>
            )
        } else {
            return(
                <img src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
                alt={data.name}
                className='personImage'
                />
                )
        }
    }

    const renderDeathday = (data) => {
        if(data.deathday === null) {
            return <div> - Today</div>
        } else {
            return(
               <div> - {data.deathday}</div>
            )
        }
    }

    if(data !== null) {
        return(
            <div className='mainWrapper'>
              <div className='imgSection'>
                
                {renderImg(data)}
                <p style={{display: 'flex'}}>
                    {data.birthday}  {renderDeathday(data)}
                </p>
                    {data.place_of_birth}
                <p>
                    Known for {data.known_for_department}
                </p>
                <a href={data.homepage} target="_blank">
                    {data.homepage}
                </a>
              </div>
              <div className='bioSection'>
              <h2 className='name'>
                    {data.name}
                </h2>
                  <p>{data.biography}</p>
                    <div className='knownFor'>
                        <h3>Movies</h3>
                    <div className='movies'>
                      <RenderMovie id={id}/>
                    </div>
                    <div className='tv'>
                        <h3>Tv</h3>
                      <RenderTv id={id}/>
                    </div>
                  </div>
              </div>
        </div>
    )
} else {
    return(
        <div>Loading...</div>
    )
}
}

export default PersonPage