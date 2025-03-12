import { useState , useEffect} from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Feedback/Notification/Notification';
import './App.css'

function App() {
  
  const [obj, setObj] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-obj-clicks");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return    {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }
)

  useEffect(() => {
    localStorage.setItem("saved-obj-clicks", JSON.stringify(obj));
  }, [obj]);

 
  const handleUpdateFeedback = (feedbackType) => {
    setObj(prevObj => ({
      ...prevObj,
      [feedbackType]: prevObj[feedbackType] + 1 
    }));
  }

  const handleResetFeedback = ()=>{
   setObj({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  }

  const totalFeedback = obj.good + obj.neutral + obj.bad;
  const positiveFeedback = Math.round((obj.good / totalFeedback) * 100);

  return (
    <>
     <Description />
     <Options handleUpdateFeedback = {handleUpdateFeedback} totalFeedback = {totalFeedback} handleResetFeedback = {handleResetFeedback}/>
    {totalFeedback === 0 ? <Notification/> :  <Feedback obj = {obj} totalFeedback = {totalFeedback} positiveFeedback = {positiveFeedback}/>}
    

    </>
  )
}

export default App
