<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Rinvex\Categories\Traits\Categorizable;

class Product extends Model
{
    use HasFactory;
    use Categorizable;
}
