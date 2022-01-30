import { FormEvent, useState } from "react"
import { useNavigate } from "react-router"

import './signupStyle.scss'
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

    return (
        <div className="page-content">
            <div className="login-box">
            <div className="inputs">
                <form>
                <div className="input-box">
                        <p>Nome Completo:</p>
                        <input type="email" 
                            onChange={event => setUserName(event.target.value)} 
                            value={userName}
                        />
                    </div>

                    <div className="input-box">
                        <p>Avatar:</p>
                        <input type="email" 
                            onChange={event => setUserAvatar(event.target.value)} 
                            value={userAvatar}
                        />
                    </div>

                    <div className="input-box">
                        <p>E-mail:</p>
                        <input type="email" 
                            onChange={event => setUserEmail(event.target.value)} 
                            value={userEmail}
                        />
                    </div>

                    <div className="input-box">
                        <p>Senha:</p>
                        <input 
                            type="password"
                            onChange={event => setUserPassword(event.target.value)}
                            value={userPassword}
                        />
                    </div>
                    <button 
                        onClick={handleCreateUser}
                    >
                        Cadastrar
                    </button>
                    
                </form>
            </div>
            </div>
        </div>
    );
}