import React, {Component} from 'react';



export default class Movie extends Component {
constructor (props) 
{
    super(props);
    this.data = props.data;
    this.state = {
        currentClass: 'hidden',
    };
} 
makeVisible = () => 
{
    this.setState({ currentClass: 'visible' });
}

hide = () => 
{
    this.setState({ currentClass: 'hidden' });
}

sendReview(movieReview)
{
    let endpoint = "https://64d99efce947d30a260a2ccb.mockapi.io/unit2/movieReviews";
    //return $.post(endpoint, movieReview);
}

createReview = (movieTitle) => {
   
    let movieReview = document.getElementById(movieTitle).value;
    let movieReviewObj = 
    {
        movie: movieTitle,
        review: movieReview
    }
    this.sendReview(movieReviewObj);
}


render() {return (
<div className="col-lg-4 mt-2" >
    <div className = "movie-poster-bg movie-card" style = {{backgroundImage: `url(${this.data.Poster})`}}>
        <div className ="movie-poster-transparent" >
            <div className = "row g-0" >
                <div className="col-6" >
                    <img className="card-img movie-poster" src={this.data.Poster} alt="Movie poster"/>
                </div>
                <div className="col-6 text-center">
                        <h5 className="card-title mt-3">{this.data.Title}</h5>
                        <p className="movie-year mt-1">{this.data.Year}</p>
                        <p className="movie-plot mr-2 ml-2">{this.data.Plot}</p>
                        <div className = "row">
                            <div className = "col-1"></div>
                            <div className = "col-10">
                            <button className="review-btn" onClick={this.makeVisible} onDoubleClick={this.hide}>Leave a Review</button>
                            </div>
                            <div className = "col-1"></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className={this.state.currentClass}>
        <div className="white-bg movie-card mt-2">
            <textarea className = "review-area p-3" name="review" rows="5" cols="50" placeholder= "Type you review here" id ={this.data.Title}></textarea>
            <div className = "row">
                <div className = "col-4"></div>
                <div className = "col-4">
                    <button className="review-btn mb-2" onClick={this.postReview}>Submit Review</button>
                </div>
                <div className = "col-4"></div>
            </div>
        </div>
    </div>
</div>);}
}





