import { useQuery } from "@tanstack/react-query"
import {fetchExperience} from "../services/GymApi"

export const useGetExperience = () => {
  return useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience
  })
}
