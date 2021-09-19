import React, { useState } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';


import Header from './Header/Header';
import HeaderBlack from './Header/HeaderBlack';
import MainPage from './Pages/MainPage';
import MoviePage from './Pages/MoviePage';
import MoviesPage from './Pages/MoviesPage';
import PersonPage from './Pages/PersonPage';
import PlaceholderPage from './Pages/PlaceholderPage';
import SearchList from './Pages/SearchList';


const App = () => {
    const [query, setQuery] = useState('harry potter');

    return(
        <BrowserRouter>
        <div>

            
            <Route path='/movie/:id' exact>
            <Header  query={query} setQuery={setQuery}/>
                <MoviePage />
            </Route>

            <Route path='/movies/:value/:id'>
                <HeaderBlack query={query} setQuery={setQuery}/>
                <MoviesPage />
            </Route>

            <Route path='/person/:id' exact>
                <HeaderBlack  query={query} setQuery={setQuery}/>
                <PersonPage />
            </Route>

            <Route path='/' exact>
                <Header  query={query} setQuery={setQuery}/>
                <MainPage />
            </Route>

            <Route path='/placeholder' exact component={PlaceholderPage} />


            <Route path='/search/:query' exact>
            <Header  query={query} setQuery={setQuery}/>
                <SearchList query={query} />
            </Route>
        </div>
        </BrowserRouter>
    )
}

export default App;