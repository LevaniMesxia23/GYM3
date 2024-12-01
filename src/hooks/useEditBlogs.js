import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editBlogs } from "../services/GymApi"

export const useEditBlogs = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, author,title,description}) => editBlogs(id, author,title,description),
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"])
    },
    onError: (error) => {
      console.error(error.message)
    }
  })
}