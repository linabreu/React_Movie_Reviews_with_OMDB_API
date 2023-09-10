import {useState, useEffect} from 'react'

export default function AllReviews() {

  const API_URL = 'https://64d99efce947d30a260a2ccb.mockapi.io/unit2/movieReviews';
  const [reviews, setReviews] = useState([{}]);
  const [updatedReview, setUpdatedReivew] = useState("");
  const [currentClass, setCurrentClass] = useState("visible")

  useEffect(() => (
    getReviews()
  ), [])

  const getReviews = () => 
  {
      fetch(API_URL)
      .then(data => data.json())
      .then(data => setReviews(data));
      console.log(reviews)
  }

  const deleteReview = (id) => {
    fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    .then(() => getReviews())
    }


  return(
  <div className = "container gx-2 mb-5">
   {/* <button className = 'review-btn mt-3 mb-3'onClick={() => {getReviews();setCurrentClass("visible");}} onDoubleClick = {() => setCurrentClass("hidden")}>See All Reviews</button>*/}
        <div className = "row gy-3">
        {reviews.map((review, index) => (
          <div className = 'col-lg-3'key={index}>
            <div className="white-bg movie-card" >
              <div className ="mt-5">
                <h5 className="card-title top-margin pt-3">{review.Title}</h5>
              </div>
              <div className = "review-body">
                <p className="movie-plot text-center p-2">{review.Review}</p>
              </div>
              <div className = "btn-container">
                  <button className="review-btn centered" onClick = {() => deleteReview(index) }>Delete</button>
              </div>
            </div>
          </div>))}
        </div>
    </div>);}
