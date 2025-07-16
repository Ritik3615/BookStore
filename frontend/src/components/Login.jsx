import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login!</h3>
            <div>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                email
                <input
                  type="Email"
                  placeholder="Enter email"
                  required
                  className="input input-bordered w-full my-2"
                  {...register("Email", { required: true })}
                />
                password
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="input input-bordered w-full my-2"
                  {...register("password", { required: true })}
                />
                <div className="flex justify-between">
                <button className="btn btn-primary mt-2 bg-pink-600 duration-200 hover:bg-pink-800">Submit</button>
                <Link to="/Signup" className="mt-6">not registered <span className="underline text-blue-800">Signup</span></Link>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
