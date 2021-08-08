import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MultiSearch from '../Search/MultiSearch';
import useApiRequest from '../useApiRequest';

import './Header.scss'

const Header = ({ query, setQuery }) => {

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
      if (window.scrollY < 401) {
        return setHeader("header")
      } else if (window.scrollY > 400.99) {
        return setHeader("header2")
      } 
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);

      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    
    return (
    <div className={header}>  
        <div className='header_links'>
        <h2>
            <Link to='/'>
            MovieWeb
            </Link>
        </h2>
        <div className='list'>
            <Link to='/list/movies'>
                <h4>
                    Movies
                </h4>
            </Link>
            <div className='list_items'>
            <ul>
                <li>
                    <Link to='/placeholder'>Popular</Link>
                </li>
                <li>
                    <Link to='/placeholder'>Now Playing</Link>
                </li>
                <li>
                    <Link to='/placeholder'>Upcoming</Link>
                </li>
                <li>
                    <Link to='/placeholder'>Top Voted</Link>
                </li>
            </ul>
            </div>
        </div>
        <div className='list'>
            <Link to='/list/tv'>
                <h4>
                    TV Shows
                </h4>
            </Link>
            <div className='list_items list_items__tv'>
            <ul>
                <li>
                    <Link to='/placeholder'>Popular</Link>
                </li>
                <li>
                    <Link to='/placeholder'>Air Today</Link>
                </li>
                <li>
                    <Link to='/placeholder'>Top Voted</Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
        <div className='header_search'>
            <MultiSearch  query={query} setQuery={setQuery} />
        </div>

    </div>
)}

export default Header