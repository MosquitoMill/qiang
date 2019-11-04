<?php

namespace App\Http\Controllers\API\Backend;

use App\Http\Controllers\Controller;


class DateController extends Controller
{

    public function getDateFromRange($startdate,$enddate)
    {
        $stimestamp = strtotime($startdate);
        $etimestamp = strtotime($enddate);

        // 计算日期段内有多少天
        $days = ($etimestamp - $stimestamp) / 86400 + 1;

        // 保存每天日期
        $date = array();

        for ($i = 0; $i < $days; $i++) {
            $date[] = date('Y-m-d', $stimestamp + (86400 * $i));
        }

        $data = array();
        foreach ($date as $item) {
            $yearMonth = substr($item, 0, 7);
            if (empty($data[$yearMonth])) {
                $data[$yearMonth] = 1;
            } else {
                $data[$yearMonth] = $data[$yearMonth] + 1;
            }
        }
        return $data;
    }

}