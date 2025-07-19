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

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            return await response.json();
        },
    });
}

export const useUserTodos = (id: number) => {
    return useQuery({
        queryKey: ['userTodos', id],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
            if (!response.ok) {
                throw new Error('Todos not found');
            }
            return await response.json();
        },
    });
}

export const useUserComments = (id: number) => {
    return useQuery({
        queryKey: ['userComments', id],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`);
            if (!response.ok) {
                throw new Error('Comments not found');
            }
            return await response.json();
        },
    });
}