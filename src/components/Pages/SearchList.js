import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Cards/MovieCard';
import PersonCard from '../Cards/PersonCard';
import useApiRequest from '../useApiRequest';

import './List.scss'

const SearchList = ({ query }) => {
    const[term, setTerm] = useState(null);

    
    useEffect(() => {
        const search = async () =>{
             await axios.get(`https://api.themoviedb.org/3/search/multi`, {
                params: {
                    api_key: "6887f1d67a54680fad363717ca703331",
                    query: query
                 }
             }).then((response) => {
                 setTerm(response.data.results)
                 console.log(response.data.results)
             }).catch((error) => {
                 console.log(error)
             })
     }
     search();
     }, [query])
     
     let movies = 0;

    const renderMovieList = () => {
        if(term === null) {
            return <div>Loading...</div>
        } else {
            return(
                term.map(movie => {
                    movies++;
                    return <MovieCard movie={movie} key={movie.id}/>
                })
            )
        }
    }
    let persons = 0;

    const renderPersonSlider = () => {
        if(term === null) {
            return <div>Loading...</div>
        } else {
            return(
                term.map(person => {
                    persons++;
                    return <PersonCard person={person} key={person.id}/>
                })
            )
        }
    }

    return (
        <div>
            <div className='listWrapper'>{renderMovieList()}</div>
            <div className='personsWrappper'
            style={{display: 'grid', gridTemplateRows: `repeat(${persons/2})`}}
            >
                {renderPersonSlider()}
            </div>
        </div>
    )
}

export default SearchList