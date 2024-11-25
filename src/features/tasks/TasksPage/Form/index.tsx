import { useState, useRef, FormEventHandler } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FormField, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";
import { useAppDispatch } from "../../../../core/hooks";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const trimedNewTaskContent = newTaskContent.trim();

    if (trimedNewTaskContent) {
      dispatch(
        addTask({
          content: trimedNewTaskContent,
          done: false,
          id: nanoid(),
        })
      );

      setNewTaskContent("");
      inputRef.current!.focus();
    }
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
