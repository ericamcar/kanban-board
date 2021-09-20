import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  title: string;
};

const Column = ({ title, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export default Column;
