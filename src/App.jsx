
import './App.css'
import { GiLaptop } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import Footer from './Components/Footer';
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>


      </Routes>
      <Footer/>
      {/* <h1>Project Fair <GiLaptop/></h1> */}
    </>
  )
}

export default App
