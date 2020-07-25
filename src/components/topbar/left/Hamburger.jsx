import {useContext} from 'react'
import { MenuContext } from '../../../contexts/MenuContextProvider'
import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'

const styles = css`
    .hamburger__container{
        width:50px;
        height:50px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:100%;
        margin: 0px 5px;
        cursor:pointer;
        // background:${colors.COLOR_ACCENT};

    }
    .hamburger__container:hover{
        background:${colors.COLOR_PRIMARY_DARK_T};
    }
    span{
        position:relative;
        width:25px;
        height:3px;
        background:${colors.COLOR_ACCENT};
        transition: .3s ease-in-out;
    }
    span::before,span::after{
        transition: .3s ease-in-out;
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        background:${colors.COLOR_ACCENT};
        left:0;
        top:0;
    }
    span::before{
        transform:translateY(-7px);
    }
    span::after{
        transform:translateY(7px);
    }
    .arrow{
        background:transparent;
    }
    .arrow::before{
        transform:translateY(-5px) rotate(-45deg);
        width:17px;
    }
    .arrow::after{
        transform:translateY(5px) rotate(45deg);
        width:17px;
    }
`

const Hamburger = () => {
    const {showMenu,setShowMenu}= useContext(MenuContext)

    return (
        <div className='hamburger__container' onClick={()=>setShowMenu(!showMenu)}>
            <span className={showMenu ? 'arrow' : 'hamburger'}></span>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Hamburger
