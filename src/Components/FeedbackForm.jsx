import Card from "./Shared/Card";
import Button from "./Shared/Button";
import SelectRating from "./SelectRating";
import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [message, setMessage] = useState("");

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
      <form>
        <h2>How would you rate our service?</h2>
        <SelectRating />
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
