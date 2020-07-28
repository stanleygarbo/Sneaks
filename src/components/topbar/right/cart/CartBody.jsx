import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'
import {useContext} from 'react'
import { CartContext } from '../../../../contexts/CartContextProvider'

const styles = css`
    .cart__body{
        height:300px;
        display:flex;
        flex-direction:column;
        overflow-y:scroll;
    }
    .cart__body::-webkit-scrollbar-track{
        background:transparent;
    }
    .cart__body::-webkit-scrollbar-thumb{
        background:${colors.COLOR_PRIMARY_TRANSLUCENT};
    }
    .cart__item{
        border-top:1px solid ${colors.COLOR_PRIMARY_DARK};
        padding: 10px 10px;
        display:flex;
        position:relative;
    }
    .cart__item__image{
        width:50px;
        height:50px;
        margin-right:10px;
    }
    button{
        position:absolute;
        top:0;
        right:0;
    }
`

const CartBody = ({cart}) => {
    const {dispatch} = useContext(CartContext)

    return (
        <div className='cart__body'>
            {cart.items.map((item,index)=>
                <div className='cart__item' key={item.id}>
                    <img src={item.media.imageUrl} className='cart__item__image'></img>
                    <div className='cart__item_info'> 
                        <div className='cart__item__title'>{item.name}</div>    
                        <div className='cart__item__brand'>{item.brand}</div>    
                        <div className='cart__item__price'>${item.retailPrice}</div>    
                    </div>   
                    <button className='material-icons'
                    onClick={()=>{
                        dispatch({
                            type:'REMOVE_FROM_CART',
                            payload: {
                                index,
                                retailPrice: item.retailPrice
                            }
                        })
                    }}
                    >close</button>
                </div>    
            )}
            <style jsx>{styles}</style>
        </div>
    )
}

export default CartBody
