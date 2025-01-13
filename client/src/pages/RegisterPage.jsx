import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        usertype: "farmer",
    });

    return (
        <div className="w-full h-dvh flex justify-center items-center login_background">
            <div className="md:w-2/6">
                <form
                    action=""
                    className="flex flex-col p-3 px-4 border shadow-sm rounded-md bg-white "
                >
                    <h1 className="text-center font-semibold text-xl mb-3">
                        Login
                    </h1>
                    <label htmlFor="email" className="text-xs font-medium mb-2">
                        Name
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="your name"
                        value={user.name}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="email" className="text-xs font-medium mb-2">
                        Email
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@project.com"
                        value={user.email}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="email" className="text-xs font-medium mb-2">
                        Password
                    </label>
                    <input
                        className="p-1 px-2 bg-slate-100 rounded-sm mb-3"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={user.password}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <p className="text-xs font-medium mb-1">Register as?</p>
                    <div className="flex gap-2 ">
                        <input
                            type="radio"
                            name="usertype"
                            value="admin"
                            checked={user.usertype === "admin"}
                            onClick={(e) =>
                                setUser({ ...user, usertype: e.target.value })
                            }
                            id="admin"
                        />
                        <label htmlFor="admin" className="text-sm">
                            Admin
                        </label>
                        <input
                            type="radio"
                            name="usertype"
                            value="farmer"
                            checked={user.usertype === "farmer"}
                            onClick={(e) =>
                                setUser({ ...user, usertype: e.target.value })
                            }
                            id="farmer"
                            className="ml-4"
                        />
                        <label htmlFor="farmer" className="text-sm">
                            Farmer
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-1 bg-green-400 rounded-md text-white font-semibold mt-4"
                    >
                        Register
                    </button>

                    <hr className="mt-3 mb-2" />
                    <p className="text-xs font-medium mb-2">
                        Already registered?
                    </p>
                    <button
                        className="w-full p-1 bg-green-400 rounded-md text-white font-semibold"
                        type="button"
                        onClick={() => navigate("/user")}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
