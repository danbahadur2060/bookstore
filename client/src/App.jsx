import { Route, Routes } from "react-router-dom"
import Header from "./components/Pages/Home"
import Books from "./components/Pages/Books"
import Signup from "./components/Pages/SignUp"
import LoginPage from "./components/Pages/Login"
const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<><Header/></>}/>
    <Route path="/book" element={<> <Books /> </>}/>
    <Route path="/signUp" element={<Signup />} />
    <Route path="/login" element={<LoginPage/>} />

   </Routes>
    </>
  )
}

export default App