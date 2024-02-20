import axios from "axios";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://fullstack-todo-app-backend-r6y6.onrender.com";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl);
    setToDo(response.data);
  } catch (error) {
    console.log(error);
  }
};

const addToDo = async (text, setText, setToDo) => {
  try {
    await axios.post(`${baseUrl}/save`, { text });
    setText("");
    getAllToDo(setToDo);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (toDoId, text, setText, setToDo, setIsUpdating) => {
  try {
    await axios.put(`${baseUrl}/${toDoId}/update`, { text });
    setText("");
    setIsUpdating(false);
    getAllToDo(setToDo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (toDoId, setToDo) => {
  try {
    await axios.delete(`${baseUrl}/${toDoId}/delete`);
    getAllToDo(setToDo);
  } catch (error) {
    console.log(error);
  }
};

export { getAllToDo, addToDo, updateTodo, deleteTodo };
