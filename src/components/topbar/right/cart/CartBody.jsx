import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'

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
    }
    .cart__item__image{
        width:50px;
        height:50px;
        margin-right:10px;
    }
`

const CartBody = ({cart}) => {
    return (
        <div className='cart__body'>
            {cart.items.map(item=>
                <div className='cart__item' key={item.id}>
                    <img src={item.media.imageUrl} className='cart__item__image'></img>
                    <div className='cart__item_info'> 
                        <div className='cart__item__title'>{item.name}</div>    
                        <div className='cart__item__brand'>{item.brand}</div>    
                        <div className='cart__item__price'>${item.retailPrice}</div>    
                    </div>   
                </div>    
            )}
            <style jsx>{styles}</style>
        </div>
    )
}

export default CartBody
