import React from "react";
import { TrashIcon } from "@heroicons/react/solid";

export const Todo = ({ todo }) => {
  return <div className="flex items-center mb-4">{todo}</div>;
};
