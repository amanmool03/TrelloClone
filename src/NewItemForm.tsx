import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
  setShowForm: (value: React.SetStateAction<boolean>) => void;
};

export const NewItemForm = ({ onAdd, setShowForm }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const addTextHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
      setShowForm(false);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        placeholder="Enter List"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={addTextHandler}
        onBlur={() => setShowForm(false)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
