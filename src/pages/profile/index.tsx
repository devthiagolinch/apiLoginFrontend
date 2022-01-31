import { useEffect, useState } from "react"
import { useParams } from "react-router";

import './styles.scss'
import { api } from "../../services/apiLogin/api"
import { Link } from "react-router-dom";

type User = {
    id: string,
    name: string,
    email: string,
    avatarUrl: string,
}

export function Profile() {
    const {id} = useParams()
    const [user, setUser] = useState<User>();

    useEffect(() => {
        api.get(`users/profile/${id}`).then(({data}) => {
            setUser(data)
        })

    }, [])

    return (
        <div id="page-content">
            <div className="profile-box">
                <div className="profile-infos">
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                    <Link to={"/"} className="return-button">Logout</Link>
                </div>
                <div className="profile-img">
                    <img src={user?.avatarUrl} alt="" />
                </div>
            </div>
        </div>
    )
}