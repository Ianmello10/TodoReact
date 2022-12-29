import React, { useState, useEffect, useRef } from "react";

import { IoIosAdd } from "react-icons/io";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    console.log("teste");

    setInput("");
  };

  return (
    <>
      <form
        className="w-[90%] mx-auto flex justify-between items-center  h-14  "
        onSubmit={addTodo}
      >
        {props.edit ? (
          <div className="w-full   h-auto flex justify-around ">
            <input
              className="w-[75%] h-10 border-2 px-2 rounded- outline-0"
              type="text"
              placeholder="update todo"
              name="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />

            <button
              onClick={addTodo}
              className="w-[20%] h-10 bg-[#BFA2DB] text-white font-bold cursor-pointer rounded-sm flex items-center justify-around"
            >
              Update
            </button>
          </div>
        ) : (
          <div className="w-full   h-auto   flex justify-around ">
            <input
              className="w-[75%] h-10 border-2 px-2 rounded- outline-0"
              type="text"
              placeholder="adicione uma tarefa"
              name="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />

            <button
              onClick={addTodo}
              className="w-[20%] h-10 bg-[#BFA2DB] cursor-pointer rounded-sm flex items-center justify-around"
            >
              <IoIosAdd className="w-12 h-12 text-white" />
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default TodoForm;
