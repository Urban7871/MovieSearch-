import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useApiRequest = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(`
          https://api.themoviedb.org/3/${endpoint}`, {
            params: {
              api_key: "6887f1d67a54680fad363717ca703331"
            }
          })
          .then(response => {
            console.log(endpoint, data)
            setIsLoaded(true);
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          });
      };
      fetchData();
    }, [`https://api.themoviedb.org/3/${endpoint}`]);
  
    return { error, isLoaded, data };
  };

  export default useApiRequest