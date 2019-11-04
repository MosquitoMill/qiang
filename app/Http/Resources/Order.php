<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Order extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);

        return [
            'id' => $this->id,
            'total' => $this->total,
            'shipping' => $this->shipping,
            'delivery_address_name' => $this->address->address_name,
            'delivery_address_detail' => $this->address->address_detail,
            'delivery_address_address' => $this->address->address,
            'delivery_address_receiver' => $this->address->receiver,
            'delivery_address_mobile' => $this->address->mobile,
            'delivery_desc' => $this->delivery_desc,
            'status' => $this->status,
            'sn' => $this->sn,
            'store_name' => $this->store_name,
            'products' => $this->products,
//            'order' => $this
        ];
    }
}
