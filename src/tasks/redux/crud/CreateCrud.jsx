import { useState } from "react";
import "./createcrud.css";
import { addUser } from "./crudSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateCrud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length !== 0 && email.length !== 0) {
      dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
      navigate("/");
    }
  };

  return (
    <div className="create-crud">
      <form onSubmit={handleSubmit}>
        <h1>Add new user:</h1>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            name="email"
            onChange={handleName}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={handleEmail}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateCrud;
