import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript"></Card>
      </Column>
      <Column text="Done">
        <Card text="Degin to use static typing"></Card>
      </Column>

      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
