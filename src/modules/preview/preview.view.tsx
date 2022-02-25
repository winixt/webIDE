import * as React from 'react';
import clx from 'classnames';
import { observer } from 'mobx-react-lite';
import { useInjectable, ComponentRegistry } from '@opensumi/ide-core-browser';
import { ClickOutside } from '@opensumi/ide-components';


import styles from './preview.module.less';

export const PreviewComp = observer(() => {

    return (
        <div>页面预览</div>
    );
});

PreviewComp.displayName = 'PreviewComp';


