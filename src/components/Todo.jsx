import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiEdit } from "react-icons/ti";
import { BsFillTrashFill } from "react-icons/bs";

function Todo({ todos, removeTodo, updateTodo, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <>
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      </>
    );
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className="w-[90%] mx-auto flex justify-between mt-6  h-12 rounded-sm bg-purple-200 text-gray-600 font-bold"
          key={index}
        >
          <div
            className={
              todo.isComplete
                ? "w-[75%]   mx-auto flex items-center px-2 border-l-4 border-purple-300 cursor-pointer"
                : "  w-[75%] mx-auto flex items-center px-2 cursor-pointer"
            }
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
          >
            <p>{todo.text}</p>
          </div> 

          
          <div className="flex w-[25%] justify-around items-center cursor-pointer ">
            <BsFillTrashFill
              className="w-[26px] h-[26px] text-[#BFA2DB]"
              onClick={() => removeTodo(todo.id)}
            />

            <TiEdit
              className="w-[26px] h-[26px] text-[#BFA2DB]"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
          </div>
        </div>
      ))}

      <div className="w-[90%]  mx-auto felx justify-around  mt-8 text-gray-600 font-bold">
        <h2>Total de tarefas : {todos.length}</h2>
      </div>
    </>
  );
}

export default Todo;
