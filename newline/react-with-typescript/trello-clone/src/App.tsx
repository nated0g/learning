import { AppContainer } from "./styles"
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem
        toggleButttonText="+ Add another list:"
        onAdd={console.log}
      />
    </AppContainer>

  )
}