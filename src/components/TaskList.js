import React from "react";
import Task from "./Task";
function TaskList({ tasks, handleDelete }) {
  const listOfTasks = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        handleDelete={handleDelete}
      />
    );
  });
  return <div className="tasks">{listOfTasks}</div>;
}

export default TaskList;
