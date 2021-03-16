import styled from 'styled-components'

import Todo, { TodoProps } from './Todo'

const AnimatedTodoWrapper = styled(Todo)`
    &.item-enter {
        transform: translateX(-100%);
    }

    &.item-enter-active {
        transform: translateX(0);
        transition: all 0.5s ease-in;
    }

    &.item-exit {
        transform: translateX(0);
    }

    &.item-exit-active {
        transform: translateX(100%);
        transition: all 0.5s ease-in;
    }
`

interface AnimatedTodoProps extends TodoProps {

}

const AnimatedTodo = (props: AnimatedTodoProps): JSX.Element => {
    return (
        <AnimatedTodoWrapper 
            className="item"
            {...props}
        />
    )
}

export default AnimatedTodo