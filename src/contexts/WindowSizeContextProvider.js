import {useState,createContext} from 'react'

export const WindowSizeContext = createContext({windowSizeSmall:false ,setWindowSizeSmall:()=>{}})

const WindowSizeContextProvider = ({children}) => {
    const [windowSizeSmall,setWindowSizeSmall] = useState()

    return (
        <WindowSizeContext.Provider value={{windowSizeSmall,setWindowSizeSmall}}>
            {children}
        </WindowSizeContext.Provider>            
    )
}

export default WindowSizeContextProvider
