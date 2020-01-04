import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "uojGOQnFdKSJpvQX2IAbGGcZaGu3q8Ik";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], searchTerm: "book of life" };
  }

  handleSearchSubmit = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(
        data =>
          console.log(data) ||
          this.setState({
            reviews: data.results
          })
      );
  };
  handleSearchInput = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
  };

  render() {
    console.log(this.state.reviews);

    return (
      <div className="searchable-movie-reviews">
        <input
          type="text"
          name="search"
          value={this.state.searchTerm}
          onChange={this.handleSearchInput}
        ></input>
        <input
          type="submit"
          name="searchBtn"
          onClick={this.handleSearchSubmit}
        ></input>
        <MovieReviews reviews={this.state.reviews}></MovieReviews>
      </div>
    );
  }
}

export default SearchableMovieReviewContainer;
