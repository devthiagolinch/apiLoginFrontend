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
            </div>

            <div className="avatar">
                <img src={user?.avatarUrl} alt="" />
            </div>
        </div>
    </div>)
}