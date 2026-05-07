"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await registerUser(form);

    if (res.message) {

      Swal.fire({
        icon: "success",
        title: "Account Created 🎉",
        text: "Now login to continue",
      });

      router.push("/login");

    } else {

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
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
          Signup 🌦️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-3 rounded-xl bg-black/50 text-white border border-gray-500 outline-none focus:border-blue-400"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

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
            Signup
          </button>

        </form>

        <p className="text-gray-200 text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-300 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
