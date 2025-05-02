import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const handleSignUP = (data) => {
    console.log("handleSignUP here", data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <h1 className="text-2xl font-semibold text-center mb-5">Sign Up</h1>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUP)} className="fieldset">
              <label className="label">Name</label>
              <input
                {...register("name", {
                  required: "Name Is Required",
                })}
                type="text"
                className="input"
                placeholder="name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

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
                  minLength: {
                    value: 6,
                    message: "Password Should be Six Characters",
                  },
                  pattern: {
                    value:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!#$@%^&])(?=.*?[0-9])/,
                    message:
                      "Password Should be One Uppercase, one Small Latter and a special characters with number",
                  },
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
                  Already Have an account?
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </a>
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary mt-4"
              />
            </form>
            <button
              type="submit"
              value="Sign Up"
              className="btn btn-primary mt-4"
            >
              <img className="w-8 h-8 me-2" src={google} alt="" /> Continue With
              Google{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
