<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function property()
    {
        return $this->hasOne(Property::class, "id", "property_id");
    }

    public function request()
    {
        return $this->belongsTo(Request::class, 'id', 'task_id', 'task');
    }
}
