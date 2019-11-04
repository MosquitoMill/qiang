<?php
namespace App\Interfaces;
/**
 * Created by PhpStorm.
 * User: 都大爽
 * Date: 2017/8/28
 * Time: 16:11
 */
interface BaseInterface
{

    /**
     * Get number of collection
     *
     * @return mixed
     */
    public function getCountNumber();

    /**
     * Get a model by primary key
     *
     * @param $modelId
     * @return mixed
     */
    public function findModel($modelId);

    /**
     * Create a new model
     *
     * @param array $input
     * @return mixed
     */
    public function store(array $input);

    /**
     * Update a model
     *
     * @param $modelId
     * @param $input
     * @return mixed
     */
    public function update($modelId, array $input);

    /**
     * Delete a model
     *
     * @param $modelId
     * @return mixed
     */
    public function destroy($modelId);
}