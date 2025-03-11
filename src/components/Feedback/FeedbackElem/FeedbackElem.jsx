export default function FeedbackElem({initialValue = 0, name = "Feedback:"}) {

  return (
    <p className="feedback">{name} {initialValue}</p>
  )
}
