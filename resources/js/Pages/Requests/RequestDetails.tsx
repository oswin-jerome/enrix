import CardHeader from "@/Components/CardHeader";
import LoadingButton from "@/Components/LoadingButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Request } from "@/types";
import { Link, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type Props = PageProps & {
    request: Request;
};

const RequestDetails = ({ request }: Props) => {
    const [showRejectForm, setShowRejectForm] = useState(false);
    const [reason, setReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleApprove = () => {
        router.post(
            `/requests/${request.id}/approve`,
            {},
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onSuccess: () => {
                    toast.success("Approved");
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };
    const handleReject = (e: FormEvent) => {
        e.preventDefault();
        router.post(
            `/requests/${request.id}/reject`,
            {
                reason: reason,
            },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onSuccess: () => {
                    toast.warning("Rejected");
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <Authenticated>
            <div className="grid gap-4">
                <section className="card">
                    <CardHeader title={"Request : " + request.id} />

                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th className="border ">ID</th>
                                    <td className="border">{request.id}</td>
                                </tr>
                                <tr>
                                    <th className="border ">Category</th>
                                    <td className="border">
                                        {request.category}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border ">Description</th>
                                    <td className="border">
                                        {request.description}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border ">Property</th>
                                    <td className="border">
                                        <Link
                                            href={`/properties/${request.property_id}`}
                                        >
                                            {request.property.property_id}
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border ">Status</th>
                                    <td className="border">{request.status}</td>
                                </tr>
                                <tr>
                                    <th className="border ">
                                        Rejection Reason
                                    </th>
                                    <td className="border">
                                        {request.rejection_reason}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border ">Linked Task</th>
                                    <td className="border">
                                        {request.task_id}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {!request.approved_at && !request.rejection_reason && (
                    <section className="card">
                        <CardHeader
                            title={"Approve or Reject"}
                            description="* Approving request will create a linked task"
                        />

                        {!showRejectForm && (
                            <div className="mt-12 flex gap-4">
                                <button
                                    onClick={(e) => {
                                        setShowRejectForm(true);
                                    }}
                                    className="button bg-red-500"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={handleApprove}
                                    className="button"
                                >
                                    Approve
                                </button>
                            </div>
                        )}
                        {showRejectForm && (
                            <div className="mt-12">
                                <form onSubmit={handleReject}>
                                    <div className="input">
                                        <label htmlFor="reason">Reason</label>
                                        <input
                                            value={reason}
                                            onChange={(e) => {
                                                setReason(e.target.value);
                                            }}
                                            type="text"
                                            id="reason"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <LoadingButton
                                            className={"bg-red-500"}
                                            isLoading={false}
                                        >
                                            Reject
                                        </LoadingButton>
                                    </div>
                                </form>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </Authenticated>
    );
};

export default RequestDetails;
