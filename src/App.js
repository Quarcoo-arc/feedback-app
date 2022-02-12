import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { Link } from "react-router-dom";
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
        <FeedbackForm
          addFeedback={(newFeedback) =>
            setFeedback([
              { ...newFeedback, id: feedback.length + 1 },
              ...feedback,
            ])
          }
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={removeFeedback} />
      </div>
      <div className="about-link">
        <a href="/about">
          <Link to="/about">?</Link>
        </a>
      </div>
    </>
  );
};

export default App;
