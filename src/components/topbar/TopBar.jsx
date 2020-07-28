import {useContext, useEffect, useState} from 'react'
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
        height:70px;
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
    const [windowSize, setWindowSize] = useState()
    const {showMenu,setShowMenu} = useContext(MenuContext)
    const {dispatch} = useContext(WindowSizeContext)
    
    useEffect(() => {
        window.addEventListener('resize',resized)
        resized()
        return () => window.removeEventListener('resize',resized)
    }, [])

    useEffect(()=>{
        if(windowSize < 1070 ){
            dispatch({type:'SET_ONLY_SHOW_BTN_ICONS',payload:true })
        }
        else if(windowSize > 1070 ){
            dispatch({type:'SET_ONLY_SHOW_BTN_ICONS',payload:false })
        }

        
        if(windowSize <=740){
            setShowMenu(false)
            dispatch({type:'FORCE_HIDE_MENU',payload:false })
        }
        else{
            setShowMenu(true)
            dispatch({type:'FORCE_HIDE_MENU',payload:true })
        }
    },[windowSize])

    const resized = () =>{
        setWindowSize(window.innerWidth)
    }

    return (
        <nav style={{paddingLeft:showMenu && '220px'}}>
            <Hamburger />
            <Right />
            <style jsx>{style}</style>
        </nav>
    )
}

export default TopBar
