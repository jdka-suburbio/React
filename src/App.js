import AuthorList from './components/AuthorList';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CreateAuthor from './components/CreateAuthor';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/BookList" element={<BookList/>}/>
        <Route path="/AuthorList" element={<AuthorList/>}/>
        <Route path="/AuthorList/create" element={<CreateAuthor/>}/>
      </Routes>
    </Router>
  );
}
export default App;
