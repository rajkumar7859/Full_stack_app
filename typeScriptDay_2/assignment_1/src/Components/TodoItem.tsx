import { type } from "os";
import React from "react";
import { MdDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { FcFullTrash } from "react-icons/fc";

type TodoProps = {
  id: number;
  content: string;
  status: boolean;
  toggleStatus: Function;
  deleteTodos: Function;
};

const TodoItem = ({
  id,
  content,
  status,
  deleteTodos,
  toggleStatus
}: TodoProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "auto"
      }}
    >
      <h4>
        {content}
        {"  "}
      </h4>
      <button onClick={() => toggleStatus(id)}>
        {status ? <MdDoneAll /> : <MdOutlineRemoveDone />}
      </button>
      <button onClick={() => deleteTodos(id)}>
        Delete <FcFullTrash />
      </button>
    </div>
  );
};

export default TodoItem;
