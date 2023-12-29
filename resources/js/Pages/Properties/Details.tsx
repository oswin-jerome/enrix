import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import _ from "lodash";
import PropertyLayout from "./PropertyLayout";
import { Property } from "@/types";
import PropertyInfo from "./Partials/PropertyInfo";
const PropertyDetails = ({ property }: { property: Property }) => {
    const keys = ["manager_id", "customer.name"];

    return (
        <PropertyLayout>
            <div className="grid gap-4">
                <PropertyInfo property={property} />
                {/* <section className="card text-">
                    <Link href={`/customers/${property.customer_id}`}>
                        {customer.name}
                    </Link>
                    <br />
                    <h5>Documents</h5>
                    {auth_letter.map((file) => {
                        return (
                            <a target="_blank" href={file.original_url}>
                                {file.collection_name} - {file.file_name}
                            </a>
                        );
                    })}
                </section> */}
            </div>
        </PropertyLayout>
    );
};

export default PropertyDetails;
