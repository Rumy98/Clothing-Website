import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import { AuthProvide } from "./context/AuthContext";
// import Navbar from './components/navbar'

function App() {
  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;
