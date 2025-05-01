import { TeslaInventoryQuery } from "./tesla-inventory-query.model";

export interface VehicleSpecs {
    query: TeslaInventoryQuery;
    offset: number;
    count: number;
    outsideOffset: number;
    outsideSearch: boolean;
    isFalconDeliverySelectionEnabled: boolean;
    version: string;
}