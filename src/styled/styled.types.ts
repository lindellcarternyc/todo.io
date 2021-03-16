import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        darkBackground: string
        darkText: string
        lightText: string
    }
}