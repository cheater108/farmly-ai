import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Farms from "./components/Farms";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
                <Route path="/" element={<DashboardPage />}>
                    <Route path="dashboard" />
                    <Route path="farms" element={<Farms />} />
                    <Route path="insights" />
                    <Route path="pro" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
