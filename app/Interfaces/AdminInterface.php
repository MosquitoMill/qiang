<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface AdminInterface extends BaseInterface
{
    public function getModelList(Request $request);
}