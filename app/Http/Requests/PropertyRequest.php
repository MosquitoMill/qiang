<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PropertyRequest extends FormRequest
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
        $id = $this->route('property');
        return [
            'key'=>[
                'required',
                Rule::unique('property')->ignore($id)
            ],
            'value' => 'required',
            'label' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'key.required' => '参数关键字必填',
            'key.unique' => '参数关键字是唯一的',
            'value.required' => '参数值必填',
            'label.required' => '参数名称必填'
        ];
    }
}
