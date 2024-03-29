import LoadingButton from "@/Components/LoadingButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { toast } from "react-toastify";

const Users = ({ users, roles }: { users: any; roles: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { errors } = usePage().props;

    const [data, setData] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleCreateUser = (e: React.FormEvent) => {
        e.preventDefault();

        router.post(
            "/users",
            { ...data },
            {
                onBefore: () => {
                    setIsLoading(true);
                },
                onSuccess: () => {
                    toast("User added");
                    setIsOpen(false);
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <Authenticated>
            <section className="card">
                <header className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg  font-bold text-gray-900">
                            Users
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            List of all users
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="button"
                        >
                            Add User
                        </button>
                    </div>
                </header>

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
                            Add New User
                        </h2>

                        <form
                            onSubmit={handleCreateUser}
                            className="mt-5 grid gap-4"
                        >
                            <div className="input">
                                <label htmlFor="name">Name</label>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
                                    type="text"
                                    name="name"
                                />
                                {errors.name && (
                                    <span className="error">{errors.name}</span>
                                )}
                            </div>
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={data.email}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                    type="text"
                                    name="email"
                                />
                                {errors.email && (
                                    <span className="error">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="input">
                                <label htmlFor="roles">Roles</label>
                                <select
                                    onChange={(w) =>
                                        setData({
                                            ...data,
                                            role: w.target.value,
                                        })
                                    }
                                    value={data.role}
                                    name=""
                                    id=""
                                >
                                    {roles.map((role: any) => {
                                        return (
                                            <option
                                                selected={
                                                    role.name == data.role
                                                }
                                                value={role.name}
                                            >
                                                {role.name}
                                            </option>
                                        );
                                    })}
                                </select>
                                {errors.roles && (
                                    <span className="error">
                                        {errors.roles}
                                    </span>
                                )}
                            </div>

                            <div>
                                <LoadingButton
                                    className=""
                                    isLoading={isLoading}
                                >
                                    Submit
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </Drawer>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: any) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </Authenticated>
    );
};

export default Users;
