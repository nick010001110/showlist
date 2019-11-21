import React from 'react' 
import { Link, withRouter} from 'react-router-dom'

function  Navbar(){

    return( 
        <nav className="nav-wrapper grey darken-3"> 
            <div className="container"> 
            <a className="brand-logo" href='/trending'>Show List  </a> 
                <ul className="right"> 
                   
                    <li><Link to="/trending" >Trending</Link></li> 
                    <li><Link to="/popular" >Popular</Link></li> 
                 
                  
                </ul> 
            </div> 
        </nav> 
) 
} 
export default  withRouter(Navbar)

