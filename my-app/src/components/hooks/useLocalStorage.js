import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
const [storeValue, setStoreValue] = useState(() =>{
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        return initialValue
    }
})

const setValue = (value) =>{
    try{
    setStoreValue(value)
    window.localStorage.setItem(key,JSON.stringify(value))
    }catch(error){return initialValue}
}

return [storeValue, setValue]
}
