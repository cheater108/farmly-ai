import { useState } from "react";
import AddFarm from "./AddFarm";
import FarmCard from "./FarmCard";

function Farms() {
    const [add, setAdd] = useState(false);

    return (
        <div>
            <div className="flex flex-row-reverse">
                <button
                    className="bg-green-400 p-1 px-4 rounded-md font-medium text-white"
                    onClick={() => setAdd(true)}
                >
                    Add Farm
                </button>
            </div>
            <div className="mt-2">
                <FarmCard />
            </div>
            {add && <AddFarm setAdd={setAdd} />}
        </div>
    );
}

export default Farms;
