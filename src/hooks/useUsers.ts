import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

async function fetchUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return await response.json();
}

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => fetchUsers(),
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: number) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}