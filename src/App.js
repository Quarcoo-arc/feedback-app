import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Components/Pages/AboutPage";
import AboutLinkIcon from "./Components/AboutLinkIcon";
import { FeedbackProvider } from "./Context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const removeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm
                    addFeedback={(newFeedback) =>
                      setFeedback([
                        { ...newFeedback, id: feedback.length + 1 },
                        ...feedback,
                      ])
                    }
                  />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={removeFeedback}
                  />
                  <AboutLinkIcon />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
