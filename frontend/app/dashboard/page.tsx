"use client";

import { useEffect, useState } from "react";
import {
  addCity,
  getCities,
  toggleFavorite,
  deleteCity,
} from "@/lib/api";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const [city, setCity] = useState("");
  const [cities, setCities] = useState<any[]>([]);

  const router = useRouter();

  const fetchCities = async () => {

    const data = await getCities();

    if (Array.isArray(data)) {
      setCities(data);
    } else {
      console.log(data);
      setCities([]);
    }
  };

  const handleAdd = async () => {

    if (!city) {
      Swal.fire("Enter city name");
      return;
    }

    await addCity(city);

    Swal.fire({
      icon: "success",
      title: "City Added ✅",
      timer: 1200,
      showConfirmButton: false,
    });

    setCity("");
    fetchCities();
  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    Swal.fire({
      icon: "success",
      title: "Logged Out 👋",
      timer: 1200,
      showConfirmButton: false,
    });

    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const sortedCities = Array.isArray(cities)
    ? [...cities].sort((a, b) => b.isFavorite - a.isFavorite)
    : [];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative text-white">

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-6">

        {/* Navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">

          <h1 className="text-4xl font-bold text-center">
            Weather Dashboard 🌦️
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition"
          >
            Logout
          </button>
        </div>

        {/* Add City */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="flex-1 p-3 rounded-xl bg-black/40 text-white border border-gray-400 outline-none focus:border-blue-400"
          />

          <button
            onClick={handleAdd}
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Add City
          </button>
        </div>

        {/* Cities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sortedCities.map((c) => (

            <div
              key={c._id}
              className={`bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 transition hover:scale-105 ${
                c.isFavorite ? "border-yellow-400" : ""
              }`}
            >

              <h2 className="text-3xl font-bold mb-3">
                {c.cityName}
              </h2>

              <p className="text-2xl mb-2">
                🌡️ {c.weather.main.temp}°C
              </p>

              <p className="capitalize text-gray-200 mb-5">
                ☁️ {c.weather.weather[0].description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">

                <button
                  onClick={async () => {

                    await toggleFavorite(c._id);

                    Swal.fire({
                      icon: "success",
                      title: "Updated ⭐",
                      timer: 1000,
                      showConfirmButton: false,
                    });

                    fetchCities();
                  }}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  {c.isFavorite ? "Unfavorite" : "Favorite"}
                </button>

                <button
                  onClick={async () => {

                    const result = await Swal.fire({
                      title: "Are you sure?",
                      text: "This city will be deleted!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, delete it!",
                    });

                    if (result.isConfirmed) {

                      await deleteCity(c._id);

                      Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        timer: 1000,
                        showConfirmButton: false,
                      });

                      fetchCities();
                    }
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
