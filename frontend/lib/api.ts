const BASE_URL = "http://localhost:5000/api";

export const registerUser = async (data: any) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data: any) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const addCity = async (cityName: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify({ cityName }),
  });

  return res.json();
};

export const getCities = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/cities", {
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};