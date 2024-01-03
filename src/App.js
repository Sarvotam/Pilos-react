import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
// import { Home } from "@mui/icons-material";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import UserRegistration from "./pages/auth/UserRegistration";
import PasswordRequest from "./pages/auth/PasswordRequest";
import ResetPassword from "./pages/auth/ResetPassword";
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path='Login' element={<UserRegistration/>} />
            <Route path='passwordRequest' element={<PasswordRequest/>} />
            <Route path='reset' element={<ResetPassword/>} />
          </Route>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<h1> Error 404 page not found !!! </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
