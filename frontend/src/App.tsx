import { Route,  BrowserRouter, Routes } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import Landing from "./components/landing"
import Dashboard from "./components/ui/Dashboard"

export default function App() {
  return  <BrowserRouter>
  <Routes>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Landing/>}/>
    <Route  path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
}