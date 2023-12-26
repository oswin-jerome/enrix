<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function region()
    {
        return $this->hasOne(Region::class, "id", "region_id");
    }

    public function customer()
    {
        return $this->hasOne(Customer::class, "id", "customer_id");
    }

    public function isApproved()
    {

        return $this->approved_at != null && $this->rejected_at == null;
    }
}
