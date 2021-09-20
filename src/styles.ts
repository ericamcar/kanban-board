import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: #ffb4a2;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  width: 30rem;
  min-height: 4rem;
  margin-right: 2rem;
  border-radius: 3px;
  padding: 0.8rem;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.6rem 1.6rem 1.2rem;
  color: #6d6875;
`;

export const CardContainer = styled.div`
  cursor: pointer;
  max-width: 30rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  background-color: #aecdd2;
  color: #333;
  font-size: 1.6rem;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 30rem;
  padding: 1rem 1.2rem;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #b5838d;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 0.6rem 1.2rem;
  text-align: center;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

// #ffcdb2
// #e5989b
// #b5838d
// #6d6875
