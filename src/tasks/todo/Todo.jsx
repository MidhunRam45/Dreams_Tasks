import { useState } from "react";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo() {
  const [input, setInput] = useState("");
  const [TodoArray, setTodoArray] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      setTodoArray([...TodoArray, { task: input, completed: false }]);
      setInput("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleDelete = (index) => {
    const updatedArray = TodoArray.filter((item, idx) => idx !== index);
    setTodoArray(updatedArray);
  };

  const handleCheckBox = (index) => {
    const updatedTasks = [...TodoArray];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodoArray(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          value={input}
        />
        <button onClick={handleAdd}>Add task</button>
      </div>

      <div className="task-container">
        
        {TodoArray.map((item, index) => (

          <div className={"todo"} key={index}>

            <div className="items">
              <h3>{index + 1}.</h3>
              <p className={item.completed ? "completed" : ""}>{item.task}</p>
            </div>
            <div className="delete-container">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckBox(index)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                color="gray"
                fontSize={"1.5rem"}
                onClick={() => handleDelete(index)}
                className="delete-icon"
              />
            </div>

          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Todo;
