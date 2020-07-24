import Link from 'next/link'
import {useRouter} from 'next/router'
import css from 'styled-jsx/css'
import {colors} from '../../../styles/colors'

const style = css`
    a{
        display:block;
        text-decoration:none;
        border-radius:50px;
        padding:8px 20px;
        border: 1px solid ${colors.COLOR_PRIMARY_DARK};
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

const TopBarLinks = ({href,as,name}) => {
    const router = useRouter()

    return(
        <li>
            <Link as={`${as}`} href={href}>
                <a className={router.asPath === href?'active':'inactive'}>{name}</a>
            </Link>
            <style jsx>{style}</style>
        </li>
    )
}

export default TopBarLinks
