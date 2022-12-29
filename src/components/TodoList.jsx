import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodoInput = (todo) => {
    
    if (todo.text === "" || /^\s*$/.test(todo.text)) return;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);

    console.log(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);

    console.log(id);
    console.log(removeArr);
  };

  const completeTodo = (id) => {
    let updateComplete = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updateComplete);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.text === "" || /^\s*$/.test(newValue.text)) return;

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <>
      <div className="w-[90%] md:w-[33%] mx-auto mt-28 bg-[#F3F1F5] rounded-md  h-auto pb-6 flex flex-col gap-y-2">
        <div className="w-[90%] mx-auto text-2xl h-10 mt-6">
          <h1 className="font-bold">TodoApp</h1>
        </div>

        <TodoForm onSubmit={addTodoInput} />

        <Todo
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
