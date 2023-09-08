import React, {Component} from 'react';
import Movie from './Movie';

let newReleases = [
  {
    Title: "Haunted\nMansion",
    Year: "2023",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTlmZmFkYTEtMDM4NS00NTgzLWFhODEtZjMxOTlmN2QxZTdiXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_SX300.jpg",
    Plot: "A single mom hires a tour guide, a psychic, a priest and a historian to help exorcise her new mansion after discovering it is inhabited by ghosts."
  },
  {
    Title: "Barbie",
    Year: "2023",
    Poster: "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    Plot: "Barbie suffers a crisis that leads her to question her world and her existence."
  },
  {
    Title: "Oppenheimer",
    Year: "2023",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    Plot: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb."
  }
]

export default class NewReleases extends Component {
render() {return (
<div className="container px-2 top-margin">
  <h2 className="releases-header">Popular New Releases to Review</h2>
  <div className="row  mb-5">
      <Movie searchData={newReleases[0]}/>
      <Movie searchData={newReleases[1]}/>
      <Movie searchData={newReleases[2]}/>   
  </div>
</div>);}
}