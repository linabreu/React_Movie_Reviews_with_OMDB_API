import React, {Component} from 'react';
import Movie from './Movies';


export default class SearchResult extends Component {
    constructor (props) 
    {
        super(props);
        this.searchData = props.searchData;
    }

    render() {return (
    <div className="row mb-5">
      <div className="col-lg-4"></div>
        {/*<Movie data = {this.searchData[0]}/>*/}
        <div className="col-lg-4">
      </div>
    </div>);}
    }