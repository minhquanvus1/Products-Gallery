const RoundRating = (productRating: number) => {
  // round the productRating to the first decimal place
  const rating = Math.round(productRating * 10) / 10;

  // take the Integer part of the rating
  const ratingInteger = Math.floor(rating);

  // take the decimal part of the rating
  const ratingDecimal = rating - ratingInteger;

  // add a tolerance to account for floating point errors
  const tolerance: number = 0.0001;

  let roundedRating: number;
  // 4.0 -> 4.3 => 4.0
  if (ratingDecimal <= 0.3 + tolerance) {
    roundedRating = ratingInteger;
    // 4.4 -> 4.7 => 4.5
  } else if (ratingDecimal <= 0.7 + tolerance) {
    roundedRating = ratingInteger + 0.5;
    // 4.8 -> 5 => 5
  } else {
    roundedRating = Math.ceil(rating);
  }

  return roundedRating;
};

export default RoundRating;
