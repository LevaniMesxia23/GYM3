import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminSchema } from "./AdminSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AdminPanel() {
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(adminSchema)
  })
  const onSubmit = async (e) => {
    alert('Login successfull')
    navigate("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1E1E1E] p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-center text-[#D7FD44] font-semibold text-2xl mb-4">
          Admin Panel Login
        </h2>

        <div>
          <input
            type="text"
            {...register("login")}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] text-[#C4C4C4] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#D7FD44] border border-[#3A3A3A]"
          />
          {errors.login && <p className=" mt-2 text-red-500">{errors.login.message}</p>}
        </div>

        <div>
          <input
            type="password"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] text-[#C4C4C4] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#D7FD44] border border-[#3A3A3A]"
          />
          {errors.password && <p className=" mt-2 text-red-500">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-[#121212] bg-[#D7FD44] rounded-md font-semibold hover:bg-[#c2ed38] transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;
