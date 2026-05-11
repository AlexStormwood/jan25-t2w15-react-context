import { useContext } from "react"
import UserContext from "../contexts/UserContext"


export default function UserProfilePage(){

	// object destructuring to grab one variable from the context data object
	let {email} = useContext(UserContext);

	return(
		<main>
			<h1>User Profile Page</h1>

			<div>
				User data:
				<h2>Email: {email || ""}</h2>

			</div>
		</main>
	)
}