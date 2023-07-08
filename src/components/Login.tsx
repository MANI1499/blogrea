import { useState } from "react"


export const Login =() =>{
    const [newUsername, setUsername ] = useState('');


    return(
        <div>
            <h1>Login Here</h1>
            <input 
                onChange={(e) =>{
                    setUsername(e.target.value);
                }}
            />
            <button
                onClick={
                    
                }
            >Login </button>
            <button> Logout </button>
        </div>
    )
}
