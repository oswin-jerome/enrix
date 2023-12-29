<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Property extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    public function region()
    {
        return $this->hasOne(Region::class, "id", "region_id");
    }

    public function customer()
    {
        return $this->hasOne(Customer::class, "id", "customer_id");
    }

    public function activity_logs()
    {
        return $this->hasMany(ActivityLog::class, "property_id", "id");
    }

    public function isApproved()
    {

        return $this->approved_at != null && $this->rejected_at == null;
    }

    protected $casts = [
        'created_at' => 'datetime:Y'
    ];
}
