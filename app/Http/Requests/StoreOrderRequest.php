<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'delivery_address' => 'required',
            'products' => ['required', 'array']
        ];
    }

    public function messages()
    {
        return [
            'delivery_address.required' => '送货地址必填',
            'products.required' => '订单商品必填'
        ];
    }
}
