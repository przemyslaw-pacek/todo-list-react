import { useState, useRef } from 'react';
import { FormField, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const trimedNewTaskContent = newTaskContent.trim();
    
    if (trimedNewTaskContent) {
      addNewTask(trimedNewTaskContent);
    };
    
    setNewTaskContent("");
  };

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;