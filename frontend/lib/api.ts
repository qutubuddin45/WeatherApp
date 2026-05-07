const BASE_URL = "https://weatherapp-tvi.onrender.com/api";

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

  const res = await fetch(`${BASE_URL}/cities`, {
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

  const res = await fetch(`${BASE_URL}/cities`, {
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};


export const toggleFavorite = async (id: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${BASE_URL}/cities/${id}/favorite`,
    {
      method: "PUT",
      headers: {
        Authorization: token || "",
      },
    }
  );

  return res.json();
};

export const deleteCity = async (cityId: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${BASE_URL}/cities/${cityId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    }
  );

  return res.json();
};
