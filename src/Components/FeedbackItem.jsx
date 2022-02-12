import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={deleteFeedback.bind(null, item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
