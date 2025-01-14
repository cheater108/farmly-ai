import home_icon from "../assets/home.svg";
import farm_icon from "../assets/picture.svg";
import ai_icon from "../assets/artificial-intelligence.svg";
import { NavLink } from "react-router-dom";

function Sidenav() {
    return (
        <div className="w-full h-full bg-green-4000 rounded-md flex flex-col gap-2 ">
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
        </div>
    );
}

export default Sidenav;
