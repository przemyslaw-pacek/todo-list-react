import { Task } from "./types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem(localStorageKey);
  return storedTasks ? JSON.parse(storedTasks) : [];
};
