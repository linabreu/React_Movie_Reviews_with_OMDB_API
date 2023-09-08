import {useState, useEffect} from 'react'
import NewReleases from './NewReleases'
import Movie from './Movie'

export default function Header() {

  const [searchResult, setSearchResult] = useState([])
  const [searchInputValue, setSearchInputValue] = useState("The Godfather")
  const [currentClass, setCurrentClass] = useState("hidden")

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${searchInputValue}&apikey=cd01d28f&plot=short`)
    .then(res => res.json())
    .then(data => setSearchResult(data))
  }, [])

  function handleSearch(e) {
    e.preventDefault();
    let url = `http://www.omdbapi.com/?t=${searchInputValue}&apikey=cd01d28f&plot=short`;

    fetch(url)
        .then(res => res.json())
        .then(data => setSearchResult(data))
  }

  return (
  <div>
    <form className="row domain-search bg-pblue mb-0" onSubmit={handleSearch}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                        <div className="col-sm-3">
                            <h2 className="form-title"><strong>Unlock Your Inner Critic</strong></h2>
                            <p><strong>Search Any Movie to Get Started</strong></p>
                        </div>
                        <div className="col-sm-7">
                            <div className="input-group">
                                <input onChange={(e) => setSearchInputValue(e.target.value)} type="search" className="form-control movie-card" id ="search-bar" placeholder='Try "The Godfather"'/>
                                <span className="input-group-addon"><button onClick = {() => setCurrentClass("visible") } className="btn btn-primary orange-btn movie-card " id = "search-btn">Search</button></span>
                            </div>
                        </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </form>
        <div className = {currentClass}>
          <div className = "row mb-5 negative px-2">
          <h2 className="releases-header text-center mb-2">Ready to Review</h2>
            <div className = "col"></div>
                <Movie searchData = {searchResult}/>
            <div className = "col"></div>
          </div>
        </div>
    </div>
);}
  

