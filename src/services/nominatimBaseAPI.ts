import axios from "axios";

export const nominatimBaseAPI = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
  headers: {
    "Content-Type": "application/json",
  },
});
