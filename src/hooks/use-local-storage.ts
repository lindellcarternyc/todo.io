import { useState } from 'react'

const useLocalStorage = <T>(key: string, defaultValue: T): [T, (_: T) => void] => {
    const [value, setValue] = useState<T>(() => {
        const storedValue = window.localStorage.getItem(key)
        if (storedValue === null) {
            return defaultValue
        }

        return JSON.parse(storedValue)
    })

    const updateValue = (newValue: T) => {
        window.localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }

    return [value, updateValue]
}

export default useLocalStorage