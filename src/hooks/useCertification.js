import { useQuery } from "@tanstack/react-query";
import { fetchCertification } from "../services/GymApi";

export const useCertification = () => {
  return useQuery({
    queryKey: ["certification"],
    queryFn: fetchCertification,
  });
};
