import { Domain } from '@opensumi/ide-core-common/lib/di-helper';
import {
    SlotLocation,
    SlotRendererContribution,
    SlotRendererRegistry,
} from '@opensumi/ide-core-browser';
import { RightSlotRenderer } from './right.slot.renderer';

@Domain(SlotRendererContribution)
export class RightContribution implements SlotRendererContribution {
    registerRenderer(registry: SlotRendererRegistry) {
        registry.registerSlotRenderer(SlotLocation.right, RightSlotRenderer)
    }
}