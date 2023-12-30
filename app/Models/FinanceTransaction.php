<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinanceTransaction extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function property()
    {
        return $this->hasOne(Property::class, "id", "property_id");
    }

    public function category()
    {
        return $this->hasOne(FinanceCategory::class, "id", "finance_category_id");
    }
}
