import { useState } from 'react'
import Dropdown from './Dropdown/Dropdown'
import './navLink.scss'

export default function NavLink(props) {
    const [dropdownOnHover, setDropdownOnHover] = useState(false)

    function handleMouseEnter() {
        setDropdownOnHover(true)
    }

    function handleMouseLeave() {
        setDropdownOnHover(false)
    }

    return (
        <div className="nav-link">
            <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="fitness"
            >
                {props.linkName}
                {dropdownOnHover &&
                    props.linkName !== 'ABOUT US' &&
                    props.specifyNav === 'topNav' && (
                        <Dropdown
                            key={props.linkName}
                            linkName={props.linkName}
                        />
                    )}
            </li>
        </div>
    )
}
