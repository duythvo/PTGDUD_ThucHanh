import React, { useReducer, useEffect, useRef, useMemo, useState } from "react";

const ToDoApp = () => {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "TOGGLE":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case "DELETE":
        return state.filter((todo) => todo.id !== action.payload);
      case "SET":
        return action.payload;
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  // Lưu danh sách vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "SET", payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useMemo để tối ưu việc lọc các công việc
  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    };
  }, [todos]);

  // Xử lý thêm công việc
  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newTodo });
    setInputValue("");
    inputRef.current.focus();
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="bg-white flex items-center justify-center">
      <div className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          To-Do List
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new task"
            className="flex-1 border rounded-xl p-2 focus:outline-none border-amber-50 text-white"
          />
          <button
            onClick={handleAddTodo}
            className="bg-cyan-300 text-black px-4 py-2 rounded-xl hover:bg-cyan-400 font-semibold"
          >
            Add
          </button>
        </div>
        <h2 className="font-semibold mt-4 text-white">Incomplete Tasks</h2>
        <ul className="space-y-2 mb-4">
          {filteredTodos.incomplete.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-sm"
            >
              <span>{todo.text}</span>

              <div className="flex gap-5">
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  className="bg-green-500 text-white p-1 rounded-lg font-semibold cursor-pointer"
                >
                  Confirm
                </button>

                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="bg-red-500 text-white p-1 rounded-lg font-semibold cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="font-semibold mt-4 text-white">Completed Tasks</h2>
        <ul className="space-y-2">
          {filteredTodos.completed.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 bg-green-100 rounded-lg shadow-sm line-"
            >
              <span className="cursor-pointer">{todo.text}</span>
              <span className="bg-green-600 text-white p-1 rounded-lg font-semibold">Done</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
