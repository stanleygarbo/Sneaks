import {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'
import { WindowSizeContext } from '../../../contexts/WindowSizeContextProvider'

const style = css`
    a{
        display:block;
        text-decoration:none;
        border-radius:50px;
        padding:8px 20px;
        border: 1px solid ${colors.COLOR_PRIMARY_DARK};
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:18px;
    }
    .small{
        width:45px;
        height:45px;
        padding:0;
    }
    a i{
        font-size:23px;
        font-weight:900;
    }
    .active{
        color: ${colors.COLOR_ACCENT};
        font-weight:600;
        background:${colors.COLOR_ACCENT_TRANSLUCENT};
        border:none;
    }
    .inactive{
        color:#222;
    }
    .inactive:hover{
        background:${colors.COLOR_PRIMARY_DARK_T}
    }
` 

const TopBarLinks = ({href,as,name,icon}) => {
    const router = useRouter()
    const {windowSize} = useContext(WindowSizeContext)


    return(
        <li>
            <Link as={`${as}`} href={href}>
                <a className={`${windowSize.onlyShowBtnIcons && 'small'} ${router.asPath === href?'active':'inactive'}`}>
                    {icon && <i className='material-icons'>{icon}</i>}
                    {!windowSize.onlyShowBtnIcons && name}
                </a>
            </Link>
            <style jsx>{style}</style>
        </li>
    )
}

export default TopBarLinks
