<?php
use yii\helpers\Html;
/* @var $this \yii\web\View */
/* @var $content string */
\common\modules\chat\assets\DefaultAsset::register($this);
?>
<?php $this->beginPage() ?>
    <!DOCTYPE html>
    <html lang="<?php echo Yii::$app->language ?>">
    <head>
        <meta charset="<?php echo Yii::$app->charset ?>"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo Html::encode($this->title) ?></title>
        <?php $this->head() ?>
        <?php echo Html::csrfMetaTags() ?>
        <script type="text/javascript">window.dataLayer = window.dataLayer || [];</script>
    </head>
    <body>
    <?php $this->beginBody() ?>
    <?php echo $content ?>

    <?php $this->endBody() ?>

    <div id="surveybot_widget_container" class="surveybot_widget_container" frameborder="0"
         style="border: none; outline: none; width: 370px; height: 381px; right: 16px; left: auto; bottom: 0px; top: 0px; z-index: 4999;">
        <iframe id="surveybot_widget_iframe"
                src="http://templates.loc/frontend/web/chat/default/chat"
                width="100%" height="381" frameborder="0" scrolling="no" allow="geolocation"
                allowfullscreen=""></iframe>
    </div>
    <script>
        var widgetOptions = {
            widget_id: 366,
            survey_id: 378,
            domain: 'templates.loc',
            bg_color: '#F57C00'
        };

        (function () {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src =  '/frontend/web/js/widget.js';
            document.getElementsByTagName('head')[0].appendChild(script);
        })();
    </script>

    </body>
    </html>
<?php $this->endPage() ?>