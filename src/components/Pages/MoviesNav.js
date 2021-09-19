import React from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuId } from 'uuid';

const MoviesNav = ({ id, path}) => {

        const nextId = parseInt(id) + 1;
            const prevId = parseInt(id) - 1;
    
            const prevLink = {
              pathname: `path/${prevId}`,
              key: uuId(), // we could use Math.random, but that's not guaranteed unique.
              state: {
                applied: true
              }
            };
            const nextLink = {
              pathname: `path/${nextId}`,
              key: uuId(), // we could use Math.random, but that's not guaranteed unique.
              state: {
                applied: true
              }
            };

            if(id > 1){
                return (
                    <div className='navigation'>
                  <Link to={prevLink} >
                    <div className='navigation_item navigation_item__prev'>
                      {`<`} Previous Page
                    </div>
                  </Link>
                  <Link to={nextLink}>
                    <div className='navigation_item navigation_item__next'>
                      Next Page {'>'}
                    </div>
                  </Link>
                  </div>
            )
        } else if(id === 1 ){
            return (
                <div className='navigation'>
              
                <div className='navigation_item navigation_item__prev'>
                  {`<`} Previous Page
                </div>

              <Link to={nextLink}>
                <div className='navigation_item navigation_item__next'>
                  Next Page {'>'}
                </div>
              </Link>
              </div>
        )
        }

}

export default MoviesNav;