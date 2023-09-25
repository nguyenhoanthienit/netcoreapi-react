import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import {
  getTodosApi,
  deleteTodosAPI,
  addTodosAPI,
  editTodosAPI,
} from "../../api/todos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef([]);
  const [textBtn, setTextBtn] = useState("Add new");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTodos(await getTodosApi());
  };

  const deleteTodo = async (id) => {
    if (window.confirm("Want to delete?")) {
      await deleteTodosAPI(id);
      window.location.reload();
    }
  };

  const addOrEditTodo = async (event) => {
    event.preventDefault();
    const val = event.target[0].value;
    const id = event.target[1].value;
    if (id) {
      // update, edit
      await editTodosAPI({
        name: val,
        id: id,
      });
      todoRef.current[id].className = "fas fa-edit";
    } else {
      // add new
      await addTodosAPI({
        name: val,
      });
    }
    fetchData();

    // clear inputs
    event.target[0].value = "";
    event.target[1].value = null;
    setTextBtn("Add new");
  };

  // Handle UI when clicking edit btn
  const editTodo = (id) => {
    todoRef?.current.forEach((item) => {
      if (
        item.getAttribute("data-id") &&
        item.getAttribute("data-id") !== String(id)
      ) {
        item.className = "fas fa-edit";
      }
    });

    const inputName = document.getElementById("name");
    const inputId = document.getElementById("id");
    if (todoRef?.current[id].className === "fas fa-edit") {
      todoRef.current[id].className = "fas fa-user-edit";
      setTextBtn("Update");
      inputName.value = todoRef.current[id].getAttribute("data-name");
      inputId.value = id;
    } else if (todoRef?.current[id].className === "fas fa-user-edit") {
      todoRef.current[id].className = "fas fa-edit";
      setTextBtn("Add new");
      inputName.value = "";
      inputId.value = null;
    }
  };

  const onIsCompletedTodo = async(todo) => {
    await editTodosAPI({
      ...todo,
      isCompleted: true
    });
    fetchData();
  }

  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>DO IT RIGHT NOW</span>
      </h1>
      {todos ? (
        todos?.map((item, key) => (
          <li className={item.isCompleted ? "done" : ""} key={key}>
            <span className="label" onClick={() => onIsCompletedTodo(item)}>{item.name}</span>
            <div className="actions">
              <button
                className="btn-picto"
                type="button"
                onClick={() => editTodo(item.id)}
              >
                <i
                  className="fas fa-edit"
                  ref={(e) => (todoRef.current[item.id] = e)}
                  data-name={item.name}
                  data-id={item.id}
                />
              </button>
              <button
                className="btn-picto"
                type="button"
                aria-label="Delete"
                title="Delete"
                onClick={() => deleteTodo(item.id)}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <p>Empty Todo list</p>
      )}

      <form onSubmit={addOrEditTodo}>
        <label htmlFor="name">New Todo</label>
        <input type="text" name="name" id="name" />
        <input type="text" name="id" id="id" style={{ display: "none" }} />
        <button type="submit">{textBtn}</button>
      </form>
    </main>
  );
};

export default Todos;
