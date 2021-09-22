import { AppContainer } from "./styles";
import Column from "./Column";
import AddNewItem from "./AddNewItem";
import { useAppState } from "./AppStateContext";

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column title={list.title} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(title) => dispatch({ type: "ADD_LIST", payload: title })}
      />
    </AppContainer>
  );
};

export default App;
