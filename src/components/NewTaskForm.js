import React from "react";
import { useState } from "react";
function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialData = {
    text: "",
    category: "code",
  };
  const [data, setData] = useState({ ...initialData });
  function handleData(e) {
    let key = e.target.name;
    let value = e.target.value;
    setData({ ...data, [key]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(data);
    setData({ ...initialData });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleData} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleData}>
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
