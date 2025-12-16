import style from './style.module.css'

import Navigation from './Navigation.jsx'
import Logo from './Logo.jsx'
import Buttons from './Buttons.jsx'

function TopLevelHeader() {
    return (
        <div class={style.topLevelHeader}>
            <Logo />
            <Navigation />
            <Buttons />
        </div>
    )
}

export default TopLevelHeader;