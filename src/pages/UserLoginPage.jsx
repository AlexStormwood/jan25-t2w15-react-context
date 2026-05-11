import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router";


export default function UserLoginPage(){

	let [userEmail, setUserEmail] = useState("");
	let [userPassword, setUserPassword] = useState("");
	const {setJwt} = useContext(UserContext);
	const navigate = useNavigate();
	
	const sendLoginData = async () => {
		// pretend there's a fetch here!!
		setJwt("pretend the login was a success!");
		navigate("/profile")
	}

	return(
		<main>
			<h1>User Login Page</h1>

			<div>
				<div>
					<label htmlFor="userEmail">Email:</label>
					<input 
						type="text" 
						name="userEmail" 
						id="userEmail" 
						value={userEmail}
						onChange={(event) => setUserEmail(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="userPassword">Password:</label>
					<input 
						type="password" 
						name="userPassword" 
						id="userPassword" 
						value={userPassword}
						onChange={(event) => setUserPassword(event.target.value)}
					/>
				</div>
				<button onClick={sendLoginData}>
					Log in
				</button>
			</div>
		</main>
	)
}