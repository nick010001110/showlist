import React from 'react'
import Navbar from './components/presentational/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'


import TrendingShowsContainer from './components/containers/TrendingShowsContainer';
import PopularShowsContainer from './components/containers/PopularShowsContainer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
   
     <Route exact path='/trending' component={TrendingShowsContainer} />
     <Route exact path='/' component={TrendingShowsContainer} />
     <Route exact path='/popular' component={PopularShowsContainer} />
     
   
  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
