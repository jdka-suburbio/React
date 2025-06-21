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
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>                
                <div className="p-8">                
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                        <div className="relative">
                            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                            <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                        </div>
                        <div className="relative">
                        <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                            <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                        </div>            
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">Ok</button>
                    </form>
                </div>
        </div>       
    )
}

export default Login;
