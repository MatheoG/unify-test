import { useQuery } from "@tanstack/react-query"

export const useUsers = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
    })
}