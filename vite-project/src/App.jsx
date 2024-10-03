import {  useState } from "react";
import Modal from "./Modal/Modal";
import "./App.css";
import Options from "./Components/Options";
import Description from "./Components/Description";
import Feedback from "./Components/Feedback";
import Notification from "./Components/Notification";
function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

const [IsModalOpen, setIsModalOpen] = useState(false);

  const onAddFeedback = (FeedbackName) => {
    setFeedbacks({ ...feedbacks, [FeedbackName]: feedbacks[FeedbackName] + 1 });
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

 //const TotalFeedback = feedbacks.bad + feedbacks.good + feedbacks.neutral;
  // const TotalFeedback = ({ feedbacks }) => {
  //   return feedbacks.bad + feedbacks.good + feedbacks.neutral; };

  // if (FeedbackName === "good")
  //    { setFeedbacks({...feedbacks, good:feedbacks.good + 1})} ;

  // if (FeedbackName === "neutral")
  //   {  setFeedbacks({...feedbacks, neutral:feedbacks.neutral + 1}) };

  // if (FeedbackName === "bad")
  //   { setFeedbacks({...feedbacks, bad:feedbacks.bad + 1})} ;

  const modalOpen = ()=> {
    setIsModalOpen(true);
  }
    const onCloseModal = ()=>{
      setIsModalOpen(false);
    }
const IsReset =()=>{
  setFeedbacks({ good: 0, neutral: 0, bad: 0 });
}


  return (
    <>
      <div className="card">
        <Description />
        <Options
          onAddFeedback={onAddFeedback}
          feedbacks={feedbacks}
          IsReset={IsReset}
          totalFeedback={totalFeedback}
        />

        { totalFeedback!==0 ?<Feedback feedbacks={feedbacks} /> : <Notification/>}

               
        <button type="button" onClick={modalOpen}>open modal</button>
        {IsModalOpen && <Modal onCloseModal={onCloseModal}/>}
      </div>
    </>
  );
}

export default App;
