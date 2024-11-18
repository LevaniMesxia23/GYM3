import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAboutInfo } from "../services/GymApi";

const useEditAbout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updatedAbout }) => editAboutInfo(id, updatedAbout), 
    onSuccess: () => {
      queryClient.invalidateQueries(["about"]); 
    },
    onError: (error) => {
      console.error("Error updating About:", error.message);
    },
  });
};

export default useEditAbout;
