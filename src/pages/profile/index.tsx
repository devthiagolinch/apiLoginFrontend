import { api } from "../../services/apiLogin/api"


export function Profile() {

    async function handleProfile() {
        const userProfile = await api.get('/users/profile/96fd248b-8b27-47ea-952b-583d0d835fdb').then(data => {return data.data})

        console.log(userProfile)
    }

    return (
        <div>
            <button onClick={handleProfile}>Get Profile</button>
        </div>
    )
}