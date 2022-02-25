import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { PreviewContribution } from './preview.contribution';

@Injectable()
export class PreviewModule extends BrowserModule {
  providers: Provider[] = [
    PreviewContribution,
  ];
}
