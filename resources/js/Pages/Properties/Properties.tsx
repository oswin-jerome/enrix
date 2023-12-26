import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const Properties = ({ properties }: { properties: any }) => {
    return (
        <Authenticated>
            <section className="card">
                <CardHeader
                    title="Properties"
                    description="List of all properties you have access to."
                    left={<button className="button">Add New Property</button>}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Property ID</th>
                            <th>Customer</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property: any) => {
                            return (
                                <tr key={property.id}>
                                    <td>{property.property_id}</td>
                                    <td>{property.name}</td>
                                    <td>
                                        <Link
                                            href={`/customers/${property.customer.id}`}
                                        >
                                            {property.customer.name}
                                        </Link>
                                    </td>
                                    <td>{property.type}</td>
                                    <td>
                                        <Link
                                            className="button"
                                            href={`/properties/${property.id}`}
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </Authenticated>
    );
};

export default Properties;
