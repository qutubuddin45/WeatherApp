"use client";

import { useState } from "react";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await loginUser(form);

    if (res.token) {

      localStorage.setItem("token", res.token);

      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } else {

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: res.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative flex items-center justify-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>

      {/* Form */}
      <div className="relative z-10 w-full max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Login 🌦️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl bg-black/50 text-white border border-gray-500 outline-none focus:border-blue-400"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-xl bg-black/50 text-white border border-gray-500 outline-none focus:border-blue-400"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-white text-blue-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Login
          </button>

        </form>

        <p className="text-gray-200 text-center mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-300 hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}
