import { ExternalCrop } from "./external-crop.model";
import { ExternalZoom } from "./external-zoom.model";

export interface CompositorViewsCustom {
    IsProductWithCustomViews: boolean;
    ExternalZoom: ExternalZoom;
    ExternalCrop: ExternalCrop;
}