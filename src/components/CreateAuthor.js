import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getToken } from "../util/auth";
import Navbar from "./NavBar";

function CreateAuthor(){
    var token = getToken();    
    const [name, setName] = useState('');
    const navigation = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const options = { 
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            },
            body : JSON.stringify({name})
        };

        const response = await fetch("http://localhost:8080/authors", options );

        if(response.ok){
            navigation('/AuthorList');
        }
        else {
            console.log(response);
            alert("Error");
        }
    };

return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <h1 className="text-3xl font-bold">Create Author</h1>
            </div>                
            <div className="p-8">                
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                        <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">Enviar</button>
                </form>
            </div>
        </div>       
    </div>    
)    
}

export default CreateAuthor;    