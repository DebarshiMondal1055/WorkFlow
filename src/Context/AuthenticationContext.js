import { createContext, useContext, useState } from "react";

export const AuthenticationContext=createContext({
    data:{},
    setUserData:()=>{},
    changeLoggedInUserData:()=>{},
    loggedInUserData:{},

    logoutUser:()=>{}
})

export const AuthenticationContextProvider=AuthenticationContext.Provider;


export const useAuthContext=()=>{
    return useContext(AuthenticationContext)
}