import { TeslaInventoryQueryOptions } from "./tesla-inventory-query-options.model";

export interface TeslaInventoryQuery {
    model: string;
    condition: string;
    options: TeslaInventoryQueryOptions;
    arrangeby: string;
    order: string;
    market: string;
    language: string;
    super_region: string;
    PaymentType: string;
    paymentRange: number;
    lng: number;
    lat: number;
    zip: string;
    range: number;
    region: string;
}