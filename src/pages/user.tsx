import { useParams } from "react-router-dom";

export function UserPage() {
    const { id } = useParams();

    return (
        <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">User Details</h1>
        <p>This is the user details page. More functionality can be added here. id: {id}</p>
        </div>
    );
}
