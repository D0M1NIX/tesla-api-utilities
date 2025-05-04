import { CashDetails } from "./cash-details/cash-details.model";
import { CompositorViews } from "./compositor-views.model";
import { CompositorViewsCustom } from "./compositor-views/compositor-views-custom.model";
import { FederalIncentives } from "./federal-incentives.model";
import { FinplatDetail } from "./finplat-details/finplat-detail.model";
import { FlexibleOption } from "./flexible-option.model";
import { LexiconDefaultOption } from "./lexicon-default-option.model";
import { OptionCodeData } from "./option-code-data.model";
import { OptionCodePricing } from "./option-code-pricing.model";
import { OptionCodeSpecs } from "./option-code-specs/option-code-specs.model";
import { OrderFee } from "./order-fee.model";
import { TransportFees } from "./transport-fees/transport-fees.model";
import { WarrantyData } from "./warranty-data.model";

export interface Vehicle {
    InTransit: boolean;
    ADL_OPTS: string[];
    AUTOPILOT: string[];
    BATTERY: any | null; // TODO: Strongly type, need an example
    CABIN_CONFIG: string[];
    CPORefurbishmentStatus: any;
    CashDetails: CashDetails;
    CompositorViews: CompositorViews;
    CountryCode: string;
    CountryHasVehicleAtLocation: boolean;
    CountryOfOrigin: string;
    CurrencyCode: string;
    CurrencyCodes: string;
    DECOR: any | null; // TODO: Strongly type, need an example
    DRIVE: string[];
    DamageDisclosure: boolean;
    DamageDisclosureStatus: string;
    DestinationHandlingFee: number;
    Discount: number;
    DisplayWarranty: boolean;
    FactoryCode: string;
    FederalIncentives: FederalIncentives;
    FinplatDetails: FinplatDetail[];
    FirstRegistrationDate: any | null; // TODO: Strongly type, need an example
    FixedAssets: boolean;
    FlexibleOptionsData: FlexibleOption[];
    ForecastedFactoryGatedDate: any | null; // TODO: Strongly type, need an example
    HEADLINER: any | null; // TODO: Strongly type, need an example
    HOVStatus: any | null; // TODO: Strongly type, need an example
    HasDamagePhotos: boolean;
    Hash: string;
    INTERIOR: string[];
    InspectionDocumentGuid: string | null;
    InventoryPrice: number;
    IsChargingConnectorIncluded: boolean;
    IsDemo: boolean;
    IsFactoryGated: boolean;
    IsFederalCreditEligible: boolean;
    IsInTransit: boolean;
    IsLegacy: boolean;
    IsPreProdWithDisclaimer: boolean;
    Language: string;
    Languages: string[];
    LeaseCountries: string[];
    LexiconDefaultOptions: LexiconDefaultOption[];
    ListingType: string;
    ListingTypes: string;
    LoanCountries: string[];
    Model: string;
    Odometer: number;
    OdometerType: string;
    OptionCodeData: OptionCodeData[];
    OptionCodeList: string;
    OptionCodeListDisplayOnly: any | null; // TODO: Strongly type, need an example
    OptionCodePricing: OptionCodePricing[];
    OrderFee: OrderFee;
    OriginalDeliveryDate: Date;
    OriginalInCustomerGarageDate: Date;
    PAINT: string[];
    PreviouslyRegistered: boolean;
    Price: number;
    PurchasePrice: number;
    ROOF: any | null; // TODO: Strongly type, need an example
    RegistrationCount: number;
    Rewards: any[];
    STEERING_WHEEL: any | null; // TODO: Strongly type, need an example
    TRIM: string[];
    TaxScheme: any | null; // TODO: Strongly type, need an example
    ThirdPartyHistoryUrl: string | null;
    TitleStatus: string;
    TitleSubtype: string[];
    TotalPrice: number;
    TradeInType: string | null;
    TransportFees: TransportFees;
    TrimCode: string;
    TrimName: string;
    TrimVariantCode: string;
    Trt: number;
    VIN: string;
    VehicleHistory: any | null;
    WHEELS: string[];
    WarrantyBatteryExpDate: Date;
    WarrantyBatteryIsExpired: boolean;
    WarrantyBatteryMile: number;
    WarrantyBatteryYear: number;
    WarrantyData: WarrantyData;
    WarrantyDriveUnitExpDate: Date;
    WarrantyDriveUnitMile: number;
    WarrantyDriveUnitYear: number;
    WarrantyMile: number;
    WarrantyVehicleExpDate: Date;
    WarrantyVehicleIsExpired: boolean;
    WarrantyYear: number;
    Year: number;
    AlternateCurrency: any; // TODO: Strongly type, need an example
    UsedVehicleLimitedWarrantyMile: number;
    UsedVehicleLimitedWarrantyYear: number;
    OdometerTypeShort: string;
    DeliveryDateDisplay: boolean;
    TransportationFee: number;
    OptionCodeSpecs: OptionCodeSpecs;
    CompositorViewsCustom: CompositorViewsCustom;
    IsRangeStandard: boolean;
    HasMarketingOptions: boolean;
}