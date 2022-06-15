import React, { useState } from "react";
import userList from "./Data";

const AddUserForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(userList);

  //gettinginputvalue
  const getInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const addUsers = () => {
    if (!inputValue) return;
    setUsers((users) => {
      console.log([...users, inputValue]);
      return [...users, inputValue];
    });
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <label htmlFor="text" className="block mb-3">
          Enter the User
        </label>
        <input
          type="text"
          name="text"
          id="text"
          className="border "
          onChange={getInputValue}
        />
        <button
          className="block px-3 py-2 mt-5 text-white bg-blue-600"
          onClick={addUsers}
        >
          Add User
        </button>
      </div>
    </>
  );
};

export default AddUserForm;
