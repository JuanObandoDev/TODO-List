import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoCreate } from "./components/TodoCreate/TodoCreate";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm";

import { SearchContextProvider } from "./contexts/searchContext/searchContext";
import { TodosContextProvider } from "./contexts/todosContext/todosContext";

import "./styles/App.css";

function App() {
  return (
    <TodosContextProvider>
      <TodoCounter />
      <SearchContextProvider>
        <TodoSearch />
        <TodoList />
      </SearchContextProvider>
      <TodoCreate />
      <Modal>
        <TodoForm />
      </Modal>
    </TodosContextProvider>
  );
}

export default App;
