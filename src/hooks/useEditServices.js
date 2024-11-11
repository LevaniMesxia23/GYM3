import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditPrices } from "../services/GymApi";

const useEditService = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: editServicesInfo } = useMutation({
    mutationFn: () => EditPrices(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.error("Error updating service:", error);
    },
  });

  return { editServicesInfo };
};

export default useEditService;
