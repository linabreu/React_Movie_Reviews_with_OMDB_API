import React, {Component} from 'react';
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react'


export default function Movie(searchData) 
{

    console.log('here')
    const [currentClass, setCurrentClass] = useState("hidden")

//going to return a single card that is the search result
return (
        <div className="col-lg-4 mb-2">
            <div className = "movie-poster-bg movie-card" style = {{backgroundImage: `url(${searchData.searchData.Poster})`}}>
                <div className ="movie-poster-transparent" >
                    <div className = "row g-0" >
                        <div className="col-6" >
                            <img className="card-img movie-poster" src={searchData.searchData.Poster} alt="Movie poster"/>
                        </div>
                        <div className="col-6 text-center">
                                <h5 className="card-title mt-3">{searchData.searchData.Title}</h5>
                                <p className="movie-year mt-1">{searchData.searchData.Year}</p>
                                <p className="movie-plot mr-2 ml-2">{searchData.searchData.Plot}</p>
                                <div className = "row">
                                    <div className = "col-1"></div>
                                    <div className = "col-10">
                                    <button className="review-btn" onClick = {() => setCurrentClass("visible") } onDoubleClick = {() => setCurrentClass("hidden")}>Leave a Review</button>
                                    </div>
                                    <div className = "col-1"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {currentClass}>
                <div className="white-bg movie-card mt-2">
                    <textarea className = "review-area p-3" name="review" rows="5" cols="50" placeholder= "Type you review here"></textarea>
                    <div className = "row">
                        <div className = "col-4"></div>
                        <div className = "col-4">
                        <Rating/>
                            <button className="review-btn mb-2">Submit Review</button>
                        </div>
                        <div className = "col-4"></div>
                    </div>
                </div>
            </div>
        </div>

);}