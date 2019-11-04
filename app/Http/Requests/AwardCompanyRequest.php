<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AwardCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('select-award');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'sort' => 'required',
            'company_id' => 'required',
            'start_at.time' => 'required',
            'end_at.time' => 'required',
            'type' => 'required',
            'modified_before.time' => 'required',
            'works_types' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'type.required' => '身份必填',
            'sort.required'      => '排序必填',
            'company_id.required'      => '命题必填',
            'start_at.time.required' => '开始时间必填',
            'end_at.time.required' => '结束时间必填',
            'modified_before.time.required' => '最后修改时间必填',
            'works_types.required' => '作品类别必填',
        ];
    }
}
