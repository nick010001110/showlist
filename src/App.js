import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'

import Home2 from './components/Home2'
import Show from './components/Show'
import ShowsContainer from './components/ShowsContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Route exact path='/' component={Home} />
     <Route path='/trending' component={ShowsContainer} />
     <Route path='/home2' component={Home2} />
     <Route path='/shows/:show_id' component={Show} />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
