import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { PreviewContribution } from './preview.contribution';
import { RightContribution } from './right.contribution';
import {PreviewComp} from './preview.view';
@Injectable()
export class PreviewModule extends BrowserModule {
  providers: Provider[] = [
    PreviewContribution,
    RightContribution,
  ];
  component = PreviewComp;
}
