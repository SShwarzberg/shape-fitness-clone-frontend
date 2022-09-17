import Navlinks from '../NavLinks/NavLinks'
import Top from './Top/Top'
import './navbar.scss'

export default function Navbar() {
    return (
        <div
            className={`navbar ${window.innerWidth < 1300 && 'navbar-fixed'}`}
            aria-label="navbar"
        >
            <Top />
            {window.innerWidth > 1300 && (
                <Navlinks flexDirection="row" specifyNav="topNav" />
            )}
        </div>
    )
}
