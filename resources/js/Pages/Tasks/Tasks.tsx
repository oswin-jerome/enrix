import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Task } from "@/types";
import { Link } from "@inertiajs/react";

const Tasks = ({ tasks }: { tasks: Task[] }) => {
    return (
        <Authenticated>
            <section className="card">
                <CardHeader
                    title={"Tasks"}
                    description="List of all your tasks"
                    left={<button className="button">Add New Task</button>}
                ></CardHeader>
            </section>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Property ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Deadline</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.property?.property_id}</td>
                                <td>{task.title}</td>
                                <td>{task.status}</td>
                                <td>{task.eta}</td>
                                <td>
                                    <Link
                                        className="button"
                                        href={`/tasks/${task.id}`}
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Authenticated>
    );
};

export default Tasks;
