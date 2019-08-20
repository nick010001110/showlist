import React from 'react' 
import { Link, withRouter} from 'react-router-dom'
const Navbar = () =>{ 
    return( 
        <nav className="nav-wrapper grey darken-3"> 
            <div className="container"> 
            <a className="brand-logo">Show List</a> 
                <ul className="right"> 
                   
                    <li><Link to="/trending" >Trending</Link></li> 
                    <li><Link to="/"> Home</Link></li> 
                    <li><Link to="/home2"> Home2</Link></li> 
                </ul> 
            </div> 
        </nav> 
) 
} 

export default withRouter(Navbar)