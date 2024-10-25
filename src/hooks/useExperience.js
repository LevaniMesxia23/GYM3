import { useQuery } from "@tanstack/react-query"
import fetchExperience from "../services/GymApi"

function useGetExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience
  })
}

export default useGetExperience