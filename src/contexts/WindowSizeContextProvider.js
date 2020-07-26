import {useReducer,createContext} from 'react'
import {WindowSizeReducer, WindowSizeInitState} from '../reducers/WindowSizeReducer'

export const WindowSizeContext = createContext({})

const WindowSizeContextProvider = ({children}) => {
    const [windowSize,dispatch] = useReducer(WindowSizeReducer,WindowSizeInitState)

    return (
        <WindowSizeContext.Provider value={{windowSize,dispatch}}>
            {children}
        </WindowSizeContext.Provider>            
    )
}

export default WindowSizeContextProvider
