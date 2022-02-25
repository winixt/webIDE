import { Domain } from '@opensumi/ide-core-common/lib/di-helper';
import { ComponentContribution, ComponentRegistry } from '@opensumi/ide-core-browser/lib/layout';

import { PreviewComp } from './preview.view';

@Domain(ComponentContribution)
export class PreviewContribution implements ComponentContribution {
    registerComponent(registry: ComponentRegistry) {
        registry.register(
            'coral-page-preview',
            {
                id: 'coral-page-preview',
                component: PreviewComp,
            },
            {
            },
        );
    }
}
