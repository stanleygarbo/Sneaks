import sidebarStyles from '../../styles/sidebar'
import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContextProvider'
import SideBarLinks from './SideBarLinks'
import Logo from './Logo'

function SideBar(){

    const brands = [
        "JORDAN",
        "NIKE",
        "NEW BALANCE",
        "ADIDAS",
        "CONVERSE",
        "REEBOK",
        "VANS",
        "PUMA",
        "UNDER ARMOUR",
        "SAUCONY",
        "ASICS",
        "ONITSUKA TIGER",
        "YEEZY"
    ]

    const {showMenu} = useContext(MenuContext)

    return (
        <nav className={showMenu ? 'show__menu' : 'hide__menu'}>
            <Logo />
            <ul>
                {brands.map((brand,index) => 
                    <SideBarLinks brand={brand} key={index} />
                )}
            </ul>
            <style jsx>{sidebarStyles}</style>
        </nav>
    )
}

export default SideBar
