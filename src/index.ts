export * from './services/tesla.service';
// TEST CODE BELOW
import { VehicleSpecs } from './models/vehicle/vehicle-specs.model';
import { TeslaService } from './services/tesla.service';
import { TeslaInventoryQuery } from './models/vehicle/tesla-inventory-query.model';
import * as Model from './constants/models.const';
import * as ArrangeBy from './constants/arrange-by-options.const';
import * as Condition from './constants/conditions.const';
import * as Order from './constants/ordering.const';
import * as Market from './constants/markets.const';
import * as Region from './constants/regions.const';

const teslaService = new TeslaService();
const vehicleSpecs = {
    query: {
        model: Model.MODEL_Y,
        condition: Condition.NEW,
        options: {},
        arrangeby: ArrangeBy.SAVINGS,
        order: Order.DESCENDING,
        market: Market.UNITED_STATES,
        language: 'en',
        super_region: 'north america',
        PaymentType: 'cash',
        paymentRange: 60000,
        // zip: "54636",
        // region: Region.WISCONSIN
    } as TeslaInventoryQuery,
    offset: 0,
    //count: 24,
    outsideOffset: 0,
    outsideSearch: false,
    isFalconDeliverySelectionEnabled: true,
    version: "v2"
} as VehicleSpecs;

teslaService.getNewInventoryV4(vehicleSpecs)
    .then((vehicles) => {
        console.log('Vehicles:', vehicles);
    }).catch((error) => {
        console.error('Error fetching vehicles:', error);
    });