import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080/api",

  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   AUTHENTICATION
========================= */

export const authApi = {
  register: (data) =>
    api.post("/auth/register", data),

  login: (data) =>
    api.post("/auth/login", data),

  me: () =>
    api.get("/auth/me"),
};


/* =========================
   USERS
========================= */

export const userApi = {
  list: () =>
    api.get("/users"),

  get: (id) =>
    api.get(`/users/${id}`),
};


/* =========================
   FARMERS
========================= */

export const farmerApi = {
  list: () =>
    api.get("/farmers"),

  get: (id) =>
    api.get(`/farmers/${id}`),

  create: (data) =>
    api.post("/farmers", data),

  update: (id, data) =>
    api.put(`/farmers/${id}`, data),

  remove: (id) =>
    api.delete(`/farmers/${id}`),
};


/* =========================
   MILK COLLECTION
========================= */

export const collectionApi = {
  list: () =>
    api.get("/milk-collections"),

  get: (id) =>
    api.get(`/milk-collections/${id}`),

  create: (data) =>
    api.post("/milk-collections", data),

  remove: (id) =>
    api.delete(`/milk-collections/${id}`),
};


/* =========================
   PAYMENTS
========================= */

export const paymentApi = {
  list: () =>
    api.get("/payments"),

  get: (id) =>
    api.get(`/payments/${id}`),
};


/* =========================
   DASHBOARD
========================= */

export const dashboardApi = {
  adminStats: () =>
    api.get("/dashboard/stats"),

  userStats: () =>
    api.get("/dashboard/my-stats"),

  farmerStats: () =>
    api.get("/dashboard/farmer-stats"),
};


/* =========================
   SEND JWT TOKEN
========================= */

api.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) =>
    Promise.reject(error)
);

export default api;