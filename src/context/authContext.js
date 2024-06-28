import { createContext, useContext } from "react";

const authContext =createContext();

export default authContext;

export const  useAuth=()=>{
    const useAuthValue=useContext(authContext);
    return useAuthValue;
}