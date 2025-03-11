import FeedbackElem from "./FeedbackElem/FeedbackElem";

export default function Feedback({obj,totalFeedback ,positiveFeedback}) {
    
    return (
     <div>
        <FeedbackElem name = "Good:" initialValue={obj.good}/>
        <FeedbackElem name = "Neutral:" initialValue={obj.neutral}/>
        <FeedbackElem name = "Bad:" initialValue={obj.bad}/>
        <FeedbackElem name = "Total:" initialValue={totalFeedback}/>
        <FeedbackElem name = "Positive:" initialValue={positiveFeedback}/>
    </div>
        
  )
}
