const fallbackApiBaseUrl = "http://localhost:3001";

export const BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || fallbackApiBaseUrl
).replace(/\/+$/, "");

export const APP_ENV = import.meta.env.VITE_APP_ENV || import.meta.env.MODE;
