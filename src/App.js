import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
// import { Home } from "@mui/icons-material";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import UserRegistration from "./components/pages/auth/UserRegistration";
import PasswordReset from "./components/pages/auth/PasswordReset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path='Login' element={<UserRegistration/>} />
            <Route path='passwordReset' element={<PasswordReset/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
