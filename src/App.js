import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const removeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={removeFeedback} />
      </div>
    </>
  );
};

export default App;
