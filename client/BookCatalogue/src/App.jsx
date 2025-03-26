import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'

function App() {

  return (
    <>
    <Header/>
      <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    <Footer/>
    </>
  )
}

export default App
