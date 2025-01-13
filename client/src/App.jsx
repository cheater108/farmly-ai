import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
