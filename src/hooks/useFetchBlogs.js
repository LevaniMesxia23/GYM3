import { useQuery } from "@tanstack/react-query"
import { fetchBlogs } from "../services/GymApi"

export const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs
  })
}