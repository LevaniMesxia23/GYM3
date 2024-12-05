import { useMutation } from "@tanstack/react-query"
import { addImage } from "../services/GymApi";

export const useAddImage = () => {

  return useMutation({
    mutationFn: addImage,
    onSuccess: () => {
      console.log("Succesfully added Image!");
    },
    onError: (error) => {
      console.error(error.message)
    }
  })
}