import CardHeader from "@/Components/CardHeader";
import LoadingButton from "@/Components/LoadingButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Media, Property } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import { toInteger, toNumber } from "lodash";
import { FormEvent, useState } from "react";
import PropertyDetails from "../Details";
import PropertyInfo from "../Partials/PropertyInfo";

const OnBoard = ({
    property,
    customer,
    region,
    users,
    auth_letter,
}: {
    property: Property;
    customer: any;
    region: any;
    users: any;
    auth_letter: Media[];
}) => {
    const [showFinal, setShowFinal] = useState(false);
    const [manager, setManager] = useState<number | null>(null);
    const [propertyId, setPropertyId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { errors } = usePage().props;

    const handleApproval = (e: FormEvent) => {
        e.preventDefault();

        router.put(
            `/properties/${property.id}/approve`,
            {
                manager_id: manager,
                property_id: propertyId,
            },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    const basics = [
        {
            label: "Owner Name",
            value: property.legal_owner_name,
        },
        {
            label: "Type",
            value: property.type,
        },
        {
            label: "Rented?",
            value: property.is_rented ? "Yes" : "No",
        },
        {
            label: "Under Loan?",
            value: property.is_under_loan ? "Yes" : "No",
        },
        {
            label: "Year of construction",
            value: property.year_of_construction,
        },
        {
            label: "Sq ft.",
            value: property.sq_ft,
        },
        {
            label: "No. of floors",
            value: property.no_of_floors,
        },
        {
            label: "EB Consumer #",
            value: property.eb_consumer_no,
        },
        {
            label: "Property Tax #",
            value: property.property_tax_no,
        },
        {
            label: "Water Tax #",
            value: property.water_tax_no,
        },
        {
            label: "Survey #",
            value: property.survey_no,
        },
    ];

    const propertyAddress = [
        {
            label: "Address",
            value: property.property_address,
        },
        {
            label: "City",
            value: property.property_city,
        },
        {
            label: "State",
            value: property.property_state,
        },
        {
            label: "Landmark",
            value: property.property_landmark,
        },
    ];

    const pocDetails = [
        {
            label: "POC Name",
            value: property.poc_name,
        },
        {
            label: "Address",
            value: property.poc_address,
        },
        {
            label: "City",
            value: property.poc_city,
        },
        {
            label: "State",
            value: property.poc_state,
        },
        {
            label: "Proof",
            value: property.poc_id_proof,
        },
        {
            label: "Relationship",
            value: property.poc_relation,
        },
    ];

    return (
        <Authenticated>
            <div className="grid gap-4 overflow-scroll max-w-full">
                <PropertyInfo property={property} />
                <section className="card text-">
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
                </section>
                <section className="card gap-4 flex ">
                    <button className="button bg-red-500">Reject</button>
                    <button
                        onClick={() => {
                            setShowFinal(true);
                        }}
                        className="button"
                    >
                        Approve
                    </button>
                </section>
                {showFinal && (
                    <section className="card gap-4 ">
                        <form onSubmit={handleApproval}>
                            <div className="grid gap-3">
                                <div className="input">
                                    <label htmlFor="manage">
                                        Property Manager
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setManager(toNumber(e.target.value))
                                        }
                                        name=""
                                        id=""
                                    >
                                        <option value="">
                                            Select a manager
                                        </option>
                                        {users.map((user: any) => {
                                            return (
                                                <option
                                                    selected={
                                                        user.id == manager
                                                    }
                                                    value={user.id}
                                                    key={user.id}
                                                >
                                                    {user.name} | {user.id}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.manager_id && (
                                        <span className="error">
                                            {errors.manager_id}
                                        </span>
                                    )}
                                </div>
                                <div className="input">
                                    <label htmlFor="prop_id">Property ID</label>
                                    <input
                                        value={propertyId ?? ""}
                                        onChange={(e) =>
                                            setPropertyId(e.target.value)
                                        }
                                        type="text"
                                        name="prop_id"
                                    />
                                    {errors.property_id && (
                                        <span className="error">
                                            {errors.property_id}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <LoadingButton
                                isLoading={isLoading}
                                className="button mt-6"
                            >
                                Approve
                            </LoadingButton>
                            {errors.approved && (
                                <span className="error">{errors.approved}</span>
                            )}
                        </form>
                    </section>
                )}
            </div>
        </Authenticated>
    );
};

export default OnBoard;
