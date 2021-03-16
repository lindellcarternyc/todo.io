import styled from 'styled-components'

import { TodoModel } from '../models/Todo.model'

import Todo from './Todo'

const TodoListWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    overflow-x: hidden;
`

interface TodoListProps {
    todos: TodoModel[]
    toggleCompleted(todoID: string): void
}

const TodoList = ({ todos, toggleCompleted }: TodoListProps): JSX.Element => {
    return (
        <TodoListWrapper>
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
                )
            })}
        </TodoListWrapper>
    )
}

export default TodoList