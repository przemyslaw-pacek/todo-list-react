import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { Task } from "./types";
import { RootState } from "../../core/store";

interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  status: "idle" | "loading" | "success" | "error";
}

const initialState: TasksState = {
  tasks: getTasksFromLocalStorage(),
  hideDone: false,
  status: "idle",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: ({ tasks }, action: PayloadAction<Task>) => {
      tasks.push(action.payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    setAllDone: ({ tasks }) => {
      tasks.map((task) => (task.done = true));
    },
    toggleTaskDone: ({ tasks }, action: PayloadAction<string>) => {
      const index = tasks.findIndex(({ id }) => id === action.payload);
      tasks[index].done = !tasks[index].done;
    },
    deleteTask: ({ tasks }, action: PayloadAction<string>) => {
      const index = tasks.findIndex(({ id }) => id === action.payload);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.status = "loading";
    },
    fetchExampleTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.status = "success";
      state.tasks = action.payload;
    },
    fetchExampleTasksError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  setAllDone,
  toggleTaskDone,
  deleteTask,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) =>
  selectTasksState(state).hideDone;
export const selectTasksEmpty = (state: RootState) =>
  selectTasks(state).length === 0;
export const selectEveryTaskDone = (state: RootState) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state: RootState, taskId: string | number) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state: RootState, query: string | null) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
