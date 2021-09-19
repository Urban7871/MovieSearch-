import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MovieCard from '../../Cards/MovieCard';
import MoviesNav from '../../Pages/MoviesNav';


const RenderTop = () => {
    const { id } = useParams();
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = () => {
          axios
            .get(`https://api.themoviedb.org/3/movie/top_rated`, {
              params: {
                api_key: "6887f1d67a54680fad363717ca703331",
                page: id
              }
            })
            .then(response => {
                setData(response.data);
              console.log(response.data)
            })
        };
        fetchData();
      });

    
    const renderList = () => {
        if(data === null) {
            return (
                <div>Loading...</div>
                ) 
                } else {
                    return (
                        data.results.map((movie) => {
                            return (
                                <MovieCard movie={movie} />
                                )
                            })
                            )
                }
            }
            

        return (
            <div>
                {renderList()}
                <MoviesNav id={id} path={'/movies/popular'}/>
            </div>
        )
}

export default RenderTop