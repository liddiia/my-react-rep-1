import Reset from './Reset';
import css from '/home/nook/repositorii/my-react-rep-1/vite-project/src/Components/Options.module.css'
const Options = ({ onAddFeedback}) => {
  return (
    <>
      Options
      <div className="">
        <button className={css.button} onClick={() => onAddFeedback("good")}>Good </button>
        <button className={css.button} onClick={() => onAddFeedback("neutral")}>Neutral</button>
        <button onClick={() => onAddFeedback("bad")} className={css.button}>Bad</button>
        <Reset/>
      </div>
    </>
  );
};

export default Options;
