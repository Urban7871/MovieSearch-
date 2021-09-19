import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MultiSearch from '../Search/MultiSearch';
import useApiRequest from '../useApiRequest';

import './Header.scss'
import './HeaderBlack.scss'

const HeaderBlack = ({ query, setQuery }) => {
    
    return (
    <div className='header2'>  
        <div className='header_links'>
        <h2>
            <Link to='/' style={{color: 'white'}}>
            MovieWeb
            </Link>
        </h2>
        <div className='list'>
                <h4>
                    Movies
                </h4>      
                <ul className='list_items'>
                    <Link to='/movies/popular/1'>
                    <li>Popular</li>
                    </Link>
                    <Link to='/movies/top_voted/1'>
                    <li>Top Voted</li>
                    </Link>
                    <Link to='/movies/upcoming/1'>
                    <li>Upcoming</li>
                    </Link>
                    <Link to='/movies/now_playing/1'>
                    <li>Now Playing</li>
                    </Link>
                </ul>
        </div>
        <div className='list'>
                <h4>
                    TV Shows
                </h4>
                <ul className='list_items list_items__tv'>
                    <Link to='/tv'>
                    <li>Popular</li>
                    </Link>
                    <Link to='/tv/top_voted'>
                    <li>Top Voted</li>
                    </Link>
                    <Link to='/tv/upcoming'>
                    <li>Upcoming</li>
                    </Link>
                    <Link to='/tv/now_playing'>
                    <li>Now Playing</li>
                    </Link>
                </ul>
        </div>
        </div>
        <div className='header_search'>
            <MultiSearch  query={query} setQuery={setQuery} />
        </div>

    </div>
)}

export default HeaderBlack