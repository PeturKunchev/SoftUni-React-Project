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

import BookCatalog from './components/book-catalog/BookCatalog.jsx'
import CreateBook from './components/create-book/CreateBook.jsx'
import About from './components/about/About.jsx'
import Details from './components/details/Details.jsx'
import EditBook from './components/edit/EditBook.jsx'
import Profile from './components/profile/Profile.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import ProtectedRouteLoggedIn from './utils/ProtectedRouteLoggedIn.jsx'
import Error from './components/error/Error.jsx'

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

            <Route element={<ProtectedRouteLoggedIn/>}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute/>}>
            <Route path="/:userId/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/books" element={<BookCatalog />} />
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/:bookId/edit" element={<EditBook />} />
            <Route path="/books/:bookId/details" element={<Details />} />
            <Route path='*' element = {<Error/>} />
        </Routes>
      </main>
      <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App
