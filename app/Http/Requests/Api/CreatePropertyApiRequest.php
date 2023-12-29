<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreatePropertyApiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required",
            "type" => "required", //FIXME: map to enum
            "is_rented" => "required|boolean",
            "region_id" => "required|exists:regions,id",
            "legal_owner_name" => "required|string",
            "is_under_loan" => "boolean",
            "year_of_construction" => "integer",
            "sq_ft" => "integer",
            "no_of_floors" => "integer",
            "eb_consumer_no" => "nullable",
            "property_tax_no" => "nullable",
            "water_tax_no" => "nullable",
            "survey_no" => "nullable",
            "property_address" => "string",
            "property_city" => "string",
            "property_state" => "string",
            "property_landmark" => "string",
            // POC
            "poc_name" => "string",
            "poc_mobile" => "string",
            "poc_email" => "string|email|nullable",
            "poc_address" => "string",
            "poc_city" => "string",
            "poc_state" => "string",
            "poc_id_proof" => "string",
            "poc_relation" => "string",

            "auth_letter" => "required|file"
        ];
    }
}
