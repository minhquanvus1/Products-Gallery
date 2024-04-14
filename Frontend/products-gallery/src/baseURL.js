const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_REACT_APP_BASE_URL
    : "http://localhost:8081";
export { baseURL };
