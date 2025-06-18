import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { setToken } from "../util/auth";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const options = { 
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({username , password})
        };

        console.log("before response");

        const response = await fetch("http://localhost:8080/auth/login", options );
        console.log("after response");
        if(response.ok){
            console.log(response);
            //var token = await response.json();
            //console.log(token);
            var token = await response.text();
            console.log(token);
            //const token = await response.text;
            setToken(token);
            navigation('/AuthorList');
        }
        else {
            console.log(response);
            alert("Error");
        }
    };

    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Ok</button>
        </form>
    )
}

export default Login;
