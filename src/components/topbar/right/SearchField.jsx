import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'

const style = css`
    form{
        display:flex;
        position:relative;
        margin:0px 10px;
    }
    input{
        width:400px;
        background:none;
        border:none;
        padding:0px 5px;
        outline:none;
        border-bottom:1px solid ${colors.COLOR_PRIMARY_DARK};
        font-size: 17px;
    }
    label{
        position:absolute;
        bottom:3px;
        left:0;
        transition:.2s ease-in-out;
        pointer-events:none;
    }
    span{
        position:absolute;
        bottom:0;
        width:0%;
        height:1px;
        transition: .4s ease-in-out;
        background:${colors.COLOR_ACCENT};
    }
    .from__left{
        left:0;
    }
    .from__right{
        right:15px;
    }
    input:hover ~ span,input:focus ~ span,input:valid ~ span {
        width:50%;
    }
    input:focus ~ label, input:valid ~ label{
        bottom:29px;
        font-size:10px;
        color:${colors.COLOR_ACCENT};
    }
    button{
        background:none;
        border: 1px solid ${colors.COLOR_ACCENT};
        color: ${colors.COLOR_ACCENT};
        border-radius:50px;
        padding: 0 15px;
        cursor:pointer;
    }
    button:hover{
        background: ${colors.COLOR_ACCENT_TRANSLUCENT};
    }
`

const SearchField = () => {
    return (
        <form>
            <input id='search' type="text" required />
            <label htmlFor="search">What are you looking for?</label>
            <span className='from__left'></span>
            <span className='from__right'></span>
            <button>Search</button> 
            <style jsx>{style}</style>
        </form>
    )
}

export default SearchField
