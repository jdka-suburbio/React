import React, { useEffect , useState } from "react"

function AuthorList(){
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const headers = { 
            'Method' : 'GET',
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaXM0MTQiLCJpYXQiOjE3NDk1OTQzMjksImV4cCI6MTc0OTU5NzkyOX0.v3akDpnTUK3c90lY-ea5EgP93_W5Jc7c3MG3lOiGNv4' 
        };
        fetch("http://localhost:8080/authors", { headers })
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch((err) => console.log("Error: ",err));
    }, []);

    return(
        <div>
            <h2>Autores</h2>
            <ul>
                {authors.map((item) => (
                    <li key={item.id}>
                        <button>X</button>
                        {item.name}
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default AuthorList;
