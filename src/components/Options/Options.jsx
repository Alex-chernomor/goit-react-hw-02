import CreateButton from "./CreateButton/CreateButton";
import css from '../Options/CreateButton/CreateButton.module.css';

export default function Options({updateFeedback, totalFeedback, resetFeedback}) {



  return (
    <div>
      <CreateButton text = 'Good' updateFeedback={updateFeedback}/>
      <CreateButton text = 'Neutral' updateFeedback={updateFeedback}/>
      <CreateButton text = 'Bad' updateFeedback={updateFeedback}/>
      {totalFeedback !== 0 ? <button className={css.button} onClick={resetFeedback}>Reset</button>: <></>} 
    </div>
  )
}
