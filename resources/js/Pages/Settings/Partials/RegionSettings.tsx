import LoadingButton from "@/Components/LoadingButton";
import { Dialog } from "@headlessui/react";
import { router, usePage } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { toast } from "react-toastify";
const RegionSettings = ({ regions, users }: { regions: any; users: any }) => {
    let [isOpen, setIsOpen] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    const { errors } = usePage().props;
    const [data, setData] = useState({
        name: "",
        description: "",
    });

    const handleRegionCreate = async (e: FormEvent) => {
        e.preventDefault();
        await router.post("/settings/regions", data, {
            preserveState: true,
            preserveScroll: true,
            onBefore: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                toast("Region added");
                setIsOpen(false);
                setData({
                    name: "",
                    description: "",
                });
            },

            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    return (
        <div className="bg-white p-4 rounded shadow">
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
                        Add New Region
                    </h2>

                    <form
                        onSubmit={handleRegionCreate}
                        className="mt-5 grid gap-4"
                    >
                        <div className="input">
                            <label htmlFor="region_name">Name</label>
                            <input
                                value={data.name}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        name: e.target.value,
                                    })
                                }
                                type="text"
                                name="region_name"
                            />
                            {errors.name && (
                                <span className="error">{errors.name}</span>
                            )}
                        </div>
                        <div className="input">
                            <label htmlFor="region_description">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        description: e.target.value,
                                    })
                                }
                                name="region_description"
                            ></textarea>
                        </div>

                        <div>
                            <LoadingButton isLoading={isLoading}>
                                Submit
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </Drawer>
            <header className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg  font-bold text-gray-900">
                        Regions
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Regions where our services are available (Only editable
                        by super admins)
                    </p>
                </div>
                <div>
                    <button
                        className="button"
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Add Region
                    </button>
                </div>
            </header>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className=" pl-0">Region</th>
                            <th className="">Description</th>
                            <th className="">Region Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regions.map((region: any) => {
                            return <RegionItem region={region} users={users} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const RegionItem = ({ region, users }: { region: any; users: any }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeManager = (e: ChangeEvent) => {
        router.put(
            `/settings/regions/${region.id}`,
            {
                region_manager_id: (e.target as HTMLInputElement).value,
            },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onSuccess: () => {
                    toast("Manager updated");
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };
    return (
        <tr>
            <td className="p-2 pl-0">{region.name}</td>
            <td className="p-2">{region.description}</td>
            <td className="flex gap-2 items-center">
                <select
                    onChange={handleChangeManager}
                    className="w-full rounded border-slate-300"
                    name=""
                    id=""
                >
                    <option value=""></option>
                    {users.map((user: any) => {
                        return (
                            <option
                                selected={user.id == region.region_manager_id}
                                key={user.id}
                                value={user.id}
                            >
                                {user.name}
                            </option>
                        );
                    })}
                </select>
                {isLoading && <span className="loader"></span>}
            </td>
        </tr>
    );
};

export default RegionSettings;
