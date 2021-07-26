import React from 'react';
import { Link } from 'react-router-dom';


const PlaceholderPage = () => {

    return(
        <div>
            <h3 style={{fontWeight: 400, fontSize: '20px'}}>
                There should be another page, but it wouldn't differ
                much from other ones, you can see in this project.
                It would probably be just another API call and list of results.
                That's why i decided not to spend time on something i've done 
                multiple times in this project. 

                There are some links to actually functional pages: 
        <br></br>
                <Link to='/'>Main Page</Link>
        <br></br>
                <Link to ='/search/harry potter'>Search Page</Link>
        <br></br>
                <Link to='/movie/27205'>Movie Page</Link>
        <br></br>
                <Link to='/person/380'>Person Page</Link>
        <br></br>
                Thank you for visiting my page :)
            </h3>
        </div>
    )
}

export default PlaceholderPage