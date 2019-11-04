<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class PropertyResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>(int)$this->id,
            'type' => (string)$this->type,
            'key' => (string)$this->key,
            'value' => (string)$this->value,
            'label' => (string)$this->label,
            'description' => (string)$this->description
        ];
    }
}
