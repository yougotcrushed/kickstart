import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export interface PostQuery {
  pageSize: number;
}

// Infinite Queries ---> The first step is to replace useQuery with infiniteQuery
// Hence when using infiniteQuery we can not use a state variable to keep track of the page number,
// Because infiniteQueries handle pagination automatically. And using a state variable to track the page
// number can lead to issues with the cache and data consistency, so i should remove the state variable in fetchDataInfinite.tsx
const usePostInfinite = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allpages) => {
      return allpages.length > 0 ? allpages.length + 1 : undefined;
    },
  });
};

export default usePostInfinite;
