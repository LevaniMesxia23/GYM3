import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCertificateInfo } from "../services/GymApi";

const useEditCertification = () => {
  const queryClient = useQueryClient();
  const { mutate, error, isError,isPending } = useMutation({
    mutationFn: ({id, name, startDate, endDate}) => editCertificateInfo(id, name, startDate, endDate),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.log(updatedCertificate);
      console.error("Error updating certification:", error.message);
    },
  });
  return { mutate, error, isError,isPending };
};

export default useEditCertification;
