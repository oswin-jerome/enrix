<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $guarded = [];

    // TODO: add three letter region code

    public function manager()
    {

        return $this->hasOne(User::class, "id", "region_manager_id");
    }
}
