import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let totalRating = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);
  const average = totalRating / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating:{" "}
        {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, "")}
      </h4>
    </div>
  );
};

export default FeedbackStats;
