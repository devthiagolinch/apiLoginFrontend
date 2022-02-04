import { Link } from 'react-router-dom'
import './styles.scss'

type User = {
    name: string;
    email: string;
    avatarUrl: string;
}

export function Header(user: User) {
    return (<div className="header">
        <div className="user-infos">
            <div className="user-name">
                <p>{user?.name}</p>
                <Link className='logoutBtn' to={"/"}>Logout</Link>
            </div>

            <div className="avatar">
                <img src={user?.avatarUrl} alt="" />
            </div>
        </div>
    </div>)
}