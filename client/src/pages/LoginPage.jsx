import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        usertype: "farmer",
    });

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="w-full h-dvh flex justify-center items-center login_background">
            <div className="md:w-2/6">
                <form
                    action=""
                    className="flex flex-col p-3 px-4 border shadow-sm rounded-md bg-white"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-center font-semibold text-xl mb-3">
                        Login
                    </h1>
                    <label htmlFor="email" className="text-xs font-medium mb-2">
                        Registered Email
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
                    <p className="text-xs font-medium mb-1">I am a ?</p>
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
                        Login
                    </button>

                    <hr className="mt-3 mb-2" />
                    <p className="text-xs font-medium mb-2">
                        Not registered yet?
                    </p>
                    <button
                        className="w-full p-1 bg-green-400 rounded-md text-white font-semibold"
                        onClick={() => navigate("/user/register")}
                        type="button"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
