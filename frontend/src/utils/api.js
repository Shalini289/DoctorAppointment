export const api = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:5000${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers
    }
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Backend Error:", data);
    throw new Error(data.msg || data.error || "API Error");
  }

  return data;
};