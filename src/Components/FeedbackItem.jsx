import { FaTimes } from "react-icons/fa";
import Card from "./Shared/Card";

const FeedbackItem = ({ item, deleteFeedback }) => {
  // const handleClick = () => console.log(item.id);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={deleteFeedback} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
