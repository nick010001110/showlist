import React from 'react' 
import {Component} from 'react'
import * as axios from 'axios'
import styles from  '../Trending.css'
import Table from './Table'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; 

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

    

    const myshows = this.props.shows;
    return( 
        <div className="container"> 
            <h4 className ="center"> Trending</h4>
            <Table shows={myshows} />
            <Pagination
                currentPage={this.props.currentPage}
                totalPages={this.props.pageCount}
                changeCurrentPage={this.onPageChanged}
                theme="bottom-border"
                />
            <div>      </div>
           
        </div> 
    ) 
    }
}

export default Trending;