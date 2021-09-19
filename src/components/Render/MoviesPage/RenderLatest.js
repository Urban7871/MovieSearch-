import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../../Cards/MovieCard';


const RenderLatest = () => {
    const { id } = useParams();
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = () => {
          axios
            .get(`https://api.themoviedb.org/3/movie/now_playing`, {
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
      }, [`https://api.themoviedb.org/3/movie/now_playing`]);

    
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
                <div className='loadMore'>
                </div>
            </div>
        )
}


export default RenderLatest