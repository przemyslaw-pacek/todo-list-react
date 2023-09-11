import './style.css';

const Form = () => (
    <form className="addTask">
      <input className="addTask__item" placeholder="Co jest do zrobienia?" />
      <button className="addTask__item--button">Dodaj zadanie</button>
    </form>
);

export default Form;