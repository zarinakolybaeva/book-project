import React, { useState } from 'react';
import { FeedbackData } from '../../Feedback';
import './comment.styles.css';

const BookFeedback = () => {
    const [feedbackList, setFeedbackList] = useState(FeedbackData);
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState(1); // Changed default rating to 1
    const [userComment, setUserComment] = useState('');
  
    const submitFeedback = () => {
      // Create a new feedback object
      const feedback = {
        id: feedbackList.length + 1, // Generate a unique ID (you may want to use a more robust method)
        name: userName,
        rating: userRating,
        comment: userComment,
      };
  
      // Update the feedback list
      setFeedbackList([...feedbackList, feedback]);
  
      // Clear the form fields
      setUserName('');
      setUserRating(1);
      setUserComment('');
    };
  
    // Function to render star icons based on the rating
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            className={i <= userRating ? 'star filled' : 'star'}
            onClick={() => setUserRating(i)}
          >
            ★
          </span>
        );
      }
      return stars;
    };
  
    return (
      <div className="feedback-container">
        <h1>
          Book<span className="text-primary">Feedback</span>
        </h1>
        <form>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
  
          <label htmlFor="userRating">Rating:</label>
          <div className="rating-stars">{renderStars()}</div>
  
          <label htmlFor="userComment">Comment:</label>
          <textarea
            id="userComment"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            rows="4"
            required
          ></textarea>
  
          <button type="button" onClick={submitFeedback}>
            Submit Feedback
          </button>
        </form>
  
        <div id="feedbackList">
          <h2>Feedback List</h2>
          {feedbackList.length === 0 ? (
            <p>No feedback available.</p>
          ) : (
            <ul>
              {feedbackList.map((feedback) => (
                <li key={feedback.id}>
                  <strong>{feedback.name}</strong> - Rating: {feedback.rating}, Comment: {feedback.comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default BookFeedback;
