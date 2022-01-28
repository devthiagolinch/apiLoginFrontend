import { FormEvent, useState } from "react";
import { api } from "../../services/apiLogin/api";

type User = {
    name: string;
    email: string;
    avatarUrl: string;
    password: string;
}

export function LoginPage() {
    

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    async function getUser() {
    }

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const user = {
            email: userEmail,
            password: userPassword
        }

        await api.post('/users/authenticate', user).then(response => {
            console.log(response.data)
        })
    }

    return (
        <div>
            <div className="inputs">
                <form>
                    <h2>E-mail:</h2>
                    <input type="email" 
                        onChange={event => setUserEmail(event.target.value)} 
                        value={userEmail}
                    />

                    <h2>Senha</h2>
                    <input 
                        type="password"
                        onChange={event => setUserPassword(event.target.value)}
                        value={userPassword}
                    />
                    <button 
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>
                    
                </form>

            </div>

            <div className="img">
                <img src="" alt="" />
            </div>
        </div>
    );
};