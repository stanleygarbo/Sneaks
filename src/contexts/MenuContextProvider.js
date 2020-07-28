import {createContext,useState} from 'react'

export const MenuContext = createContext({showMenu:false,setShowMenu:()=>{},})

const MenuContextProvider = ({children}) =>{
    const [showMenu,setShowMenu] = useState(false)

    return (
        <MenuContext.Provider value={{showMenu,setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider