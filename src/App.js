/*
Structure
Components for: Nav Search area, new releases, display/review cards
value captured from search bar gets fed into API request
API request turned into movie objects
movie object data gets based as props to the movie cards?

Requirements
MovieList: a container for all the Movie components and their data.  
Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
ReviewList: a container inside of a Movie that houses Review components.
Review: A text review a user can leave on a movie.
ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When
*/

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/footer';
import NewReleases from './components/NewReleases';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <NewReleases/>
      <Footer/>
    </div>
  );
}

export default App;
