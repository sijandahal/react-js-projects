import React, { useState } from "react";
import Data from "./Data";
import List from "./List";

export default function Birthdaycard() {
  const [people, setPeople] = useState(Data);
  const [textInput, setTextInput] = useState();
  const [hidden, setHidden] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(false);
  // let currentlyEditing;
  const [currentlyEditing, setCurrentlyEditing] = useState();

  const handleInput = (event) => {
    setTextInput(event.target.value);
    //  console.log(textInput)\
  };

  const addItem = () => {
    if (!textInput) return;
    /* const addItems = [...people, textInput];
    setPeople(addItems); */
    setPeople((people) => {
      return [...people, textInput];
    });
    setTextInput("");
  };

  const deleteItem = (index) => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  const updateItem = (index) => {
    // console.log(index);
    setHidden(true);
    setCurrentEdit(people[index]);
    setCurrentlyEditing(index)
   
  };

  const onEditInput = (value) => {
    console.log(value);
    setCurrentEdit(value);
  };

  const save = () => {
    console.log(currentlyEditing);
  }


  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Enter Something"
        onChange={handleInput}
        value={textInput}
      />
      <h2> {people.length} Birthdays Today</h2>
      <List people={people} deleteItem={deleteItem} updateItem={updateItem} />
      {hidden ? (
        <div>
          {" "}
          <input
            type="text" 
            placeholder="Edit here..........."
            value={currentEdit}
            onChange={(e) => onEditInput(e.target.value)}
          />{" "}
          <button onClick={()=> {
            save()
          }}> Save Me</button>{" "}
        </div>
      ) : null}

      <button onClick={() => setPeople([])}> Clear All</button>
      <button
        style={{ marginLeft: "25px" }}
        onClick={() => {
          addItem();
        }}
      >
        {" "}
        Add New Birthday{" "}
      </button>
    </div>
  );
}
