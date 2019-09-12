import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'

import Home2 from './components/Home2'

import TrendingShowsContainer from './components/TrendingShowsContainer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Route exact path='/' component={Home} />
     <Route path='/trending' component={TrendingShowsContainer} />
     
     <Route path='/home2' component={Home2} />
  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
