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
class DefaultAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@common/modules/chat/assets/assets';

    /**
     * @var array
     */
    public $css = [
        'css/grid-3.0.min.css',
        'css/blocks-2.12.css',
        'css/blocks1.css',
        'css/animation-1.0.min.css',
        'css/style.css',
    ];

    /**
     * @var array
     */
    public $js = [
        'js/stat-0.2.min.js',
        'js/scripts-2.8.min.js',
        'js/blocks-2.7.js',
        'js/lazyload-1.3.min.js',
        'js/animation-1.0.min.js',
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
