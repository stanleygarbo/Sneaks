import {createContext,useState} from 'react'

export const MenuContext = createContext({showMenu:true,setShowMenu:()=>{},})

const MenuContextProvider = ({children}) =>{
    const [showMenu,setShowMenu] = useState(true)

    return (
        <MenuContext.Provider value={{showMenu,setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider