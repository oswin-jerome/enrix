import CardHeader from "@/Components/CardHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PropertyLayout from "../PropertyLayout";
import { FormEvent, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {
    FinanceCategory,
    FinanceTransaction,
    PageProps,
    Property,
} from "@/types";
import { toNumber } from "lodash";
import LoadingButton from "@/Components/LoadingButton";
import { router, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import { getFormattedDate } from "@/utils";

type Page = PageProps & {
    categories: FinanceCategory[];
    property: Property;
    finance_transactions: FinanceTransaction[];
};

const FinanceTransactions = ({
    categories,
    property,
    finance_transactions,
}: Page) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const errors = usePage().props.errors;
    const [data, setData] = useState({
        type: "income",
        finance_category_id: "",
        description: "",
        amount: 0,
    });

    const [filter, setFilter] = useState<{
        start_date: Date | null;
        end_date: Date | null;
        category: string;
    }>({
        start_date: null,
        end_date: null,
        category: "",
    });

    const handleAddTransaction = (e: FormEvent) => {
        e.preventDefault();
        router.post(`/properties/${property.id}/finance/transactions`, data, {
            onBefore: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setData({
                    type: "income",
                    finance_category_id: "",
                    description: "",
                    amount: 0,
                });
                setIsOpen(false);
                toast.success("Transaction Added");
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    const onFilterChange = () => {
        router.get(
            "/properties/3/finance/transactions",
            {
                start_date: getFormattedDate(filter.start_date),
                end_date: getFormattedDate(filter.end_date),
                category: filter.category,
            },
            {
                preserveState: true,
            }
        );
    };

    return (
        <PropertyLayout>
            <section className="card">
                <CardHeader
                    title={"Finance Transactions"}
                    description="List of all financial transactions made for this property"
                    left={
                        <button
                            onClick={() => setIsOpen(true)}
                            className="button"
                        >
                            Add Transaction
                        </button>
                    }
                />
            </section>
            <section className="card mt-4 grid grid-cols-4 gap-4">
                <div className="input">
                    <label htmlFor="">Start Date</label>
                    <input
                        onChange={(e) =>
                            setFilter({
                                ...filter,
                                start_date: e.target.valueAsDate,
                            })
                        }
                        type="date"
                    />
                </div>
                <div className="input">
                    <label htmlFor="">End Date</label>
                    <input
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                end_date: e.target.valueAsDate,
                            });
                        }}
                        type="date"
                    />
                </div>
                <div className="input">
                    <label htmlFor="Categories">Categories</label>
                    <select
                        onChange={(e) => {
                            setFilter({ ...filter, category: e.target.value });
                        }}
                        name=""
                        id=""
                    >
                        <option value="">All</option>;
                        {categories.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="flex justify-center items-end">
                    <button onClick={onFilterChange} className="button">
                        Search
                    </button>
                </div>
            </section>

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
                        Add a Transaction
                    </h2>

                    <form
                        onSubmit={handleAddTransaction}
                        className="mt-12 grid gap-4"
                    >
                        <div className="input">
                            <label htmlFor="type">Type</label>
                            <select
                                value={data.type}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        type: e.target.value,
                                        finance_category_id: "",
                                    });
                                }}
                                name=""
                                id="type"
                            >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                            {errors.type && (
                                <span className="error">{errors.type}</span>
                            )}
                        </div>
                        <div className="input">
                            <label htmlFor="category">Category</label>
                            <select
                                value={data.finance_category_id}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        finance_category_id: e.target.value,
                                    });
                                }}
                                name=""
                                id="category"
                            >
                                <option value="">Select a category</option>
                                {categories
                                    .filter((cat) => cat.type == data.type)
                                    .map((cat, i) => {
                                        return (
                                            <option key={i} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        );
                                    })}
                            </select>
                            {errors.finance_category_id && (
                                <span className="error">
                                    {errors.finance_category_id}
                                </span>
                            )}
                        </div>
                        <div className="input">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                value={data.amount}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        amount: toNumber(e.target.value),
                                    });
                                }}
                            />
                            {errors.amount && (
                                <span className="error">{errors.amount}</span>
                            )}
                        </div>

                        <div className="input">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name=""
                                id=""
                                value={data.description}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        description: e.target.value,
                                    });
                                }}
                            ></textarea>
                            {errors.description && (
                                <span className="error">
                                    {errors.description}
                                </span>
                            )}
                        </div>

                        <div className="mt-6">
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
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finance_transactions.map((finance, i) => {
                            return (
                                <tr key={i}>
                                    <td>{finance.type}</td>
                                    <td>{finance.category?.name}</td>
                                    <td>
                                        <span
                                            className={
                                                "px-4 py-2 rounded-lg " +
                                                (finance.type == "income"
                                                    ? "bg-green-500/30 text-green-700"
                                                    : "bg-red-500/30 text-red-700")
                                            }
                                        >
                                            Rs. {finance.amount}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </PropertyLayout>
    );
};

export default FinanceTransactions;
