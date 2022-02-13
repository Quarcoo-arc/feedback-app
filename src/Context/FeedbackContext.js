import { useState, createContext, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback()
      .then((data) => setFeedback(data))
      .then(() => setIsLoading(false));
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = response.json();
    return data;
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) =>
    setFeedback([{ ...newFeedback, id: feedback.length + 1 }, ...feedback]);

  const editFeedback = (item) => setFeedbackEdit({ item, edit: true });

  const updateFeedback = (id, item) => {
    setFeedback(feedback.map((el) => (el.id === id ? { ...el, ...item } : el)));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
