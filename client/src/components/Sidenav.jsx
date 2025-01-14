import home_icon from "../assets/home.svg";
import farm_icon from "../assets/picture.svg";
import ai_icon from "../assets/artificial-intelligence.svg";
import dollar_icon from "../assets/dollar.svg";
import { NavLink } from "react-router-dom";

function Sidenav() {
    return (
        <div className="w-full h-full bg-green-4000 rounded-md flex flex-col gap-2 ">
            <NavLink to={"/dashboard"}>
                <div className="flex gap-3 items-center p-2 px-4 rounded-md">
                    <img src={home_icon} alt="dashboard" width={15} />
                    <p>Dashboard</p>
                </div>
            </NavLink>
            <NavLink to={"/farms"}>
                <div className="flex gap-3 items-center p-2 px-4 rounded-md">
                    <img src={farm_icon} width={15} alt="" />
                    <p>Farms</p>
                </div>
            </NavLink>
            <NavLink to={"/insights"}>
                <div className="flex gap-3 items-center p-2 px-4 rounded-md">
                    <img src={ai_icon} width={15} alt="" />
                    <p>AI insights</p>
                </div>
            </NavLink>
            <NavLink to={"/pro"}>
                <div className="flex gap-3 items-center p-2 px-4 rounded-md">
                    <img src={dollar_icon} width={15} alt="" />
                    <p>Get Pro</p>
                </div>
            </NavLink>
        </div>
    );
}

export default Sidenav;
