<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AwardRequest extends FormRequest
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
            'name'      => 'required',
            'code'      => 'required',
            'began_at.time' => 'required',
            'ended_at.time' => 'required',
            'modified_before.time' => 'required',
            'entryFormTitle' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required'      => '名称必填',
            'code.required'      => '代码必填',
            'began_at.time.required' => '开始时间必填',
            'ended_at.time.required' => '结束时间必填',
            'modified_before.time.required' => '最后修改时间必填',
            'entryFormTitle.required' => '报名表标题必填',
        ];
    }
}
