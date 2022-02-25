import '@opensumi/ide-i18n/lib/browser';
import { SlotLocation } from '@opensumi/ide-core-browser';
import * as React from 'react';

import { CommonBrowserModules } from './common-modules';
import { renderApp } from './render-app';

// 引入公共样式文件
import '@opensumi/ide-core-browser/lib/style/index.less';
// 引入本地icon，不使用cdn版本，与useCdnIcon配套使用
import '@opensumi/ide-core-browser/lib/style/icon.less';
// antd opensumi 样式文件，如果你不需要使用antd组件，请移除
import '@opensumi/antd-theme/lib/index.css';

import { WebLiteModule } from '../web-lite';

// import { SampleModule } from './module';
import { MenuBarModule } from './modules/menu-bar';
import { PreviewModule } from './modules/preview';

import './styles.less';
import { LayoutComponent } from './custom-layout-component';

// 视图和slot插槽的对应关系
const layoutConfig = {
  [SlotLocation.top]: {
    // modules: ['@opensumi/ide-menu-bar'],
    modules: ['coral-menu-bar'],
  },
  [SlotLocation.action]: {
    modules: [],
  },
  [SlotLocation.left]: {
    modules: ['@opensumi/ide-explorer'],
  },
  [SlotLocation.right]: {
    modules: ['coral-page-preview'],
  },
  [SlotLocation.main]: {
    modules: ['@opensumi/ide-editor'],
  },
  [SlotLocation.statusBar]: {
    modules: ['@opensumi/ide-status-bar'],
  },
  [SlotLocation.bottom]: {
    // modules: ['@opensumi/ide-output'],
    modules: [],
  },
  [SlotLocation.extra]: {
    modules: [],
  },
};

// optional for sw registration
// serviceWorker.register();

renderApp({
  modules: [...CommonBrowserModules, WebLiteModule, MenuBarModule, PreviewModule],
  layoutConfig,
  layoutComponent: LayoutComponent,
  useCdnIcon: false,
  noExtHost: true,
  defaultPreferences: {
    'general.theme': 'ide-light',
    'general.icon': 'vsicons-slim',
    'application.confirmExit': 'never',
    'editor.quickSuggestionsDelay': 100,
    'editor.quickSuggestionsMaxCount': 50,
    'editor.scrollBeyondLastLine': false,
    'general.language': 'en-US',
  },
  workspaceDir: '/test', // TODO 工作区间根据项目定制
  extraContextProvider: (props) => <div id='#coral' style={{ width: '100%', height: '100%' }}>{props.children}</div>,
  // iconStyleSheets: [
  //   {
  //     iconMap: {
  //       explorer: 'fanhui',
  //       shangchuan: 'shangchuan',
  //     },
  //     prefix: 'tbe tbe-',
  //     cssPath: '//at.alicdn.com/t/font_403404_1qiu0eed62f.css',
  //   },
  // ],
});
