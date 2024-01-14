import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Task } from "@/types";
import { Link, router } from "@inertiajs/react";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";

const TaskDetails = ({ task }: { task: Task }) => {
    const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        router.put(
            `/tasks/${task.id}`,
            {
                status: e.target.value,
            },
            {
                onSuccess: () => {
                    toast.info("Status updated");
                },
            }
        );
    };

    return (
        <Authenticated>
            <div className="grid gap-4">
                <section className="card">
                    <CardHeader
                        title={task.id + " : " + task.title}
                        description={task.description}
                    ></CardHeader>
                </section>
                <section className="card">
                    <CardHeader title={"Details"}></CardHeader>

                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>{task.title}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{task.description}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{task.status}</td>
                                </tr>
                                <tr>
                                    <th>Property</th>
                                    <td>
                                        <Link
                                            href={`/properties/${task.property_id}`}
                                        >
                                            {task?.property?.property_id}
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ETA</th>
                                    <td>{task.eta}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="card">
                    {/* TODO: assignee
                     */}
                    <CardHeader title={"Actions"}></CardHeader>
                    <br />
                    <div className="input">
                        <label htmlFor="status">Status</label>
                        {/* "not_started", "inprogress", "completed", "hold" */}
                        <select
                            disabled={task.status == "completed"}
                            value={task.status}
                            onChange={handleStatusChange}
                        >
                            <option value="not_started">Not Started</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="hold">Hold</option>
                        </select>
                        <span className="text-sm text-slate-500">
                            Marking the status as completed is not reversible
                        </span>
                    </div>
                </section>
            </div>
        </Authenticated>
    );
};

export default TaskDetails;
