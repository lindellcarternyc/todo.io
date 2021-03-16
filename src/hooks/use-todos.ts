import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import useLocalStorage from './use-local-storage'

import { TodoModel } from '../models/Todo.model'

interface TodoState {
    todos: TodoModel[]
    newTask: string
}

interface TodoAPI {
    toggleCompleted(todoID: string): void
    clearCompleted(): void
    changeNewTask(task: string): void
    addTodo(): void
}

const useTodos = (): [TodoState, TodoAPI] => {
    const [todos, setTodos] = useLocalStorage<TodoModel[]>('todos', [])
    const [newTask, setNewTask] = useState('')

    const toggleCompleted = (todoID: string) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoID) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const changeNewTask = (task: string) => setNewTask(task)

    const addTodo = () => {
        const task = newTask.trim()
        if (!task) {
            return
        }

        const newTodo: TodoModel = {
            id: uuid(),
            task,
            completed: false
        }

        setTodos([...todos, newTodo])
        setNewTask('')
    }

    return [
        {
            todos, newTask
        }, {
            toggleCompleted,
            clearCompleted,
            changeNewTask,
            addTodo
        }
    ]
}

export default useTodos