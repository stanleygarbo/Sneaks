import MenuContextProvider from '../contexts/MenuContextProvider'
import CartContextProvider from '../contexts/CartContextProvider'
import ShowCartContextProvider from '../contexts/ShowCartContextProvider'
import WindowSizeContextProvider from '../contexts/WindowSizeContextProvider'

function MyApp({ Component, pageProps }) {

    return (
        <MenuContextProvider>
            <CartContextProvider>
                <ShowCartContextProvider>
                    <WindowSizeContextProvider>
                        <Component {...pageProps} />
                    </WindowSizeContextProvider>
                </ShowCartContextProvider>
            </CartContextProvider>
        </MenuContextProvider>
    )
}

export default MyApp