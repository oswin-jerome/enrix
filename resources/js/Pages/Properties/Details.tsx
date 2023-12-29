import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import _ from "lodash";
import PropertyLayout from "./PropertyLayout";
const PropertyDetails = ({ property }: { property: any }) => {
    const keys = ["manager_id", "customer.name"];

    return (
        <PropertyLayout>
            <div className="grid gap-4">
                <section className="card">
                    <CardHeader
                        left={""}
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
        </PropertyLayout>
    );
};

export default PropertyDetails;
