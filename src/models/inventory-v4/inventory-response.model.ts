import { Vehicle } from "./vehicle/vehicle.model";

export interface InventoryResponse {
    results: Vehicle[];
    total_matches_found: number;
}