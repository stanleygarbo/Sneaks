import css from 'styled-jsx/css'

const style = css`
    div{
        width:100%;
        min-height:140px;
        background-color:gray;
        background-size:100% 100%;
    }
`

const CardImage = ({imageUrl}) => {
    return (
        <div style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <style jsx>{style}</style>
        </div>
    )
}

export default CardImage
