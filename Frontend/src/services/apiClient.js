import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://bookvenue-backend.onrender.com/api" ,
  headers: {
    "Content-Type": "application/json",
  },
});

// ← NEW: Add response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
