import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "./crudSlice";

function UpdateCrud() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const extingUser = users.filter((f) => f.id == id);
  const { name, email } = extingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="create-crud">
      <form onSubmit={handleUpdate}>
        <h1>Update user:</h1>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default UpdateCrud;
