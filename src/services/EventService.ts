import axios from "axios";
import { Event } from "@/types/Event";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/markphilipp/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getEvents = async () => {
  const result = await apiClient.get<Event[]>("/events");
  return result.data;
};

export const getEvent = async (id: number) => {
  const result = await apiClient.get<Event>(`/events/${id}`);
  return result.data;
};
