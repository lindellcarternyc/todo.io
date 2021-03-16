import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styled/styled.global'
import { Theme1 } from './styled/styled.theme'

import useTodos from './hooks/use-todos'

const App = () => {
  const [todoState] = useTodos()
  console.log(todoState.todos)
  return (
    <ThemeProvider theme={Theme1}>
      <GlobalStyles />
      <h2>Welcome to Todo.io</h2>
    </ThemeProvider>
  )
}

export default App
