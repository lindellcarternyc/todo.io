import React from 'react'
import styled from 'styled-components'

const TodoFormWrapper = styled.div`
    display: flex;
    margin: 0 auto 1rem;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: ${({ theme }) => `2px solid ${theme.lightText}`};
    padding-bottom: 1rem;

    form {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        input {
            margin: 0 1rem;
            padding: 0.5rem 1rem;
            flex-grow: 1;
        }

        label {
            color: ${({ theme }) => theme.lightText};
        }
    }

    button {
        padding: 0.5rem 1rem;
        border: ${({ theme  }) => `2px solid ${theme.lightText}`};
        background-color: transparent;
        transition: all 0.3s ease-in;

        &:not(:disabled) {
            color: ${({ theme }) => theme.lightText};

            &:hover {
                color: ${({ theme }) => theme.darkText};
                background-color: ${({ theme }) => theme.lightText};
            }
        }
    }

    & > button {
        align-self: flex-end;
    }
`

interface TodoFormProps {
    newTask: string
    onChange(_: string): void
    clearCompleted(): void
}

const TodoForm = ({ newTask, onChange, clearCompleted }: TodoFormProps): JSX.Element => {
    const onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evt.target.value)
    }

    return (
        <TodoFormWrapper>
            <form onSubmit={onSubmit}>
                <label htmlFor="new-todo">
                    New Todo
                </label>
                <input 
                    id="new-todo"
                    name="new-todo"
                    type="text"
                    value={newTask}
                    onChange={handleChange}
                />
                <button type="submit" disabled={!newTask}>Add Todo</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
        </TodoFormWrapper>
    )
}

export default TodoForm