import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import MovieCard from '../../Cards/MovieCard';
import useApiRequest from '../../useApiRequest';


const RenderPopular = () => {
    let { id } = useParams();
    const [ data, setData ] = useState(null);
    const [ number, setNumber ] = useState(1);
    let history = useHistory();

    useEffect(() => {
        const fetchData = () => {
          axios
            .get(`https://api.themoviedb.org/3/movie/popular`, {
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
      }, [`https://api.themoviedb.org/3/movie/popular`]);
      
      let nextId = parseInt(id) + 1;
      let prevId = parseInt(id) - 1;
    
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
                <div className='navigation'>
                  <Link to={`/movies/popular/${parseInt(prevId)}`}
                  onClick={() => {
                    axios
                    .get(`https://api.themoviedb.org/3/movie/popular`, {
                      params: {
                        api_key: "6887f1d67a54680fad363717ca703331",
                        page: id
                      }
                    })
                    .then(response => {
                      setData(response.data);
                      console.log(response.data)
                    })
                  }}>
                    <div className='navigation_item navigation_item__prev'>
                      {`<`} Previous Page
                    </div>
                  </Link>
                  <Link to={`/movies/popular/${parseInt(nextId)}`}
                  onClick={() => {
                    axios
                    .get(`https://api.themoviedb.org/3/movie/popular`, {
                      params: {
                        api_key: "6887f1d67a54680fad363717ca703331",
                        page: id
                      }
                    })
                    .then(response => {
                      setData(response.data);
                      console.log(response.data)
                    })
                  }}>
                    <div className='navigation_item navigation_item__next'>
                      Next Page {'>'}
                    </div>
                  </Link>
                  </div>
            </div>
        )
}

export default RenderPopular