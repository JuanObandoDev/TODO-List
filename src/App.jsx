import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoCreate } from "./components/TodoCreate/TodoCreate";

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
    </TodosContextProvider>
  );
}

export default App;
