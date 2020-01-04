// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
  return (
    <ol>
      {props.reviews.map(review => (
        <li key={review.display_title}>
          <h3>
            {review.display_title} - ({review.opening_date})
          </h3>
          {/* <img src={review.multimedia.src} alt="movie-pic"></img> */}
          <p>{review.summary_short}</p>
        </li>
      ))}
    </ol>
  );
};

export default MovieReviews;
