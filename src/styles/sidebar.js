import css from 'styled-jsx/css'
import {colors} from './colors'

export default css.NavBar`
    nav{
        height: 100vh;
        width:220px;
        background: ${colors.COLOR_ACCENT};
        position:fixed;
        top:0;
        left:0;
        padding-top:60px;
        transition: .3s ease-in-out;
        z-index:0;
        overflow:hidden;
    }
    .show__menu{
        transform:translateX(0);
    }
    .hide__menu{
        transform:translateX(-100%);
    }
    nav::before{
        content:'';
        position:absolute;
        left:0;
        top:20vh;
        background:linear-gradient(45deg,${colors.COLOR_PRIMARY_TRANSLUCENT},transparent);
        opacity:0.21;
        width:200px;
        height:200px;
        border-radius:100%;
    }
    nav::after{
        content:'';
        position:absolute;
        left:0;
        top:50vh;
        background:${colors.COLOR_PRIMARY_TRANSLUCENT};
        opacity:0.1;
        width:200px;
        height:200px;
        transform:rotate(45deg);
    }
    ul{
        list-style-type:none;
        padding:0;
        margin:0;
        height:100%;
        overflow-y:scroll;    
        position:relative;
        z-index:1;
    }
    ::-webkit-scrollbar{
        width:10px;
    }
    ::-webkit-scrollbar-track{
        background:transparent;
    }
    ::-webkit-scrollbar-thumb{
        background:none;
        border:none;
    }
    nav:hover ul::-webkit-scrollbar-thumb{
        background: rgba(0,0,0,0.2);
        border-left:1px solid rgba(0,0,0,0.3);
        border-bottom:1px solid rgba(0,0,0,0.3);
        border-top:1px solid rgba(0,0,0,0.3);
    }
`