import Hamburger from './Hamburger'
import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'

const styles = css`
    .left{
        box-sizing: border-box;
        padding: 0px 15px;
        width:220px;
        display:flex;
        background:${colors.COLOR_ACCENT};
        height:100%;
        place-items:center;
    }
    .logo{
        letter-spacing:10px;
        color:${colors.COLOR_PRIMARY};
        font-weight:600;
    }
` 

const Left = () => {
    return (
        <div className='left'>
            <Hamburger />
            <p className='logo'>GARBO.</p>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Left
