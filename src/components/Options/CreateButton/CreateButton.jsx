import css from './CreateButton.module.css';

export default function CreateButton({text, handleUpdateFeedback}) {
  return <button className={css.button} onClick={() => handleUpdateFeedback(text.toLowerCase())}>{text}</button>;
}
