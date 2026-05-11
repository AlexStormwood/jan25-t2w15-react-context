import { useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useLocalStorage } from "react-use";


export default function UserContextProvider({children}){

	let [jwt, setJwt] = useState("");
	let [lsJwt, setLsJwt] = useLocalStorage("jwt", "");

	useEffect(() => {
		// if a JWT is in local storage already,
		// copy it into React state
		if (lsJwt){
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setJwt(lsJwt);
		}
	// disable the eslint rule for next line because we definitely want this
	// to only run once when the component loads 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// if the JWT in state updates,
	// copy the state JWT to local storage to preserve it
	useEffect(() => {
		console.log("JWT is updated in global state, value is now: " + jwt)
		setLsJwt(jwt);
	}, [jwt, setLsJwt]);

	return <UserContext.Provider value={{
		jwt: jwt,
		setJwt: setJwt
	}}>
		{children}
	</UserContext.Provider>
}