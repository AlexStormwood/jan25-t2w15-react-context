import { useContext, useEffect, useState } from "react"
import UserContext from "../contexts/UserContext"
import { useNavigate } from "react-router";


export default function UserProfilePage(){

	// object destructuring to grab one variable from the context data object
	let {jwt} = useContext(UserContext);

	let [email, setEmail] = useState("");
	let [username, setUsername] = useState("");

	// let navigate = useNavigate();

	useEffect(() => {

		// setTimeout(() => {
		// if (jwt){
		// // if JWT exists, fetch user data from the backend
			
		// } 
		// else {
		// 		// else if JWT does NOT exist, redirect to the login page 
		// 		console.log("JWT current value is: " + jwt);
		// 		navigate("/login");
		// 	}
		// }, 1000)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [jwt]);

	return(
		<main>
			<h1>User Profile Page</h1>

			<div>
				User data:
				<h2>Email: {email}</h2>
				<h2>Username: {username}</h2>

			</div>
		</main>
	)
}