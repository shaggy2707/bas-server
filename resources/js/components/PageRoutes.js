import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";


export default function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='login' element={<Loginpage />} />
        </Routes>
    )
}
