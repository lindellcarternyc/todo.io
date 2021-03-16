import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { TodoModel } from '../models/Todo.model'

import Todo from './AnimatedTodo'

const TodoListWrapper = styled.div`

`

interface TodoListProps {
    todos: TodoModel[]
    toggleCompleted(todoID: string): void
}

const TodoList = ({ todos, toggleCompleted }: TodoListProps): JSX.Element => {
    return (
        <TodoListWrapper>
            <TransitionGroup>
                {todos.map(todo => {
                    return (
                        <CSSTransition
                            timeout={500}
                            classNames="item"
                            key={todo.id}
                        >
                            <Todo todo={todo} toggleCompleted={toggleCompleted} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </TodoListWrapper>
    )
}

export default TodoList