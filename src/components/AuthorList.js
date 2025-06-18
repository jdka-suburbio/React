import React, { useEffect , useState } from "react"
import { useNavigate } from "react-router-dom";
import { getToken } from "../util/auth";

function AuthorList(){
    var token = getToken();
    const navigation = useNavigate();

    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const options = { 
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }
        };        

        fetch("http://localhost:8080/authors", options)
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch((err) => console.log("Error: ",err));
    }, []);    
        const handleDelete = (id) => {

            const deleteOptions = { 
                method : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                }
            };        
    
            fetch(`http://localhost:8080/authors/${id}`, deleteOptions)
            .then((res) => {
                if(res.status == 204)
                {
                    console.log("oks");
                    setAuthors(prevItems => prevItems.filter(item => item.id !==id));                    
                }
                else
                {
                    console.log("error");                    
                }
            })
            .catch((err) => console.log("Error Request: ",err));            
        }


    return(
        <div>
            <h2>Autores</h2>
            <ul>
                {authors.map((item) => (
                    <li key={item.id}>
                        <button onClick={()=>handleDelete(item.id)}>X</button>
                        {item.name}
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default AuthorList;
