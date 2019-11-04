<?php

namespace App\Repositories;


trait BaseRepository
{
    /**
     * Get number of collection
     *
     * @return mixed
     */
    public function getCountNumber()
    {
        return $this->model->count();
    }

    /**
     * Get a model by primary key
     *
     * @param $modelId
     * @return mixed
     */
    public function findModel($modelId)
    {
        return $this->model->findOrFail($modelId);
    }

    /**
     * Create a new model
     *
     * @param array $input
     * @return mixed
     */
    public function store(Array $input)
    {
        return $this->save($this->model, $input);
    }

    /**
     * Update a model
     *
     * @param $modelId
     * @param array $input
     * @return mixed
     */
    public function update($modelId, Array $input)
    {
        $this->model = $this->findModel($modelId);

        return $this->save($this->model, $input);
    }

    /**
     * Delete a model
     *
     * @param $modelId
     * @return mixed
     */
    public function destroy($modelId)
    {
        try {
            if ($this->findModel($modelId)->delete()) {
                return ['state' => 'success'];
            }
            return ['state' => 'success'];
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }

    /**
     * Save a model
     *
     * @param $model
     * @param $input
     * @return mixed
     */
    public function save($model, $input)
    {
        $model->fill($input);

        $model->save();

        return $model;
    }
}