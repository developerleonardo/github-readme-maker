import { useQuery } from "@tanstack/react-query";
import { getUser, API_URL } from "@/api/getUser";

export const useFetchUser = (username: string) => {
  return useQuery({
    queryKey: ["user", API_URL, username],
    queryFn: () => getUser(API_URL, username),
    enabled: !!username, // Only run the query if userName is provided
  });
};
