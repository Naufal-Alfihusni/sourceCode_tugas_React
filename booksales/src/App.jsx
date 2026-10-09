import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import LoginForm from "./components/shared/LoginForm";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import StoreLayout from "./layouts";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<StoreLayout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
