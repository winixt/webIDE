import { Domain } from '@opensumi/ide-core-common/lib/di-helper';
import { ComponentContribution, ComponentRegistry } from '@opensumi/ide-core-browser/lib/layout';

import { MenuBarMixToolbarAction } from './menu-bar.view';

@Domain(ComponentContribution)
export class MenuBarContribution implements ComponentContribution {
    registerComponent(registry: ComponentRegistry) {
        registry.register(
            'coral-menu-bar',
            {
                id: 'coral-menu-bar',
                component: MenuBarMixToolbarAction,
            },
            {
                size: 27,
            },
        );
    }
}
