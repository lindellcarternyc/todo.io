import styled from 'styled-components'

const ContainerWrapper = styled.div<{ maxWidth?: number }>`
    max-width: ${({ maxWidth }) => {
        if (maxWidth === undefined) {
            return '100%';
        }
        return `${maxWidth}px`
    }};
    overflow-x: hidden;
    margin: 0 auto;
`

interface ContainerProps {
    maxWidth?: number
    children: JSX.Element | JSX.Element[]
}

const Container = ({ maxWidth, children }: ContainerProps): JSX.Element => {
    return (
        <ContainerWrapper maxWidth={maxWidth}>
            {children}
        </ContainerWrapper>
    )
}

export default Container