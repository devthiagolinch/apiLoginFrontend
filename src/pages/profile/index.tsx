import { useEffect, useState } from "react"
import { useParams } from "react-router";

import './styles.scss'
import { api } from "../../services/apiLogin/api"
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";

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

    if(user) {
        return (
            <div id="page">
                <Header 
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    avatarUrl={user.avatarUrl}
                />

                <div id="page-content">
                    <h1>Bem vindo de volta {user.name}</h1>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Page Not Found</h1>
        )
    }
}