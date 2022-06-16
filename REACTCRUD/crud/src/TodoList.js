import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, deleteTodos }) => {
  console.log(deleteTodos);
  return todos.map((todo) => {
    return <Todo todo={todo} key={todo} />;
  });
};
