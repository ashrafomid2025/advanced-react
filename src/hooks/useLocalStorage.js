import { useState } from "react";

export default function useLocalStorage(){
    const [value, setValue] = useState(()=> getUser());
    function setUser(user){
        localStorage.setItem("user", user);
    }
    function getUser(){
        const user = localStorage.getItem("user");
        return user;
    }
    return [value, setUser]
}