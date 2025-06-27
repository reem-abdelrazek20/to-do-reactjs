import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [color, setColor] = useState("#000000");
  const [tasks, setTasks] = useState([]);

  const colors = ["#f44336", "#4caf50", "#2196f3"];
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false, color }]);
    setTask("");
  };
  const dele = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };
  const Done = (index) => {
    const newTasks = tasks.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setTasks(newTasks);
  };

  return (
    <section style={{ margin: "20px" }}>
      <div className="to-do">
        <input
          id="box"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <div
          id="color"
          style={{
            margin: "10px 0",
            display: "flex",
            gap: "5px",
          }}
        >
          {colors.map((c, index) => (
            <div
              key={index}
              onClick={() => setColor(c)}
              style={{
                backgroundColor: c,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: c === color ? "3px solid #000" : "2px solid #ccc",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>

        <button id="add-btn" onClick={addTask}>
          add
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((e, index) => (
            <li
              key={index}
              style={{
                backgroundColor: e.color,
                textDecoration: e.done ? "line-through" : "none",
                color: e.done ? "#888" : "#000",
                opacity: e.done ? 0.6 : 1,
              }}
            >
              <p> {e.text}</p>
              <div>
                {" "}
                <i
                  onClick={() => Done(index)}
                  className="fa-solid fa-circle-check"
                  style={{ color: e.done ? "#e60f45" : "#63E6BE" }}
                ></i>
                <i
                  onClick={() => {
                    dele(index);
                  }}
                  className="fa-solid fa-trash"
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
