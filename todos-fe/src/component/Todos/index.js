import React, { useEffect } from "react";
import "./index.css";
import { getTodosApi } from "../../api/todos";

const Todos = () => {
  console.log(process.env.REACT_APP_URL_API);

  const fetchData = async () => {
    const data = getTodosApi();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main id="todolist">
      <h1>
        Todo List
        <span>DO IT RIGHT NOW</span>
      </h1>

      <li className="done">
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <li>
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-user-edit"></i>
          </button>
          <button
            className="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <p>Empty Todo list</p>

      <form>
        <label htmlFor="name">New Todo</label>
        <input type="text" name="name" id="name" />
        <input type="text" name="id" id="name" />
        <button type="button">Add new</button>
      </form>
    </main>
  );
};

export default Todos;
