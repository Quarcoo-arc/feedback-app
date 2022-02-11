import Card from "./Shared/Card";
import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        {/* ToDo - Ratings Select Component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
