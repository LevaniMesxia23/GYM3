import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCertificateInfo } from "../services/GymApi";

const useEditCertification = (id,updatedCertificate) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error, isError } = useMutation({
    mutationFn: ({ id, updatedCertificate }) => editCertificateInfo(id,updatedCertificate), 
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error("Error updating About:", error.message);
    },
  });
  return { mutate, isLoading, error, isError };
};

export default useEditCertification;
