import {useContext} from 'react'
import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'
import { ShowCartContext } from '../../../../contexts/ShowCartContextProvider'
import { CartContext } from '../../../../contexts/CartContextProvider'
import CartHeader from './CartHeader'
import CartBody from './CartBody'
import CartFooter from './CartFooter'

const styles = css`
    .cart__wrapper{
        position:fixed;
        width:100vw;
        height:100vh;
        top:0;
        left:0;
        z-index:100;
    }
    .cart__backdrop{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }

    .cart{
        position:absolute;
        right:20px;
        top:10px;
        width:350px;
        background:linear-gradient(45deg,${colors.COLOR_ACCENT},${colors.COLOR_ACCENT_TWO});
        border-radius:10px;
        z-index:1;
        color:#fff;
    }
    .cart::before{
        position:absolute;
        top:0;
        left:0;
        content:'';
        width:200px;
        height:200px;
        border-radius:100%;
        z-index:-1;
        background:linear-gradient(45deg,${colors.COLOR_PRIMARY_TRANSLUCENT},${colors.COLOR_PRIMARY_TRANSLUCENT},transparent);
        opacity:.1;
    }
    .cart::after{
        position:absolute;
        bottom:0;
        right:0;
        content:'';
        width:300px;
        height:300px;
        border-radius:100%;
        z-index:-1;
        background:linear-gradient(${colors.COLOR_PRIMARY},${colors.COLOR_PRIMARY_TRANSLUCENT});
        opacity:.05;
    }
`

const Cart = () => {
    const {showCart,setShowCart} = useContext(ShowCartContext)
    const {cart} = useContext(CartContext)

    if(showCart)
        return (
            <div className='cart__wrapper'>
                <div className="cart__backdrop" onClick={()=>setShowCart(false)} ></div>
                <div className='cart'>
                    <CartHeader setShowCart={setShowCart} />
                    <CartBody cart={cart} />
                    <CartFooter cart={cart} />
                </div>
                <style jsx>{styles}</style>
            </div>
        )
    return null
}

export default Cart
