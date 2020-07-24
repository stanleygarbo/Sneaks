import {useContext} from 'react'
import { MenuContext } from '../../../contexts/MenuContextProvider'
import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'

const styles = css`
    .hamburger{
        width:50px;
        height:50px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:100%;
        margin: 0px 5px;
        cursor:pointer;

    }
    .hamburger:hover{
        background:${colors.COLOR_PRIMARY_DARK_T};
    }
    span{
        position:relative;
        width:25px;
        height:3px;
        background:${colors.COLOR_PRIMARY};
    }
    span::before,span::after{
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        background:${colors.COLOR_PRIMARY};
        left:0;
        top:0;
    }
    span::before{
        transform:translateY(-7px);
    }
    span::after{
        transform:translateY(7px);
    }
`

const Hamburger = () => {
    const {showMenu,setShowMenu}= useContext(MenuContext)

    return (
        <div className='hamburger' onClick={()=>setShowMenu(!showMenu)}>
            <span></span>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Hamburger
