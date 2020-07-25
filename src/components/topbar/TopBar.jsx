import {useContext, useEffect} from 'react'
import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'
import Right from './right/Right'
import Hamburger from './left/Hamburger'
import { MenuContext } from '../../contexts/MenuContextProvider'
import { WindowSizeContext } from '../../contexts/WindowSizeContextProvider'

const style = css`
    nav{
        width:100%;
        z-index:1;
        height:60px;
        position:fixed;
        top:0;
        left:0;
        background: ${colors.COLOR_PRIMARY};
        display:flex;
        align-items:center;
        justify-content:space-between;
        box-shadow:0px 0px 3px rgba(0,0,0,0.2);
        transition:.3s ease-in-out;
    }

`

const TopBar = () => {
    const {showMenu,setShowMenu} = useContext(MenuContext)
    const {windowSizeSmall,setWindowSizeSmall} = useContext(WindowSizeContext)
    
    useEffect(() => {
        window.addEventListener('resize',resized)
        resized()
        return () => window.removeEventListener('resize',resized)
    }, [])

    const resized = () =>{
        console.log(window.innerWidth)
        if(window.innerWidth <= 1070){
            setWindowSizeSmall(true)
        }
        else{
            setWindowSizeSmall(false)
        }

        if(window.innerWidth <=740){
            setShowMenu(false)
        }
        else{
            setShowMenu(true)
        }

    }

    return (
        <nav style={{paddingLeft:showMenu && '220px'}}>
            <Hamburger />
            <Right />
            {
            console.log(windowSizeSmall)

            }
            <style jsx>{style}</style>
        </nav>
    )
}

export default TopBar
