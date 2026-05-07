"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
 
  const handleSubmit = async (e: any) => {
  e.preventDefault();

  const res = await registerUser(form);

  if (res.message) {
    Swal.fire({
      icon: "success",
      title: "Account Created 🎉",
      text: "अब login करो",
    });

    router.push("/login");
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: res.message || "Something went wrong",
    });
  }
};

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}