import css from 'styled-jsx/css'
import {colors} from '../../styles/colors'
import CardImage from './CardImage'
import CardFooter from './CardFooter'

const style = css`
    div{
        background:${colors.COLOR_PRIMARY};
        padding: 10px;
        position:relative;
        transition: .2s ease-in-out;
        box-shadow: 0px 10px 20px -13px ${colors.COLOR_SHADOW};

    }
    div:hover{
        transform:scale(1.02);
        box-shadow: 0px 5px 15px -2px ${colors.COLOR_SHADOW};
    }
`

const Card = ({sneaker}) => {
    return (
        <div>
            <CardImage imageUrl={sneaker.media.imageUrl} />
            <CardFooter sneaker={sneaker} />
            <style jsx>{style}</style>
        </div>
    )
}

export default Card