import css from 'styled-jsx/css'
import Card from './Card'

const style = css`
    .cards__container{
        width:95%;
        margin: 0 auto;
        padding:100px 0px;
        display:grid;
        gap:40px;
        grid-template-columns: repeat( auto-fit, minmax(200px, 190px));
        justify-content:center;
        transition:.3s ease-in-out;
    }
`

const Cards = ({sneakers}) => {
    return (
        <div className='cards__container'>
            {sneakers.results.map(sneaker=>
                sneaker.media.imageUrl && <Card key={sneaker.id} sneaker = {sneaker} />
            )}
            <style jsx>{style}</style>
        </div>
    )
}

export default Cards
