import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styled/styled.global'
import { Theme1 } from './styled/styled.theme'

import useTodos from './hooks/use-todos'

import TodoForm from './components/TodoForm'

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
      />
    </ThemeProvider>
  )
}

export default App
