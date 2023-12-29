import CardHeader from "@/Components/CardHeader";
import { Property } from "@/types";

const PropertyInfo = ({ property }: { property: Property }) => {
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
        <div className="grid gap-4">
            <section className="card text-wrap">
                <CardHeader title={"Property details"}></CardHeader>
                <table className="table border-collapse">
                    <tbody>
                        {basics.map((basic, i) => {
                            return (
                                <tr key={i}>
                                    <th className="border">{basic.label}</th>
                                    <td className="border">{basic.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
            <section className="card text-wrap">
                <CardHeader title={"Property Address"}></CardHeader>
                <table className="table border-collapse">
                    <tbody>
                        {propertyAddress.map((basic, i) => {
                            return (
                                <tr key={i}>
                                    <th className="border">{basic.label}</th>
                                    <td className="border">{basic.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
            <section className="card text-wrap">
                <CardHeader title={"Poc Details"}></CardHeader>
                <table className="table border-collapse">
                    <tbody>
                        {pocDetails.map((basic, i) => {
                            return (
                                <tr key={i}>
                                    <th className="border">{basic.label}</th>
                                    <td className="border">{basic.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
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
    );
};

export default PropertyInfo;
