import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCertificateInfo } from "../services/GymApi";

const useEditCertification = () => {
  const queryClient = useQueryClient();
  const { mutate, error, isError,isPending } = useMutation({
    mutationFn: ({ id, updatedCertificate }) => editCertificateInfo(id,updatedCertificate), 
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error("Error updating About:", error.message);
    },
  });
  return { mutate, error, isError,isPending };
};

export default useEditCertification;
