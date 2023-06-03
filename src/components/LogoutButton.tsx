import { signOut } from "@auth/solid-start/client"
import { Button } from "./Button"

export const LogoutButton = () => {
	const handleLogout = () => signOut() 

	return (
		<Button text="Logout" onClick={handleLogout} />
	)
}

