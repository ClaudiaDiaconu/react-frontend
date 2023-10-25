import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Login from "./features/authentification/Login";
import Register from "./features/authentification/Register";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./features/home/pages/Home";
import Orders from "./features/home/pages/Orders";
import Profile from "./features/home/pages/Profile";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
