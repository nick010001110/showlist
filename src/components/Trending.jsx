import React from 'react' 
import {Component} from 'react'
import * as axios from 'axios'
import styles from  '../Trending.css'
class Trending extends Component{ 
    

componentDidMount(){

    axios({
        url: `https://api.trakt.tv/shows/trending?page=${this.props.currentPage}limit=${this.props.pageLimit}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
     
   
        this.props.setShows(response.data);
        this.props.setPageCount(response.headers['x-pagination-page-count']);
     }) 
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios({
            url: `https://api.trakt.tv/shows/trending?page=${pageNumber}limit=${this.props.pageLimit}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-version': 2,
                'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
            }
         })
         .then(response => {
            this.props.setShows(response.data);
         }) 

    }



    render(){

    let pagesCount = this.props.pageCount;

    let pages =[];
    for (let i=1; i<= pagesCount; i++ ){
        pages.push(i);
    }
    return( 
        <div className="container"> 
            <h4 className ="center"> Trending, page: {this.props.currentPage}</h4>
            <div>
               {pages.map(p=>{
                  return <span key = {p} className={this.props.currentPage === p ? styles.selectedPage:undefined}onClick={()=>{this.onPageChanged(p);}}>  {p}  </span>
               })}
            </div>
            <div> </div>
            <div>      </div>
            
            {
                this.props.shows.map(s => <div key ={s.show.ids.trakt}>
                    <span>
                    
                        <div>{s.show.title}</div>
                        <div>Watchers: {s.watchers}</div>
                        <div>Year: {s.show.year}</div>
                        <div>Trakt id: {s.show.ids.trakt}</div>
                        <div>TVDB id: {s.show.ids.tvdb}</div>
                        <div>----</div>
                    </span>
                    </div>)
            }
        </div> 
    ) 
    }
}
export default Trending;