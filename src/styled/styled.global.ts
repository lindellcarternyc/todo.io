import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0
    }

    body {
        background-color: ${({ theme }) => theme.darkBackground};
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    h2 {
        color: ${({ theme }) => theme.lightText};
        text-align: center;
        margin: 1rem;
    }
`

export default GlobalStyles