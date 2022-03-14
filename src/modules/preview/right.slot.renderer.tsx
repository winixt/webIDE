import * as React from 'react';
import { ComponentRegistryInfo } from '@opensumi/ide-core-browser';

export const RightSlotRenderer: (props: {
    className: string;
    components: ComponentRegistryInfo[];
  }) => any = ({ className, components }) => {
    const tmp = components.map(item => item.views[0].component!);
    return (
      <div style={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}>
        {tmp.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    );
};