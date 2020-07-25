import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'

const styles = css`
    div{
        box-sizing: border-box;
        padding: 0px 15px;
        width:220px;
        display:flex;
        background:${colors.COLOR_ACCENT};
        place-items:center;
        height:60px;
    }
    .logo{
        letter-spacing:20px;
        color:${colors.COLOR_PRIMARY};
        font-weight:600;
    }
` 


const Logo = () => {
    return (
        <div>
            <p className='logo'>GARBO.</p>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Logo
