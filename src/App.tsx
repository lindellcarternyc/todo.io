import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styled/styled.global'
import { Theme1 } from './styled/styled.theme'

import useTodos from './hooks/use-todos'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todoState, todoAPI] = useTodos()

  return (
    <ThemeProvider theme={Theme1}>
      <GlobalStyles />
      <h2>Welcome to Todo.io</h2>
      <TodoForm 
        newTask={todoState.newTask} 
        onChange={todoAPI.changeNewTask} 
        clearCompleted={todoAPI.clearCompleted}
        addTodo={todoAPI.addTodo}
      />
      <TodoList todos={todoState.todos} toggleCompleted={todoAPI.toggleCompleted} />
    </ThemeProvider>
  )
}

export default App
