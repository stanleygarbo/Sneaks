import {createContext,useReducer} from 'react'
import {CartContextReducer, CartContextInitState} from '../reducers/CartContextReducer'

export const CartContext = createContext({})

const CartContextProvider = ({children}) => {
    const [cart,dispatch] = useReducer(CartContextReducer,CartContextInitState)

    return(
        <CartContext.Provider value={{cart,dispatch}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider