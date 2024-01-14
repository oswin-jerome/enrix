import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PropertyLayout from "../PropertyLayout";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { FormEvent, useState } from "react";
import LoadingButton from "@/Components/LoadingButton";
import { router } from "@inertiajs/react";
import { property } from "lodash";
import { ActivityLog, Media, Property } from "@/types";
import { useForm } from "@inertiajs/react";

type ActivityLogWithMedia = ActivityLog & {
    media: Media[];
};

const PropertyLogs = ({
    property,
    activities,
}: {
    property: Property;
    activities: ActivityLogWithMedia[];
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { data, setData, post, progress } = useForm<{
        type: string;
        title: string;
        description: string;
        recommendations: string;
        has_followup: boolean;
        attachment: File | undefined;
    }>({
        type: "",
        title: "",
        description: "",
        recommendations: "",
        has_followup: false,
        attachment: undefined,
    });

    // const [data, setData] = useState({
    //     type: "",
    //     title: "",
    //     description: "",
    //     recommendations: "",
    //     has_followup: false,
    // });
    const handleActivityCreate = (e: FormEvent) => {
        e.preventDefault();
        router.post(`/properties/${property.id}/activity_logs`, data, {
            onBefore: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsOpen(false);
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    return (
        <PropertyLayout>
            <section className="card">
                <CardHeader
                    title={"Activity Logs"}
                    description="List of activities done on this property"
                    left={
                        <button
                            className="button"
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            Add a Log
                        </button>
                    }
                ></CardHeader>

                <Drawer
                    open={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                    direction="right"
                    size={"400px"}
                    className=""
                >
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-900">
                            Log an activity
                        </h2>
                        <form
                            onSubmit={handleActivityCreate}
                            className="mt-6 grid gap-4"
                        >
                            <div className="input">
                                <label htmlFor="type">Activity type *</label>
                                <select
                                    name=""
                                    id=""
                                    value={data.type}
                                    onChange={(e) => {
                                        // setData({
                                        //     ...data,
                                        //     type: e.target.value,
                                        // });

                                        setData("type", e.target.value);
                                    }}
                                >
                                    <option value=""></option>
                                    <option value="activity_1">Type 1</option>
                                </select>
                            </div>
                            <div className="input">
                                <label htmlFor="title">Title *</label>
                                <input
                                    value={data.title}
                                    type="text"
                                    id="title"
                                    onChange={(e) => {
                                        // setData({
                                        //     ...data,
                                        //     title: e.target.value,
                                        // });
                                        setData("title", e.target.value);
                                    }}
                                />
                            </div>
                            <div className="input">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => {
                                        // setData({
                                        //     ...data,
                                        //     description: e.target.value,
                                        // });
                                        setData("description", e.target.value);
                                    }}
                                    id="description"
                                ></textarea>
                            </div>
                            <div className="input">
                                <label htmlFor="recommendations">
                                    Recommendations
                                </label>
                                <textarea
                                    value={data.recommendations}
                                    onChange={(e) => {
                                        // setData({
                                        //     ...data,
                                        //     recommendations: e.target.value,
                                        // });
                                        setData(
                                            "recommendations",
                                            e.target.value
                                        );
                                    }}
                                    id="recommendations"
                                ></textarea>
                            </div>
                            <div className="input">
                                <label htmlFor="title">Needs follow up?</label>
                                <input
                                    value={data.has_followup.toString()}
                                    onChange={(e) => {
                                        // setData({
                                        //     ...data,
                                        //     has_followup: e.target.checked,
                                        // });
                                        setData(
                                            "has_followup",
                                            e.target.checked
                                        );
                                    }}
                                    type="checkbox"
                                    id="title"
                                />
                            </div>
                            <input
                                type="file"
                                // value={data.file?.name}
                                onChange={(e) =>
                                    setData("attachment", e.target.files?.[0])
                                }
                            />
                            <div className="mt-5">
                                <LoadingButton
                                    isLoading={isLoading}
                                    className="button"
                                >
                                    Submit
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </Drawer>

                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>title</th>
                                    <th>Has Followup?</th>
                                    <th>Attachments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities.map((activity) => {
                                    return (
                                        <tr key={activity.id}>
                                            <th>{activity.created_at}</th>
                                            <th>{activity.type}</th>
                                            <th>{activity.title}</th>
                                            <th>
                                                {activity.has_followup == 1
                                                    ? "Yes"
                                                    : "No"}
                                            </th>
                                            <td>
                                                <img
                                                    className="w-12"
                                                    src={
                                                        activity.media[0]
                                                            ?.original_url
                                                    }
                                                    alt=""
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </PropertyLayout>
    );
};

export default PropertyLogs;
