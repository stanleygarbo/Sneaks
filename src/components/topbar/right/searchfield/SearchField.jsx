import {useContext, useState} from 'react'
import css from 'styled-jsx/css'
import {colors} from '../../../../styles/colors'
import {WindowSizeContext} from '../../../../contexts/WindowSizeContextProvider'
import { MenuContext } from '../../../../contexts/MenuContextProvider'
import {useRouter} from 'next/router'

const style = css`
    .form{
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
        height:40px;
    }
    label{
        position:absolute;
        bottom:3px;
        left:0;
        transition:.2s ease-in-out;
        pointer-events:none;
        color:#555;
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
    .open{
        background:none;
        border: 1px solid ${colors.COLOR_ACCENT};
        color: ${colors.COLOR_ACCENT};
        border-radius:50px;
        cursor:pointer;
        font-size:20px;
        display:flex;
        place-items:center;
        width:45px;
        height:45px;
    }
    .open:hover{
        background: ${colors.COLOR_ACCENT_TRANSLUCENT};
    }
    button i{
        font-size:30px;
        font-weight:900;
    }
    .floating__form{
        position:absolute;
        background:${colors.COLOR_PRIMARY};
        width:100%;
        height:60px;
        top:0;
        right:0;
        display:flex;
        z-index:3;
    }


    .floating__form label{
        bottom:15px;
        left:10px;
    }
    .floating__form input{
        height:100%;
        width:100%;
        margin:0;
        padding:30px 0px 0px 10px; 
    }
    .floating__form input:focus ~ label, .floating__form input:valid ~ label{
        bottom:30px;
        left:10px;
    }
    .close{
        right:0;
        background:none;
        border:none;
    }
    .close:hover{
        background:${colors.COLOR_PRIMARY_DARK_T}
    }
`

const SearchField = () => {
    const {windowSize} = useContext(WindowSizeContext)
    const {setShowMenu} = useContext(MenuContext)
    const [showForm,setShowForm] = useState(false)
    const router = useRouter()

    const searchFor=(e)=>{
        e.preventDefault()
        router.push(`/search/${e.target['searchInput'].value}`)
    }

    if(!windowSize.onlyShowBtnIcons|| showForm)
    return (
        <form className={windowSize.onlyShowBtnIcons ? 'floating__form' : 'form'} onSubmit={searchFor} >
            <input id='search' name='searchInput' type="text" required autoComplete='off' />
            <label htmlFor="search">What are you looking for?</label>
            <span className='from__left'></span>
            <span className='from__right'></span>
            {showForm && windowSize.onlyShowBtnIcons &&
            <button className='close material-icons' type='button'
                onClick={()=>setShowForm(false)}
            >close</button> }
            <style jsx>{style}</style>
        </form>
    )
    return(
        <button className='open' onClick={()=>{setShowForm(true),setShowMenu(false)}}><i className='material-icons'>search</i>
            {!windowSize.onlyShowBtnIcons && 'Search'}
            <style jsx>{style}</style>
        </button> 
    )
}

export default SearchField
