import { useState } from 'react';
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

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;