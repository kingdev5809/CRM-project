import React, { useState } from "react";

const Rating = ({ dataRates, item, index }) => {
  const [value, setValue] = useState(dataRates[index].rate);
  const handleRateStudents = (num) => {
    dataRates[index].rate = num;
    setValue(num);
  };

  return (
    <div className="rating">
      <i
        className={
          value >= 1
            ? "fas fa-star"
            : value >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        onClick={() => handleRateStudents(1)}
      ></i>
      <i
        className={
          value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        onClick={() => handleRateStudents(2)}
      ></i>
      <i
        className={
          value >= 3
            ? "fas fa-star"
            : value >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        onClick={() => handleRateStudents(3)}
      ></i>
      <i
        className={
          value >= 4
            ? "fas fa-star"
            : value >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        onClick={() => handleRateStudents(4)}
      ></i>
      <i
        className={
          value >= 5
            ? "fas fa-star"
            : value >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        onClick={() => handleRateStudents(5)}
      ></i>
    </div>
  );
};

export default Rating;
