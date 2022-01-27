import { FormEvent, useEffect, useState } from "react";
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
        try {
          const response = await api.get('/users');
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    async function handleLogin() {
    }

    return (
        <div>
            <div className="inputs">
                <form action="submmit" method="post">
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

                    
                </form>
                <button 
                        onClick={getUser}
                    >
                        Entrar
                    </button>
            </div>

            <div className="img">
                <img src="" alt="" />
            </div>
        </div>
    );
};