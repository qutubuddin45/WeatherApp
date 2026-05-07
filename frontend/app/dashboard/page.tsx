"use client";

import { useEffect, useState } from "react";
import { addCity, getCities } from "@/lib/api";
import { toggleFavorite } from "@/lib/api";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState<any[]>([]);

  const fetchCities = async () => {
    const data = await getCities();
    setCities(data);
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

  useEffect(() => {
    fetchCities();
  }, []);
  const sortedCities = [...cities].sort((a, b) => b.isFavorite - a.isFavorite);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      {/* Add City */}
      <div className="mb-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </div>

      {/* Cities List */}
      <div className="grid grid-cols-3 gap-4">
        {sortedCities.map((c) => (
          <div key={c._id} className={`border p-4 rounded ${c.isFavorite ? "bg-yellow-100" : ""}`}>
            <h2 className="text-xl">{c.cityName}</h2>
            <p>Temp: {c.weather.main.temp}°C</p>
            <p>{c.weather.weather[0].description}</p>
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
  className="mt-2 bg-yellow-400 px-2 py-1"
>
  {c.isFavorite ? "Unfavorite" : "Favorite"}
</button>
        
          </div>
        ))}
      </div>
    </div>
  );
}