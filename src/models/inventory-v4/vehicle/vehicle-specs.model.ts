import { TeslaInventoryQuery } from "../inventory-query.model";

export interface VehicleSpecs {
    query: TeslaInventoryQuery;
    offset: number;
    count: number;
    outsideOffset: number;
    outsideSearch: boolean;
    isFalconDeliverySelectionEnabled: boolean;
    version: string;
}