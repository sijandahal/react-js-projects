import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

export default function List({ people, deleteItem, updateItem }) {
  return (
    <>
      {people.map((person, index) => {
        // const {name,id} = person
        return (
          <div key={"person" + index}>
            <h1>
              {person}
              <button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                <TrashIcon style={{ width: "25px" }} />
              </button>
              <button
                onClick={() => {
                  updateItem(index);
                }}
                style={{ marginLeft: "25px" }}
              >
                <PencilIcon style={{ width: "25px" }} />
              </button>
            </h1>
          </div>
        );
      })}
    </>
  );
}
