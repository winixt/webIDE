import * as React from 'react';
import clx from 'classnames';
import { observer } from 'mobx-react-lite';

import styles from './preview.module.less';

export const PreviewComp = observer(() => {
    return (
        <div className={clx(styles.previewPageWrapper)} >页面预览</div>
    );
});

PreviewComp.displayName = 'PreviewComp';


