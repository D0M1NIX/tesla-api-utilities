import { InventoryResponse } from "../models/inventory-v4/inventory-response.model";
import { VehicleSpecs } from "../models/inventory-v4/vehicle/vehicle-specs.model";
import { HttpService } from "./http.service";

const baseUrl = "https://www.tesla.com/";

const httpService = new HttpService(baseUrl);

export class TeslaService {
    async getNewInventoryV4(vehicleSpecs: VehicleSpecs): Promise<InventoryResponse> {
        return await httpService.get<InventoryResponse>('inventory/api/v4/inventory-results', vehicleSpecs);
    }
}