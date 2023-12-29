import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Request } from "@/types";
import { Link } from "@inertiajs/react";

const Requests = ({ requests }: { requests: Request[] }) => {
    console.log(requests);
    return (
        <Authenticated>
            <section className="card">
                <CardHeader
                    title={"Pending Requests"}
                    description="Customer raised requests which needs your attention"
                />
            </section>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Category</td>
                        <td>Description</td>
                        <td>Property</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => {
                        return (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>{request.category}</td>
                                <td>{request.description}</td>
                                <td>
                                    <Link
                                        href={`/properties/${request.property_id}`}
                                    >
                                        {request.property.property_id}
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        href={`/requests/${request.id}`}
                                        className="button"
                                    >
                                        VIEW
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

export default Requests;
