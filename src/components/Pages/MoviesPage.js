import react, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RenderLatest from '../Render/MoviesPage/RenderLatest';
import RenderPopular from '../Render/MoviesPage/RenderPopular';
import RenderTop from '../Render/MoviesPage/RenderTop';
import RenderUpcoming from '../Render/MoviesPage/RenderUpcoming';
import useApiRequest from '../useApiRequest';

import './MoviesPage.scss'

const MoviesPage = () => {
   const { value } = useParams();

   const renderList = () => {
       if(value === 'popular') {
           return <RenderPopular />
       } else if (value === 'now_playing'){
           return <RenderLatest />
       } else if (value === 'upcoming') {
           return <RenderUpcoming />
       } else if (value === 'top_voted') {
           return <RenderTop />
       } else {
           return <div>Sorry, this page does not exist</div>
       }
   }

    return (
        <div>
        <div className='movies'>
            <div className='movies_settings'>
                {value}
            </div>
            <div className='movies_results'>
                {renderList()}
            </div>
        </div>
        </div>
    )
}

export default MoviesPage;