import './navLinks.scss'
import NavLink from './NavLink/NavLink'
import { Link } from 'react-router-dom'

export default function Bottom({ specifyNav, flexDirection }) {
    const navLinkNames = [
        'FITNESS',
        'BEAUTY',
        'HEALTH AND WELLNESS',
        'NEWS AND TRENDS',
        'FOOD AND NUTRITION',
        'LIFESTYLE',
        'APPAREL AND GEAR',
        'ABOUT US',
    ]

    function getLinkEndpoint(linkName) {
        switch (linkName) {
            case 'FITNESS':
                return 'fitness'
            case 'BEAUTY':
                return 'beauty'
            case 'HEALTH AND WELLNESS':
                return 'health-and-wellness'
            case 'NEWS AND TRENDS':
                return 'news-and-trends'
            case 'FOOD AND NUTRITION':
                return 'food-and-nutrition'
            case 'LIFESTYLE':
                return 'lifestyle'
            case 'APPAREL AND GEAR':
                return 'apparel-and-gear'
            case 'ABOUT US':
                return 'about'
        }
    }

    const linkStyles = {
        textDecoration: 'inherit',
        color: 'inherit',
        fontSize: specifyNav === 'footer' ? '0.82rem' : '0.875rem',
        fontWeight: specifyNav === 'footer' && '700',
        alignSelf: 'start',
    }

    const navLinks = navLinkNames.map((linkName) => {
        return (
            <Link
                key={linkName}
                to={`/${getLinkEndpoint(linkName)}`}
                style={linkStyles}
            >
                <NavLink specifyNav={specifyNav} linkName={linkName} />
            </Link>
        )
    })

    const styles = {
        flexDirection: specifyNav === 'footer' && 'column',
        marginTop: specifyNav !== 'topNav' && 0,
    }

    const navStyles = {
        marginTop: specifyNav !== 'topNav' && 0,
    }
    return (
        <div className="navlinks" style={navStyles}>
            <ul className={`nav-links ${flexDirection} `} style={styles}>
                {navLinks}
            </ul>
        </div>
    )
}
