import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { content: "Przejść na Reduxa", done: true, id: 0 },
            { content: "Ukończyć kurs", done: false, id: 1 },
        ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        deleteTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    setAllDone,
    toggleTaskDone,
    deleteTask
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectTasksEmpty = state => selectTasks(state).length === 0;
export const selectEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;