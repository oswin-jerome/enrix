import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import _ from "lodash";
const PropertyDetails = ({ property }) => {
    const keys = ["manager_id", "customer.name"];

    return (
        <Authenticated>
            <div className="grid gap-4">
                <section className="card flex gap-3">
                    <Link href="#" className="button">
                        Finance
                    </Link>
                    <Link href="#" className="button">
                        Activities
                    </Link>
                </section>
                <section className="card">
                    <CardHeader
                        title={property.property_id}
                        description="Approved property"
                    ></CardHeader>
                    <table className="table">
                        <tbody>
                            {keys.map((key, i) => {
                                return (
                                    <tr key={i}>
                                        <th className="border">{key}</th>
                                        <td className="border">
                                            {_.get(property, key)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </div>
        </Authenticated>
    );
};

export default PropertyDetails;
