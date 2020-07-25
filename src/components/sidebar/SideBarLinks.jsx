import {useRouter} from 'next/router'
import Link from 'next/link'
import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'

const style = css`
    a{
        z-index:0;  
        display:block;
        padding: 12px 0px 12px 30px;
        outline:none;
        text-decoration:none;
        color:#fff;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        font-weight:normal;
    }
    .active{
        background:${colors.COLOR_PRIMARY_TRANSLUCENT};
        color:${colors.COLOR_PRIMARY};
        font-weight:600;
    }
    .inactive:hover{
        background:${colors.COLOR_PRIMARY_DARK_T};
    }
`

const SideBarLinks = ({brand}) =>{
    const router = useRouter()
    return(
        <li>
            <Link as={`/${brand.toLowerCase()}`} href='/[sneakertype]'>
                <a className={router.asPath===`/${brand.toLowerCase()}`?'active':'inactive'} > {brand}</a>
            </Link>
            <style jsx>{style}</style>
        </li> 
    )
}

export default SideBarLinks