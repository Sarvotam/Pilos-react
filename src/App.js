import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
// import { Home } from "@mui/icons-material";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import UserRegistration from "./components/pages/auth/UserRegistration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path='Login' element={<UserRegistration/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
