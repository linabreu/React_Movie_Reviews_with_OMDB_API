import React, {Component} from 'react';
import Movie from './Movies';

const displayMovie = (responseData) => 
{
    console.log("cc");
}

const search = (e) => 
{
    e.preventDefault();
    let searchTerm = document.getElementById('search-bar').value;
    let url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=cd01d28f&plot=short`;

    fetch(url)
    .then((response) => 
    {
        if (response.ok) 
        {
            return response.json();
        } 
        else 
        {
            throw new Error("NETWORK RESPONSE ERROR");
        }
  })
    .then(data => 
    {
        console.log(data);
        //let result = Object.entries(data);
         let result = JSON.parse(data);
        console.log(result)

    })
    .catch((error) => console.error("FETCH ERROR:", error));
}



export default class Header extends Component {
render() {return (
    <div>
    <form className="row domain-search bg-pblue">
            <div className="container">
                <div className="row">
                <div className="col-sm-1"></div>
                    <div className="col-sm-3">
                        <h2 className="form-title"><strong>Unlock Your Inner Critic</strong></h2>
                        <p><strong>Search Any Movie to Get Started</strong></p>
                    </div>
                    <div className="col-sm-7">
                        <div className="input-group">
                            <input type="search" className="form-control movie-card" id ="search-bar" placeholder='Try "The Godfather"'/>
                            <span className="input-group-addon"><button className="btn btn-primary orange-btn movie-card " id = "search-btn" onClick={search}>Search</button></span>
                        </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
            </div>
        </form>
    </div>
    

    );}
}

//Unlock the Critic Within