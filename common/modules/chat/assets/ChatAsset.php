<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace common\modules\chat\assets;

use common\assets\Html5shiv;
use yii\bootstrap\BootstrapAsset;
use yii\web\AssetBundle;
use yii\web\YiiAsset;

/**
 * Frontend application asset
 */
class ChatAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@common/modules/chat/assets/chatassets';

    /**
     * @var array
     */
    public $css = [


        'css/webbot.css',
    ];

    /**
     * @var array
     */
    public $js = [

        'js/main.js',
    ];

    /**
     * @var array
     */
    public $depends = [
        YiiAsset::class,
        BootstrapAsset::class,
        Html5shiv::class,
    ];
}

