import pin_icon from "../assets/marker.svg";
import area_icon from "../assets/map.svg";
import crop_icon from "../assets/plant-wilt.svg";
import { useState } from "react";
import EditFarm from "./EditFarm";

function FarmCard() {
    const [edit, setEdit] = useState(false);
    return (
        <div className="w-[300px] p-3 border rounded-lg">
            <div
                className="h-[100px] rounded-md"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dxcgng2n6/image/upload/v1716039259/samples/landscapes/beach-boat.jpg')",
                    backgroundSize: "cover",
                }}
            ></div>
            <p className="mt-2 font-medium">Farmland Un</p>
            <div className="flex gap-2 text-sm mt-1">
                <img src={pin_icon} alt="location" width={15} />
                <p className="text-sm">Lat: 25N Lon: 76W</p>
            </div>
            <div className="flex gap-2 text-sm mt-1">
                <img src={crop_icon} alt="location" width={15} />
                <p>Wheat, Rabbi</p>
            </div>
            <div className="flex gap-2 text-sm mt-1">
                <img src={area_icon} alt="location" width={15} />
                <p>1000sq</p>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    className="p-1 px-4 bg-green-400 text-white rounded-md text-sm font-medium"
                    onClick={() => setEdit(true)}
                >
                    Edit
                </button>
                <button className="p-1 px-4 bg-red-600 text-white rounded-md text-sm font-medium">
                    Delete
                </button>
            </div>
            {edit && <EditFarm setAdd={setEdit} />}
        </div>
    );
}

export default FarmCard;
