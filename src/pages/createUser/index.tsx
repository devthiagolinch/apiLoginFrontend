import { useState } from "react"
import { api } from "../../services/apiLogin/api"


export function CreateUser() {

    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    async function handleCreateUser() {
        
        const user = {
            name: userName,
            email: userEmail,
            avatarURL: userAvatar,
            password: userPassword
        }

        await api.post('/users/', user);
    }

    return(
        <div>
            <form>
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
                    onClick={handleCreateUser}
                >
                    Create account
                </button>
            </form>
        </div>
    )
}