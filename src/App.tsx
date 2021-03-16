import useTodos from './hooks/use-todos'

const App = () => {
  const [todoState] = useTodos()
  console.log(todoState.todos)
  return (
    <div>App</div>
  )
}

export default App
