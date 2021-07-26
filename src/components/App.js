import React, { useState } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './Pages/MainPage';

import MoviePage from './Pages/MoviePage';
import PersonPage from './Pages/PersonPage';
import PlaceholderPage from './Pages/PlaceholderPage';
import SearchList from './Pages/SearchList';
import MultiSearch from './Search/MultiSearch';


const App = () => {
    const [query, setQuery] = useState('harry potter');

    return(
        <BrowserRouter>
        <div>
            <Header  query={query} setQuery={setQuery}/>

            
            <Route path='/movie/:id' exact>
                <MoviePage />
            </Route>

            <Route path='/person/:id' exact>
                <PersonPage />
            </Route>

            <Route path='/' exact component={MainPage} />

            <Route path='/placeholder' exact component={PlaceholderPage} />


            <Route path='/search/:query' exact>
                <SearchList query={query} />
            </Route>
        </div>
        </BrowserRouter>
    )
}

export default App;