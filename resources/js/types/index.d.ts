export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
        roles: String[];
    };
    properties_for_approval: number;
};

export interface Customer {
    id: number;
    name: string;
    email: string;
}
// Generated by https://quicktype.io

export interface Property {
    name: string;
    type: string;
    property_id: string;
    is_rented: boolean;
    region_id: number;
    legal_owner_name: string;
    is_under_loan: boolean;
    year_of_construction: number;
    sq_ft: number;
    no_of_floors: number;
    eb_consumer_no: string;
    property_tax_no: string;
    water_tax_no: string;
    survey_no: string;
    property_address: string;
    property_city: string;
    property_state: string;
    property_landmark: string;
    poc_name?: string;
    poc_mobile?: string;
    poc_email?: string;
    poc_address?: string;
    poc_city?: string;
    poc_state?: string;
    poc_id_proof?: string;
    poc_relation?: string;
    customer_id: number;
    updated_at: string;
    created_at: string;
    id: number;
    region: Region;
    customer?: Customer;
}

export interface Region {
    id: number;
    name: string;
    description: string;
    region_manager_id: number;
    created_at: string;
    updated_at: string;
    manager: Manager;
}

export interface Manager {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

// Generated by https://quicktype.io

export interface ActivityLog {
    id: number;
    type: string;
    title: string;
    description: string;
    recommendations: string;
    has_followup: number;
    property_id: number;
    creator_id: number;
    created_at: string;
    updated_at: string;
    creator: User;
}

// Generated by https://quicktype.io

export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    eta: string;
    property_id: number;
    assignee_id: number;
    created_at: string;
    updated_at: string;
    property?: Property;
}

// Generated by https://quicktype.io

export interface Media {
    id: number;
    model_type: string;
    model_id: number;
    uuid: string;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    conversions_disk: string;
    size: number;
    manipulations: any[];
    custom_properties: any[];
    generated_conversions: any[];
    responsive_images: any[];
    order_column: number;
    created_at: string;
    updated_at: string;
    original_url: string;
    preview_url: string;
}

// Generated by https://quicktype.io

export interface Request {
    id: number;
    category: string;
    description: string;
    status: string;
    rejection_reason: null;
    approved_at: null;
    approved_by: null;
    property_id: number;
    task_id: number;
    created_at: string;
    updated_at: string;
    property: Property;
}

// Generated by https://quicktype.io

export interface FinanceCategory {
    id: number;
    name: string;
    type: string;
    created_at: string;
    updated_at: string;
}

// Generated by https://quicktype.io

export interface FinanceTransaction {
    id: number;
    type: string;
    description: string;
    title: null;
    amount: number;
    finance_category_id: number;
    property_id: number;
    created_at: string;
    updated_at: string;
    category?: FinanceCategory;
}
