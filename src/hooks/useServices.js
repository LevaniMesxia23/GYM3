import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "../services/GymApi";

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
};
