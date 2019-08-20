import React, {Component} from 'react' 
import {connect} from 'react-redux'

class Show extends Component{
 /*
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts/'+ id,
            method: 'get',
            headers: {
               // 'Content-Type': 'application/json',
               // 'trakt-api-version': '2',
               // 'trakt-api-key': 'b817c26b5af6ff935a62c16c85628068da1be7bd67d3f05dbcc8b25c872df20b',

            }
         })
         .then(res=>{
            this.setState({
                show: res.data
            })
            console.log(res)
         })
        
    }*/
    render(){
       
        const show = this.props.show ? (
            <div className="show">
            <h4 className="center">{this.props.show.title}</h4>
            <p>{this.props.show.body}</p>
            </div>
        ):(
            <div className="center">Loading show...</div>
        )
        
        return(
            <div className="container">
               {show}
            </div>
        )
    }

}
const mapStateToProps =(state, ownProps)=>{
    let id = ownProps.match.params.show_id;
    return{
        show: state.shows.find((show)=>{
            return show.id === id
        })
    }

}

export default connect(mapStateToProps)(Show)