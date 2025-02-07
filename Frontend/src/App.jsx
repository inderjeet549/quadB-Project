import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Games from "./games/Games";
import Signup from "./components/Signup";
// import Admin from "./games/Admin";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route
            path="/games"
            element={authUser ? <Games /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
