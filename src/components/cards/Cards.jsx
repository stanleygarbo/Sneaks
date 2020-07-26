import css from 'styled-jsx/css'
import Card from './Card'
import {useContext} from 'react'
import { WindowSizeContext } from '../../contexts/WindowSizeContextProvider'

const style = css`
    .cards__container{
        width:90%;
        margin: 0 auto;
        padding:100px 0px;
        display:grid;
        gap:20px;
        grid-template-columns: repeat( auto-fit, minmax(200px, 190px));
        justify-content:center;
        transition:.3s ease-in-out;
    }
    .resizeToSmall{
        grid-template-columns: repeat( auto-fit, minmax(170px, 170px));
        gap:10px;
        width:100%;
    }
`

const Cards = ({sneakers}) => {
    const {windowSize} =useContext(WindowSizeContext)

    return (
        <div className={`cards__container ${!windowSize.forceHideMenu && ' resizeToSmall'}`}>
            {sneakers.results.map(sneaker=>
                sneaker.media.imageUrl && <Card key={sneaker.id} sneaker = {sneaker} />
            )}
            <style jsx>{style}</style>
        </div>
    )
}

export default Cards
