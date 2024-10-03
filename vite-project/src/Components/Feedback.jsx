const Feedback = ({ feedbacks, totalFeedback }) => {
  const positive = Math.round((feedbacks.good / totalFeedback) * 100);
  return (
    <div>
      Feedback
      <ul>
        <li>Goog: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        {totalFeedback !== 0 && (
          <ul>
            <li> Total: {totalFeedback} </li>
            <li>Positive: {positive} %</li>
          </ul>
        )}
      </ul>
    </div>
  );
};
export default Feedback;
