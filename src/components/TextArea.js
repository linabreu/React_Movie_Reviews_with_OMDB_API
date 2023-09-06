import {useState} from 'react';

const TextArea = () => {

  const [review, setReview] = useState('');

  const handleChange = event => {
    setReview(event.target.value);

    //console.log(event.target.value);
    return {review};
  };

 const sendReview = (movieReview) =>
{
    let endpoint = "https://64d99efce947d30a260a2ccb.mockapi.io/unit2/movieReviews";
    /*fetch(endpoint, 
    {
        method: 'POST',
        body: JSON.stringify({movieReview}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            // Handle data
         })
         .catch((err) => {
            console.log(err.message);
         });*/
         console.log(movieReview);
}

const createReview = (movieTitle) => {
   
    let movieReview = document.getElementById('movieTitle').value;
    let movieReviewObj = 
    {
        movie: movieTitle,
        review: movieReview
    }
    this.sendReview(movieReviewObj);
}


  return (
    <div>
      <textarea className = "review-area p-3" name="review" rows="5" cols="50" placeholder= "Type you review here" onChange={handleChange}value={review}></textarea>
      <div className = "row">
                <div className = "col-4"></div>
                <div className = "col-4">
                    <button className="review-btn mb-2" onClick={handleChange}>Submit Review</button>
                </div>
                <div className = "col-4"></div>
        </div>
    </div>
  );
};

export default TextArea;