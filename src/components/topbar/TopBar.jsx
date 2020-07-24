import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'
import Left from './left/Left'
import Right from './right/Right'

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
    }

`

const TopBar = () => {
    return (
        <nav>
            <Left />
            <Right />
            <style jsx>{style}</style>
        </nav>
    )
}

export default TopBar
