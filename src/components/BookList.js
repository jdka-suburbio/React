import { getToken } from "../util/auth";
import Navbar from "./NavBar";

function BookList(){
    var token = getToken();    

return (
    <div>
        <Navbar></Navbar>
        <h1>Book List</h1>
    </div>       
)    
}

export default BookList;    