import React, { useState } from "react";
import Data from "./Data";
import List from "./List";

export default function Birthdaycard() {
  const [people, setPeople] = useState(Data);
  const [textInput, setTextInput] = useState();
  const [hidden, setHidden] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState();

  //handlinginput
  const handleInput = (event) => {
    setTextInput(event.target.value);
    //  console.log(textInput)\
  };

  //addingitems
  const addItem = () => {
    if (!textInput) return;
    /* const addItems = [...people, textInput];
    setPeople(addItems); */
    setPeople((people) => {
      return [...people, textInput];
    });
    setTextInput("");
  };

  //deletingitems
  const deleteItem = (index) => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  //updateitems
  const updateItem = (index) => {
    // console.log(index);
    setHidden(true);
    setCurrentEdit(people[index]);
    setCurrentlyEditing(index);
  };

  //editinginput
  const onEditInput = (value) => {
    console.log(value);
    setCurrentEdit(value);
  };

  //savefunction
  const saveNewValue = () => {
    // setTextInput(currentEdit);
    console.log(currentlyEditing);
    const newUpdatedItem = [...people];
    newUpdatedItem[currentlyEditing] = currentEdit;
    setPeople(newUpdatedItem);
    setCurrentEdit("");
    setHidden(false);
  };

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Enter Something"
        onChange={handleInput}
        value={textInput}
      />
      <h2> {people.length} Birthdays Today</h2>
      <List
        people={people}
        deleteItem={deleteItem}
        updateItem={updateItem}
        required={true}
      />
      {hidden ? (
        <div>
          {" "}
          <input
            type="text"
            placeholder="Edit here..........."
            value={currentEdit}
            onChange={(e) => onEditInput(e.target.value)}
          />{" "}
          <button
            onClick={() => {
              saveNewValue();
            }}
          >
            {" "}
            Save Me
          </button>{" "}
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
