import { TransportFeesFee } from "./fee.model";
import { TransportFeesMetroFee } from "./metro-fee.model";
import { TransportFeesTrtToTrtFee } from "./trt-to-trt-fee.model";

export interface TransportFees {
    exemptVRL: number[];
    fees: TransportFeesFee[];
    metro_fees: TransportFeesMetroFee[];
    trt_to_trt_fees: TransportFeesTrtToTrtFee[];
}