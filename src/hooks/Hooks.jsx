import { useContext } from "react"
import AuthContext from "../Context/AuthContext/AuthCOntext"

const useAuth = ()=>{
    const context = useContext(AuthContext);
    return context
}

export default useAuth