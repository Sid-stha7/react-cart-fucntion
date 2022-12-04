import React from "react";
import { FaBell, FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <FaBell
          style={{
            color: ` ${task.reminder ? "green" : "grey"}`,
            pointer: "pointer",
          }}
          onClick={() => onToggle(task.id)}
        />
        <FaTimes
          style={{
            color: "red",
            pointer: "pointer",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
