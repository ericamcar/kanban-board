import React, { useState } from "react";
import { AddItemButton } from "./styles";
import NewItemForm from "./NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <NewItemForm onAdd={props.onAdd} />;
  }

  return (
    <AddItemButton dark={props.dark} onClick={() => setShowForm(true)}>
      {props.toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
