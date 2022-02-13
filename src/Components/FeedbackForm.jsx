import Card from "./Shared/Card";
import Button from "./Shared/Button";
import SelectRating from "./SelectRating";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [disabled, setDisabled] = useState(true);

  const [rating, setRating] = useState(10);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      console.log("editing");
    }
  }, [feedbackEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      return;
    }

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, { text, rating });
    } else {
      addFeedback({ text, rating });
    }

    //return to default
    setText("");
  };

  const handleChange = (event) => {
    if (text === "") {
      setDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setDisabled(true);
    } else {
      setDisabled(false);
      setMessage("");
    }
    setText(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <SelectRating rating={(num) => setRating(num)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />

          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {disabled && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
