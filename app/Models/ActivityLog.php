<?php

namespace App\Models;

use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ActivityLog extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];
    protected $casts = [
        'created_at' => 'datetime:d-m-Y'
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('attachments');
        // Add other collections if needed
    }


    public function property()
    {
        return $this->hasOne(Property::class, "id", "property_id");
    }

    public function creator()
    {
        return $this->hasOne(User::class, "id", "creator_id");
    }
}
