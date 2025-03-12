import CreateButton from "./CreateButton/CreateButton";
import css from '../Options/CreateButton/CreateButton.module.css';

export default function Options({handleUpdateFeedback, totalFeedback, handleResetFeedback}) {



  return (
    <div>
      <CreateButton text = 'Good' handleUpdateFeedback={handleUpdateFeedback}/>
      <CreateButton text = 'Neutral' handleUpdateFeedback={handleUpdateFeedback}/>
      <CreateButton text = 'Bad' handleUpdateFeedback={handleUpdateFeedback}/>
      {totalFeedback !== 0 ? <button className={css.button} onClick={handleResetFeedback}>Reset</button>: <></>} 
    </div>
  )
}
