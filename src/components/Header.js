import React, {Component} from 'react';
import Movie from './Movies';
import SearchResult from './SearchResult';


let searchResult = [
    {
      Title: "Haunted\nMansion",
      Year: "2023",
      Poster: "https://m.media-amazon.com/images/M/MV5BOWNkNzNlYWItNjIwOC00NzNlLTkxY2MtOWQyMTdmYTAzNGY5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
      Plot: "A single mom hires a tour guide, a psychic, a priest and a historian to help exorcise her new mansion after discovering it is inhabited by ghosts."
    }]

//get value from search bar and put it into API req
const search = (e) => 
{
    e.preventDefault();
    let searchTerm = document.getElementById('search-bar').value;
    let url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=cd01d28f&plot=short`;
    let movieList = []

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const movie = {
                Title: data.Title,
                Plot: data.Plot,
                Poster: data.Poster,
                Year: data.Year
            }
            movieList.push(movie);
            return movieList;
        })
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
        <SearchResult searchData = {searchResult[0]}/>
    </div>
    

    );}
}
