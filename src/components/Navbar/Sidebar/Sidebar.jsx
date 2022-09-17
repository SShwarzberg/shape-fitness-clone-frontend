import NavLinks from '../../NavLinks/NavLinks'
import './sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <NavLinks flexDirection="column" specifyNav="sidebar" />
        </div>
    )
}
