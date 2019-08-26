import React from 'react' 
import {Component} from 'react'
import * as axios from 'axios'
import styles from  '../Trending.css'
import Table from './Table'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; 
import Select from './Select';

class Trending extends Component{ 
    

componentDidMount(){
    
 
    axios({
        url: `https://api.trakt.tv/shows/trending?page=${this.props.currentPage}&limit=${this.props.pageLimit}&genres=${this.props.currentGenres}&languages=${this.props.currentLanguages}`, // get current shows page with current limit
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

     axios({
        url: `https://api.trakt.tv/genres/shows`, // get all genres for shows from API
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
        
       

        this.props.setGenres(response.data); 
     }) 

     axios({
        url: `https://api.trakt.tv/languages/shows`, // get all languages for shows from API
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': 2,
            'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b'
        }
     })
     .then(response => {
     
        
        this.props.setLanguages(response.data);
     }) 




    }

onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
      
        axios({
            url: `https://api.trakt.tv/shows/trending?page=${pageNumber}&limit=${this.props.pageLimit}&genres=${this.props.currentGenres}&languages=${this.props.currentLanguages}`,
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
    onLangComboboxChange=(value)=>{
        let res =[];
        let languages = this.props.languages;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(languages.find(lang=>lang.name==element));
        });
        myres.forEach(function(element) {
            res.push(element.code);
        });

        this.props.setCurrentLanguages(res.join());
        this.onPageChanged(1);


        axios({
            url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${this.props.pageLimit}&genres=${this.props.currentGenres}&languages=${res.join()}`,
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



        console.log(res.join());
    }

    onGenreComboboxChange=(value)=>{
        let res =[];
        let genres = this.props.genres;
        let myres=[]; 
        value.forEach(function(element) {
            myres.push(genres.find(lang=>lang.name==element));
        });
        myres.forEach(function(element) {
            res.push(element.slug);
        });

        this.props.setCurrentGenres(res.join());
        this.onPageChanged(1);

        axios({
            url: `https://api.trakt.tv/shows/trending?page=${1}&limit=${this.props.pageLimit}&genres=${res.join()}&languages=${this.props.currentLanguages}`,
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

        console.log(res.join());
    }
 


render(){


    const genrgelist = this.props.genres;
    const languagelist= this.props.languages;
    const showslist = this.props.shows;
    return( 
        <div className="container"> 
            <h4 className ="center"> Trending</h4>
            <Select items={languagelist} title="Language" onChange={this.onLangComboboxChange}  />
            <Select items={genrgelist}  title="Genres" onChange={this.onGenreComboboxChange} />
            
            <Table shows={showslist} />
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