import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'
import {useContext} from 'react'
import { CartContext } from '../../contexts/CartContextProvider'


const style = css`
    .card__footer{
        padding: 10px;
        display:flex;
        flex-direction:column;
    }
    h1,h2,h3,h4{
        font-size:14px;
        margin: 0;
    }
    button{
        display:flex;
        place-items:center;
        cursor:pointer;
        border: 1px solid ${colors.COLOR_PRIMARY_DARK};
        background:linear-gradient(to right,${colors.COLOR_ACCENT} 0%,${colors.COLOR_ACCENT_TWO} 99%);
        transition: .3s ease-in-out;
        padding: 6px 15px;
        margin-top:10px;
        color:#fff;
        border-radius:5px;
        box-shadow: 0 12px 12px -11px ${colors.COLOR_ACCENT};
        border:none;
        opacity:0.9;
    }
    button:hover{
        opacity:1;
    }
    button i{
        font-size:17px;

    }
`

const CardFooter = ({sneaker}) => {
    const {dispatch} = useContext(CartContext)

    return (
        <div className='card__footer'>
            <h1>{sneaker.name}</h1>
            <h2>{sneaker.gender}</h2>
            <h3>{sneaker.brand}</h3>
            <h4>${sneaker.retailPrice}</h4>
            <div className='card__footer__buttons'>
                <button onClick={()=>dispatch({type:'ADD_TO_CART',payload: sneaker})}>
                    <i className='material-icons'>add_shopping_cart</i>Add to Cart
                </button>
            </div>
            <style jsx>{style}</style>
        </div>
    )
}

export default CardFooter
