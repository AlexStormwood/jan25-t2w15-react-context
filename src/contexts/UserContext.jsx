
import { createContext } from "react";

// export const variableName is good for multiple exports from one file 
// export const UserContext
const UserContext = createContext({email: ""});

// export default is nice if this is the only thing coming out of this file!
export default UserContext;