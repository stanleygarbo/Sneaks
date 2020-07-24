import MenuContextProvider from '../contexts/MenuContextProvider'
import CartContextProvider from '../contexts/CartContextProvider'
import ShowCartContextProvider from '../contexts/ShowCartContextProvider'

function MyApp({ Component, pageProps }) {
    return (
        <MenuContextProvider>
            <CartContextProvider>
                <ShowCartContextProvider>
                    <Component {...pageProps} />
                </ShowCartContextProvider>
            </CartContextProvider>
        </MenuContextProvider>
    )
}

export default MyApp