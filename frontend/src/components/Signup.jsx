import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen bg-pink-700 bg-opacity-65">
      <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white border-[3px] p-3 rounded-md relative">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>

        <h3 className="font-bold text-lg">Signup!</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-2">Enter name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="input input-bordered w-full my-2"
            {...register("name", { required: true })}
          />

          <label className="block">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            className="input input-bordered w-full my-2"
            {...register("email", { required: true })}
          />

          <label className="block">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="input input-bordered w-full my-2"
            {...register("password", { required: true })}
          />

          <div className="flex justify-between items-center mt-4">
            <button className="btn btn-primary bg-pink-600 hover:bg-pink-800 duration-200">
              Submit
            </button>

            <Link to="/" className="underline text-blue-800">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
