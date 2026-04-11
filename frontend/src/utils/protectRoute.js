export const protectRoute = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }
};