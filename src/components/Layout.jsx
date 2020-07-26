import SideBar from './sidebar/SideBar'
import globalStyles from '../styles/global'
import TopBar from './topbar/TopBar'
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuContextProvider"
import Head from 'next/head'
import { WindowSizeContext } from '../contexts/WindowSizeContextProvider'

const Layout = ({children}) => {
    const { showMenu } = useContext(MenuContext)
    const {windowSize} = useContext(WindowSizeContext)

    return (
        <div className={`root ${showMenu && windowSize.forceHideMenu ? 'minimize' : 'maximize'}`}>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Head>
            <TopBar />
            <SideBar />
            {children}
            <style jsx>{globalStyles}</style>
        </div>
    )
}

export default Layout
