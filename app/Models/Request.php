<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function property()
    {
        return $this->hasOne(Property::class, "id", "property_id");
    }

    public function task()
    {

        return $this->hasOne(Task::class, 'id', 'task_id');
    }
}
