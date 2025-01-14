import { useState } from "react";

function EditFarm({ setAdd }) {
    const [farm, setFarm] = useState({
        name: "",
        location: "",
        crop: "",
        area: 0,
    });

    function handleSubmit() {
        e.preventDefault();
    }

    return (
        <div className="fixed w-dvw h-dvh bg-modal top-0 left-0 flex justify-center items-center">
            <div>
                <form
                    action=""
                    className="flex flex-col p-3 px-4 border shadow-sm rounded-md bg-white"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-center font-semibold text-xl mb-3">
                        Add a farm
                    </h1>
                    <label htmlFor="name" className="text-xs font-medium mb-2">
                        Farm name
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name of you farm"
                        value={farm.name}
                        onChange={(e) =>
                            setFarm({
                                ...farm,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label
                        htmlFor="location"
                        className="text-xs font-medium mb-2"
                    >
                        Location
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="text"
                        name="location"
                        placeholder="location"
                        value={farm.location}
                        onChange={(e) =>
                            setFarm({
                                ...farm,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />

                    <label htmlFor="crop" className="text-xs font-medium mb-2">
                        Crop name
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="crop"
                        name="crop"
                        placeholder="crop"
                        value={farm.crop}
                        onChange={(e) =>
                            setFarm({
                                ...farm,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="area" className="text-xs font-medium mb-2">
                        Area
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="number"
                        name="area"
                        placeholder="area"
                        value={farm.area}
                        onChange={(e) =>
                            setFarm({
                                ...farm,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <div className="flex justify-between gap-4">
                        <button
                            type="submit"
                            className="w-full p-1 bg-green-400 rounded-md text-white font-semibold mt-4"
                        >
                            Submit
                        </button>
                        <button
                            className="w-full p-1 bg-red-500 rounded-md text-white font-semibold mt-4"
                            onClick={() => setAdd(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditFarm;
