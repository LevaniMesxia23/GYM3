import { useQuery } from "@tanstack/react-query"
import { fetchPricesId } from "../services/GymApi"

export const usePriceId = () => {
  return useQuery({
    queryKey: ["prices"],
    queryFn: fetchPricesId
  })
}