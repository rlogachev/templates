<?php

namespace common\modules\chat\controllers\frontend;

use yii\web\Controller;

/**
 * Default controller for the `chat` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {

        $this->layout = '@common/modules/chat/views/frontend/layout/_clear';

        return $this->render('@common/modules/chat/views/frontend/default/index');
    }

    public function actionChat()
    {

        $this->layout = '@common/modules/chat/views/frontend/layout/_chat';

        return $this->render('@common/modules/chat/views/frontend/default/chat');
    }

}
