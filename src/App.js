import AuthorList from './components/AuthorList';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/AuthorList" element={<AuthorList/>}/>
      </Routes>
    </Router>
  );
}
export default App;
