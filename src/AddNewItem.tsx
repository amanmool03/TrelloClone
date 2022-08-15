import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  dark?: boolean;
  toggleButtonText: string;
  onAdd(text: string): void;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  const onAddHandler = (text: string) => {
    onAdd(text);
    setShowForm(true);
  };

  if (showForm) {
    //we will show the creation form here
    return <NewItemForm onAdd={onAddHandler} setShowForm={setShowForm} />;
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
