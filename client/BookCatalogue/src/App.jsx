import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import { useState } from 'react'
import { UserContext } from './contexts/UserContext.js'
import Logout from './components/logout/Logout.jsx'
import CreateBook from './components/create-book/createBook.jsx'

function App() {
  const storedAuthData = JSON.parse(localStorage.getItem('authData')) || {};
  const [authData,setAuthData] = useState(storedAuthData);

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
    localStorage.setItem('authData', JSON.stringify(resultData));
  };
  const userLogoutHandler = () =>{
    setAuthData({});
    localStorage.removeItem('authData')
  }
  return (
    <>
    <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
    <Header/>
      <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/books/create" element={<CreateBook />} />
        </Routes>
      </main>
      <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App
