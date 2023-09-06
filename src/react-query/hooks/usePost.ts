import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

const usePost = (userId: number | undefined) => {
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
};

export default usePost;
