import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCertificateInfo } from "../services/GymApi";

const useEditCertification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({  id, updatedCertificate  }) => editCertificateInfo(id,updatedCertificate), 
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error("Error updating About:", error.message);
    },
  });
};

export default useEditCertification;
