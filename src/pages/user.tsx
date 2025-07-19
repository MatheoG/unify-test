import { useParams } from "react-router-dom";
import { useDeleteUser, useUser, useUserComments, useUserTodos } from "../hooks/useUsers";
import { Card } from "../components/card";
import type { Todo, Comment } from "../types/apiTypes";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function UserPage() {
    const { id } = useParams();
    const { data, isLoading, error } = useUser(Number(id));
    const { data: todos, isLoading: isTodosLoading, error: todosError } = useUserTodos(Number(id));
    const { data: comments, isLoading: isCommentsLoading, error: commentsError } = useUserComments(Number(id));
    const deleteUser = useDeleteUser();
    const navigate = useNavigate();

    const handleDelete = () => {
        if (id) {
            deleteUser.mutate(Number(id), {
                onSuccess: () => {
                    navigate("/");
                },
            })
        }
    }

    return (
        <div className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
            <ChevronLeftIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={() => navigate("/")} />
            <h1 className="text-2xl font-bold">User Details</h1>
        </div>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p className="text-red-500">Error: {error.message}</p>
        ) : (
            <Card title="User Information" isOpen={true}>
                <div>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Username:</strong> {data.username}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${data.email}`} className="text-blue-500 hover:underline">{data.email}</a></p>
                    <p><strong>Phone:</strong> <a href={`tel:${data.phone}`} className="text-blue-500 hover:underline">{data.phone}</a></p>
                    <p><strong>Website:</strong> <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{data.website}</a></p>
                </div>
            </Card>
        )}
        {isTodosLoading ? (
            <p>Loading todos...</p>
        ) : todosError ? (
            <p className="text-red-500">Error: {todosError.message}</p>
        ) : (
            <Card title="User Todos" isOpen={false}>
                <ul className="list-disc pl-5 space-y-2 max-h-92 overflow-y-auto">
                    {todos.map((todo: Todo) => (
                        <li key={todo.id} className={todo.completed ? "line-through text-gray-500" : ""}>
                            {todo.title}
                        </li>
                    ))}
                </ul>
            </Card>
        )}
        {isCommentsLoading ? (
            <p>Loading comments...</p>
        ) : commentsError ? (
            <p className="text-red-500">Error: {commentsError.message}</p>
        ) : (
            <Card title="User Comments" isOpen={false}>
                <ul className=" pl-5 space-y-2 max-h-92 overflow-y-auto">
                    {comments.map((comment: Comment) => (
                        <li key={comment.id}>
                            <strong>{comment.name}</strong> (<a href={`mailto:${comment.email}`} className="text-blue-500 hover:underline">{comment.email}</a>): 
                            <span className="ml-2 text-gray-600 whitespace-pre-wrap">{comment.body}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        )}
        </div>
        
    
    );
}
