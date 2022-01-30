import { FormEvent, useState } from "react"
import { useNavigate } from "react-router"
import { api } from "../../services/apiLogin/api"


export function CreateUser() {
    let navigate = useNavigate();

    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault();

        if(userPassword.trim() === '') {
            throw new Error("Not Password")
        }
        
        const user = {
            name: userName,
            email: userEmail,
            avatarUrl: userAvatar,
            password: userPassword
        }

        await api.post('/users/', user)

        navigate("/")
    }

    return(
        <div>
            <form onSubmit={handleCreateUser}>
                <h3>Complete name</h3>
                <input type="text" placeholder="Name"
                    onChange={event => setUserName(event.target.value)} 
                    value={userName}
                />

                <h3>Profile picture</h3>
                <input type="text" placeholder="Avatar URL" 
                    onChange={event => setUserAvatar(event.target.value)}
                    value={userAvatar}
                />

                <h3>Better e-mail</h3>
                <input type="email" name="userEmail" placeholder="E-mail" 
                    onChange={event => setUserEmail(event.target.value)}
                    value={userEmail}
                />

                <h3>Password</h3>
                <input type="password" name="userPassword" placeholder="Password" 
                    onChange={event => setUserPassword(event.target.value)}
                    value={userPassword}
                />

                <button
                    type="submit"
                >
                    Create account
                </button>
            </form>
        </div>
    )
}