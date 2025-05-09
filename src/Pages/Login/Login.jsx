import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn,continueWithGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    console.log("handleLogin", data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
             toast.success('Login Successfully Done!')
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleLogin=()=>{
    continueWithGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
      if(user){
         toast.success('Login Successfully Done!')
      }
    })
    .catch((error) => {
      console.log(error);
      
        toast.error(error.message)
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <h1 className="text-2xl font-semibold text-center mb-5">Login Here</h1>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
              <label className="label">Email</label>
              <input
                {...register("email", {
                  required: "Email Is Required",
                })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password Is Required",
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <div>
                <a className="link link-hover">
                  New to Website?
                  <Link className="text-secondary" to="/sign-up">
                    Create Account
                  </Link>
                </a>
              </div>

              <input
                type="submit"
                value="Sign In"
                className="btn btn-primary mt-4"
              />
            </form>
            <button
              type="submit"
              value="Login Now"
              className="btn btn-primary mt-4"
              onClick={googleLogin}
            >
              <img className="w-8 h-8 me-2" src={google} alt="" /> Continue With
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
