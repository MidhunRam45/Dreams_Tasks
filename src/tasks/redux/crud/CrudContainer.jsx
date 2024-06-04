import { useDispatch, useSelector } from "react-redux";
import "./crudcontainer.css";
import { Link } from "react-router-dom";
import { CancelInput, DeleteUser, InputChange } from "./crudSlice";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons/faRectangleXmark";
import { useState } from "react";

function CrudContainer() {
  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteUser({ id: id }));
  };

  const [inputShow, setInputShow] = useState(false);
  const handleInputClick = () => {
    setInputShow(!inputShow);
  };

  const handleInputChange = (e) => {
    dispatch(InputChange(e.target.value));
  };

  const Cancel = () => {
    setInputShow(!inputShow);
    dispatch(CancelInput(true));
  };

  return (
    <div className="container">
      <h1>CRUD Application :</h1>
      <Link to="/create">Create</Link>
      <table>
        <thead>
          <tr style={{ padding: "0px" }}>
            <th>ID</th>
            <th className={inputShow ? "show" : ""} style={{ padding: "0px" }}>
              {inputShow ? (
                <>
                  <input
                    type="text"
                    style={{ margin: "0px", width: "5rem", height: "1.5rem" }}
                    onChange={handleInputChange}
                  />
                  <FontAwesomeIcon
                    icon={faRectangleXmark}
                    style={{
                      height: "1.5rem",
                      marginBottom: "-0.4rem",
                      color: "white",
                    }}
                    onClick={Cancel}
                  />
                </>
              ) : null}
              {inputShow ? null : "Name"}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ marginLeft: "1rem", cursor: "pointer" }}
                onClick={handleInputClick}
                className={inputShow ? "none" : ""}
              />
            </th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Link to={`/update/${data.id}`}>Edit</Link>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudContainer;
