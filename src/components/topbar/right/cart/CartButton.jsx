import {useContext} from 'react'
import {CartContext} from '../../../../contexts/CartContextProvider'
import {ShowCartContext} from '../../../../contexts/ShowCartContextProvider'
import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'

const style = css`
    .cart{
        position:relative;
        width:35px;
        height:35px;
        display:grid;
        place-items:center;
        background:${colors.COLOR_PRIMARY_DARK_T};
        margin: 0px 10px;
        cursor:pointer;
        border-radius:50px;
    }
    .cart:hover{
        color:${colors.COLOR_ACCENT};
    }
    .cart pre{
        position:absolute;
        top:-25px;
        left:-5px;
        background:${colors.COLOR_ACCENT};
        color:${colors.COLOR_PRIMARY};
        border-radius:100%;
        padding:0px 5px;
    }
`


const CartButton = () => {
    const {cart} = useContext(CartContext)
    const {showCart,setShowCart} = useContext(ShowCartContext)

    return (
        <div className='cart' onClick={()=>setShowCart(!showCart)} 
        >
            <i className='material-icons'>shopping_cart</i>
            <pre>{cart.items?.length}</pre>
            <style jsx>{style}</style>
        </div>
    )
}

export default CartButton
