"use client";

import { useState } from "react";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";



export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
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
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}  