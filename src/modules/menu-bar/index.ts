import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { MenuBarContribution } from './menu-bar.contribution';

@Injectable()
export class MenuBarModule extends BrowserModule {
  providers: Provider[] = [
    MenuBarContribution,
  ];
}
