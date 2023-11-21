import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import About from "./components/About";
import User from "./components/User";
import Profile from "./components/Profile";


function App() {
  return (
   <Routes>
    <Route path="/" element={<UserList/>}/>
    <Route path="/user/:id" element={<User/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="profile" element={<Profile/>}/>

   </Routes>
  );
}

export default App;
