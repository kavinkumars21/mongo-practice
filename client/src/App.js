
import {Routes, Route, Link} from 'react-router-dom';

import MenuList from './Components/MenuList'

import DeleteMenu from './Components/DeleteMenu'

import UpdateMenu from './Components/UpdateMenu'

import SearchMenu from './Components/SearchMenu'

import './App.css'

function App() {
  return (
    <div>
      <div className="navbar-container">
        <Link to="home">Home</Link>
        <Link to="search">Search</Link>
        <Link to="update">Update</Link>
        <Link to="delete">Delete</Link>
      </div>
      
      <Routes>
        <Route exact path="/" element={<MenuList />}></Route>
        <Route path="/home" element={<MenuList />}></Route>
        <Route path="/search" element={<SearchMenu/>}></Route>
        <Route path="/update" element={<UpdateMenu/>}></Route>
        <Route path="/delete" element={<DeleteMenu/>}></Route>
      </Routes>
    </div>
  )
}

export default App