import css from './CreateButton.module.css';

export default function CreateButton({text, updateFeedback}) {
  return <button className={css.button} onClick={() => updateFeedback(text.toLowerCase())}>{text}</button>;
}
