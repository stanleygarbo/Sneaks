import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'

const styles = css`
    div{
        display:flex;
        justify-content:space-between;
        padding:5px 10px;
        align-items:center;
    }
    h1{
        margin:0;
    }
    button{
        color:#fff;
        border:none;
        background:none;
        border-radius:100%;
        width:40px;
        height:40px;
        cursor:pointer;
    }
    button:hover{
        background:${colors.COLOR_PRIMARY_TRANSLUCENT};
    }
`

const CartHeader = ({setShowCart}) => {
    return (
        <div>
            <h1>Cart</h1>
            <button className='material-icons' onClick={()=>setShowCart(false)}>close</button>
            <style jsx>{styles}</style>
        </div>
    )
}

export default CartHeader
