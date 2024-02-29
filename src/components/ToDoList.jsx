import { useState, useEffect } from "react"; //Hooks
import ReactDOM from "react-dom";
import InfoTodo from "./infomations/InfoTodo"; //Components

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todoInput !== "") {
      setTodos([...todos, { id: Date.now(), text: todoInput }]);
      setTodoInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div className="flex flex-col py-6 items-center w-full h-screen">
      <div className="font-bold text-2xl mb-6 text-gray-600">
		To Do List
	  </div>
      <div className="flex w-full my-4 max-w-md">
        <input type="text" placeholder="Add a todo" className="border-2 border-gray-300 rounded px-2 py-1 w-full" onChange={(e) => setTodoInput(e.target.value)} />
        <button onClick={addTodo} className="bg-indigo-600 ms-2 px-2 py-1 rounded text-white">Add</button>
      </div>
      <ul className="flex flex-col gap-2 w-full max-w-md">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center w-full px-4 py-2 bg-gray-200 rounded">
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="text-rose-500">X</button>
          </li>

        ))}
      </ul>
	  <button onClick={handleOpenModal} className="flex flex-col items-center absolute bottom-5 right-5 bg-indigo-600 rounded-full p-4 shadow-sm">
		<svg className="w-7 h-7 text-gray-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
		</svg>
	  </button>
	  {modalIsOpen && ReactDOM.createPortal(
		<div className="absolute w-full inset-0 z-50 rounded-lg bg-white">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">INFORMATION</h1>
          <button className="bg-rose-500 h-9 w-9 rounded-md text-white" onClick={handleCloseModal}>X</button>
        </div>
        <InfoTodo />
    </div>,
        document.body
      )}
    </div>
  );
};

export default ToDoList;
