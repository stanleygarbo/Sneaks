import {createContext, useState, useEffect} from 'react'

export const ShowCartContext = createContext({showCart:false,setShowCart:()=>{}})

const ShowCartContextProvider = ({children}) => {
    const [showCart,setShowCart] = useState(false)

    useEffect(()=>{
        if(showCart===true){
            document.body.style.overflowY = 'hidden'
            console.log('ss')
        }
        else{
            document.body.style.overflowY = 'scroll'
        }
    },[showCart])

    return (
        <ShowCartContext.Provider value={{showCart,setShowCart}}>
            {children}
        </ShowCartContext.Provider>            
    )
}

export default ShowCartContextProvider
