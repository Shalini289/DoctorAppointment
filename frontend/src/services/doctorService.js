import { api } from "../utils/api";

export const getDoctors = () => api("/api/doctors");

export const getDoctorById = (id) =>
  api(`/api/doctors/${id}`);