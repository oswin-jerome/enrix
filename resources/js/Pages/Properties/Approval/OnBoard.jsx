import LoadingButton from "@/Components/LoadingButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

const OnBoard = ({ property, customer, region, users }) => {
    const [showFinal, setShowFinal] = useState(false);
    const [manager, setManager] = useState(null);
    const [propertyId, setPropertyId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { errors } = usePage().props;

    /**
     * @param {Event} e
     */
    const handleApproval = (e) => {
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

    return (
        <Authenticated>
            <div className="grid gap-4 overflow-scroll max-w-full">
                <section className="card text-wrap">{property.name}</section>
                <section className="card text-">{customer.name}</section>
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
                                            setManager(e.target.value)
                                        }
                                        name=""
                                        id=""
                                    >
                                        <option value="">
                                            Select a manager
                                        </option>
                                        {users.map((user) => {
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
                                        value={propertyId}
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
