import { useQuery } from "@tanstack/react-query"
import { fetchCertificationId } from "../services/GymApi"

export const useCertificationId = (certificationId) => {
  const {data, isError, error, isLoading} = useQuery({
    queryKey: ["certification", certificationId],
    queryFn: () => fetchCertificationId(certificationId)
  })
  return {data, isError, error, isLoading}
}