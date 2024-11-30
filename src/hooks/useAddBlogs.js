import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddBlogs } from "../services/GymApi";

const useAddBlogs = () => {
  const queryClient = useQueryClient()
  
  const {mutateAsync: addBlogs} = useMutation({
    mutationFn: AddBlogs,
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
    },
    onError: (error) => {
      console.error("Error adding blogs:", error)
    }
  })
  return {addBlogs}
}

export default useAddBlogs