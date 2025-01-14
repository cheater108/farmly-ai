import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Farms from "./components/Farms";
import InsightsPage from "./pages/InsightsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />
                <Route path="/" element={<DashboardPage />}>
                    <Route path="farms" element={<Farms />} />
                    <Route path="insights" element={<InsightsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
