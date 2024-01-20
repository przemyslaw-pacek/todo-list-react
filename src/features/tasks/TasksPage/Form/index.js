import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FormField, Button } from "./styled.js";
import { addTask } from '../../tasksSlice.js';
import Input from '../../Input/index.js';

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimedNewTaskContent = newTaskContent.trim();

    if (trimedNewTaskContent) {

      dispatch(addTask({
        content: trimedNewTaskContent,
        done: false,
        id: nanoid(),
      }));

      setNewTaskContent("");
      inputRef.current.focus();
    };
  };

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;