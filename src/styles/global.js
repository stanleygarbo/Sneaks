import css from 'styled-jsx/css'
import {colors} from './colors'

export default css.global`
    *, *::before, *::after{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{
        margin: 0;
        padding: 0;
        background: ${colors.COLOR_PRIMARY};
        overflow-y:scroll;
    }
    .root{
        padding-left:220px;
        transition:.3s ease-in-out;
    }
    .maximize{
        padding-left:0px;
    }
    .minimize{
        padding-left:220px;

    }
    ::-webkit-scrollbar{
        width:10px;
    }
    ::-webkit-scrollbar-track{
        background:${colors.COLOR_PRIMARY};
    }
    ::-webkit-scrollbar-thumb{
        background: rgba(0,0,0,0.2);
        border-bottom:1px solid rgba(0,0,0,0.3);
        border-top:1px solid rgba(0,0,0,0.3);
        border-left:1px solid rgba(0,0,0,0.3);
    }
`