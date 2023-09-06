import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export interface PostQuery {
  pageSize: number;
  page: number;
}
const usePostPage = (query: PostQuery) => {
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default usePostPage;
