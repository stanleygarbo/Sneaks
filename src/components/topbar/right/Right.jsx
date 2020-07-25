import TopBarLinks from './TopBarLinks'
import SearchField from './searchfield/SearchField'
import CartButton from './cart/CartButton'
import css from 'styled-jsx/css'
import Cart from './cart/Cart'

const styles = css`
    .right{
        padding: 0px 15px;
        display:flex;
    }
    
    ul{
        list-style-type:none;
        display:flex;
        align-items:center;
        margin:0px 10px;
        padding:0;
    }
`

const Right = () => {
    return (
        <div className='right'>
            <SearchField />
            <ul>
                <TopBarLinks name='Home' href='/' as='/' icon='home' />
            </ul>
            <CartButton/>
            <Cart/>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Right
