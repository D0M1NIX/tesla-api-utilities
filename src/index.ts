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
import * as fs from 'fs';
const path = require('path');
const os = require('os');

const teslaService = new TeslaService();
const vehicleSpecsMY = {
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

const vehicleSpecsM3 = {
    query: {
        model: Model.MODEL_3,
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

const vehicleSpecsMS = {
    query: {
        model: Model.MODEL_S,
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

const vehicleSpecsMX = {
    query: {
        model: Model.MODEL_X,
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

const desktopPath = path.join(os.homedir(), 'Desktop/');
const currentPath = process.cwd();

teslaService.getNewInventoryV4(vehicleSpecsMY)
    .then((vehicles) => {
        const output = JSON.stringify(vehicles, null, 2);
        const outputPath = path.join(currentPath, 'model-y-output.json');
        console.log(`Model Y\'s - ${outputPath}`);
        fs.writeFileSync(outputPath, output, 'utf-8');

        teslaService.getNewInventoryV4(vehicleSpecsM3)
        .then((vehicles) => {
            const output = JSON.stringify(vehicles, null, 2);
            const outputPath = path.join(currentPath, 'model-3-output.json');
            console.log(`Model 3\'s - ${outputPath}`);
            fs.writeFileSync(outputPath, output, 'utf-8');

            teslaService.getNewInventoryV4(vehicleSpecsMS)
            .then((vehicles) => {
                const output = JSON.stringify(vehicles, null, 2);
                const outputPath = path.join(currentPath, 'model-s-output.json');
                console.log(`Model S\'s - ${outputPath}`);
                fs.writeFileSync(outputPath, output, 'utf-8');

                teslaService.getNewInventoryV4(vehicleSpecsMX)
                .then((vehicles) => {
                    const output = JSON.stringify(vehicles, null, 2);
                    const outputPath = path.join(currentPath, 'model-x-output.json');
                    console.log(`Model X\'s - ${outputPath}`);
                    fs.writeFileSync(outputPath, output, 'utf-8');
                }).catch((error) => {
                    console.error('Error fetching Model X\'s:', error);
                });
            }).catch((error) => {
                console.error('Error fetching Model S\'s:', error);
            });
        }).catch((error) => {
            console.error('Error fetching Model 3\'s:', error);
        });
    }).catch((error) => {
        console.error('Error fetching Model Y\'s:', error);
    });