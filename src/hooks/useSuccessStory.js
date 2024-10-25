import { useQuery } from "@tanstack/react-query"
import { fetchSuccessStory } from "../services/GymApi"

export const useSuccessStory = () => {
  return useQuery({
    queryKey: ["successStory"],
    queryFn: fetchSuccessStory
  })
}
