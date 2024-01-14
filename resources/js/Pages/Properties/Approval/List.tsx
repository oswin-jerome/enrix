import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const ApprovalList = ({ properties }: { properties: any }) => {
    return (
        <Authenticated>
            <section className="card">
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg  font-bold text-gray-900">
                            Properties for approval
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            List of properties which you need to approve
                        </p>
                    </div>
                    <div></div>
                </header>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Customer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property: any) => {
                                return (
                                    <tr key={property.id}>
                                        <td>{property.id}</td>
                                        <td>{property.name}</td>
                                        <td>{property.type}</td>
                                        <td className="underline">
                                            <Link
                                                href={`/customers/${property.customer.id}`}
                                            >
                                                {property.customer.name}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href={`/properties/${property.id}/onboard`}
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </Authenticated>
    );
};

export default ApprovalList;
