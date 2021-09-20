import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import AddNewItem from "./AddNewItem";

type ColumnProps = {
  title: string;
};

const Column = ({ title, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => console.log(text)}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
