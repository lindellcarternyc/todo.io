import styled from 'styled-components'
import { TodoModel } from '../models/Todo.model'

const TodoWrapper = styled.div<{ completed: boolean }>`
    background-color: ${({ theme }) => theme.lightText};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        text-decoration: ${({ completed }) => completed ? 'line-through' : '' };
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

interface TodoProps {
    todo: TodoModel
    toggleCompleted(todoID: string): void
}

const Todo = ({ todo, toggleCompleted }: TodoProps): JSX.Element => {
    return (
        <TodoWrapper completed={todo.completed} onDoubleClick={_ => toggleCompleted(todo.id)}>
            <p>{todo.task}</p>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={_ => toggleCompleted(todo.id)}
            />
        </TodoWrapper>
    )
}

export default Todo