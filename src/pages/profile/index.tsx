import { useEffect, useState } from "react"
import { api } from "../../services/apiLogin/api"

type User = {
    id: string,
    name: string,
    email: string,
    avatarUrl: string,
}

export function Profile() {
    const [user, setUser] = useState<User>();

/*     useEffect(() => {
        api.get('users/profile/d2994394-181e-452b-bc9b-69a9b112b825').then(({data}) => {
            setUser(data)
        })

        api.get(`users/profile/`).then(({data}) => {
            setUser(data)
            console.log(data)
        })

    }, []) */
    console.log(user)

    return (
        <div>

            <div>
                <div className="header">
                    <h1>Hello {user?.name}</h1>
                    <span>{user?.email}</span>
                </div>
                <img src={user?.avatarUrl} alt="" />
            </div>
        </div>
    )
}