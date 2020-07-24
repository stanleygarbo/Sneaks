import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'

const styles = css`
    div{
        padding: 5px 10px;
    }
    h2,pre{
        margin:0;
    }
`

const CartFooter = ({cart}) => {

    return (
        <div>
            <h2>Total</h2>
            <pre>${cart.total}</pre>
            <style jsx>{styles}</style>
        </div>
    )
}

export default CartFooter
