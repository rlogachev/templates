<?php

namespace common\modules\chat;

/**
 * chat module definition class
 */
class ChatModule extends \yii\base\Module
{
    /**
     * @inheritdoc
     */
    public $controllerNamespace = 'common\modules\chat\controllers\frontend';

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        // custom initialization code goes here
    }
}
