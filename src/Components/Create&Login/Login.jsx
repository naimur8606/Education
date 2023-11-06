import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import SocialLogin from "./SocialLogin";
import { } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { userLogin, setUserLocation } = useContext(AuthContext)
    const [useAlert, setUseAlert] = useState(true)
    const location = useLocation()
    const State = location?.state
    setUserLocation(State)
    const navigate = useNavigate()
    const formSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
            .then(() => {
                const user = { email, cartProduct: [] };
                fetch(`https://sob-dokander-server.vercel.app/user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            setUseAlert(true)
                        }
                    })
                if (useAlert) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(location?.state ? State : "/")
            }
            )
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-[450px] flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/RbR1q6G/login-cover2.webp" alt="" />
                <div className="card flex-shrink-0 w-full  shadow-2xl ">
                    <h1 className="text-center text-5xl font-bold">Login now!</h1>
                    <form onSubmit={formSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="p-8">
                    <p className="text-xl">Are you new here <Link to={"/registration"} className="text-blue-600 underline">Registration</Link> account</p>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;