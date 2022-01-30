import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/apiLogin/api";

export type User = {
    name: string;
    email: string;
    avatarUrl: string;
    password: string;
}

export function LoginPage() {
    const [user, setUser] = useState<User>();

    let history = useNavigate();

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    /* useEffect(() => {
        api.get("/users/").then(data => {
            console.log(data)
        })
    }, []) */

    function createUserPath() {
        history("/signup")
    }

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const user = {
            email: userEmail,
            password: userPassword
        }

        await api.post('/users/authenticate', user).then(response => {
            if(!response) {
                throw new Error("Not Allowd")
            }

            api.get(`users/profile/${response.data}`).then(({data}) => {
                setUser(data)
                console.log(data)
            })

            history(`profile/${response.data}`)
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

                <button
                    onClick={createUserPath}
                >
                    Create Account
                </button>

            </div>
        </div>
    );
};