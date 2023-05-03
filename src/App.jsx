import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoCreate } from './components/TodoCreate/TodoCreate'

import './styles/App.css'

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text} key={todo.text} />
        ))}
      </TodoList>
      <TodoCreate />
    </>
  )
}

export default App
