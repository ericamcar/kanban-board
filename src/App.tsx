import { AppContainer } from "./styles";
import Column from "./Column";
import Card from "./Card";
import AddNewItem from "./AddNewItem";

const App = () => {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In progress">
        <Card text="Learn TS" />
      </Column>
      <Column title="Done">
        <Card text="Use static typing" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      />
    </AppContainer>
  );
};

export default App;
