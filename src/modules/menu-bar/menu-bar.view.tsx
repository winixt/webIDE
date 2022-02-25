import * as React from 'react';
import clx from 'classnames';
import { observer } from 'mobx-react-lite';
import { useInjectable, SlotRenderer, ComponentRegistry } from '@opensumi/ide-core-browser';
import { ClickOutside } from '@opensumi/ide-components';


import styles from './menu-bar.module.less';

// 点击一次后开启 focus mode, 此时 hover 也能出现子菜单
// outside click/contextmenu 之后解除 focus mode
// 点击 MenubarItem 也会解除 focus mode
// 点击 MenuItem 也会解除 focus mode
export const MenuBar = observer(() => {
    const componentRegistry: ComponentRegistry = useInjectable(ComponentRegistry);
    const [focusMode, setFocusMode] = React.useState(false);

    const handleMouseLeave = React.useCallback(() => {
        // 只有 focus 为 true 的时候, mouse leave 才会将其置为 false
        setFocusMode(false);
    }, [focusMode]);
    // TODO 注册平台 logo
    const LogoIcon = componentRegistry.getComponentRegistryInfo('@opensumi/ide-menu-bar-logo')?.views[0].component;
    // TODO tab bar 实现

    return (
        <ClickOutside className={styles.menubars} mouseEvents={['click', 'contextmenu']} onOutsideClick={handleMouseLeave}>
            {LogoIcon ? <LogoIcon /> : <div className={styles.logoIconEmpty}>Coral</div>}
        </ClickOutside>
    );
});

MenuBar.displayName = 'MenuBar';

type MenuBarMixToolbarActionProps = Pick<React.HTMLProps<HTMLElement>, 'className'>;

export const MenuBarMixToolbarAction: React.FC<MenuBarMixToolbarActionProps> = (props) => (
    <div className={clx(styles.menubarWrapper, props.className)}>
        <MenuBar />
        <SlotRenderer slot='action' flex={1} overflow={'initial'} />
    </div>
);

MenuBarMixToolbarAction.displayName = 'MenuBarMixToolbarAction';

