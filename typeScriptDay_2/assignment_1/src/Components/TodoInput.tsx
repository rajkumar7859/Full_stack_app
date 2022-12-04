import React, { ChangeEvent, FormEvent, useState } from "react";

type TodoOnAdd = () => {
  onAdd: Function;
};

const TodoInput = (props: TodoOnAdd) => {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    setValue(event.target.value);
  };
  const handleOnSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmitForm}>
        <input
          value={value}
          placeholder="     write somthing here"
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
