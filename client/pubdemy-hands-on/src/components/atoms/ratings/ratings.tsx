import React from "react";
import "./ratings.style.css";

type ratingsProps = {
  ratings: number;
  totalRatings: number;
};

export default function Ratings(props: ratingsProps) {
  const maxRating = [1, 2, 3, 4, 5];
  const { ratings,totalRatings } = props;
  // const ratingStar = <i className="fa-solid fa-star" />
  const ratingStar = maxRating.map((item) => {
    if (item <= ratings) {
      return <i key={item} className="fa-solid fa-star rating-color" />;
    }
  });

  return (
    <div className="rating-container">
      <div>{ratings}</div>
      <div>{ratingStar}</div>
      <div className="total-raiting">{`(${totalRatings})`}</div>
    </div>
  );
}
