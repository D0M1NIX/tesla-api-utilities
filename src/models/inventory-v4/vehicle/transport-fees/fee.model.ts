import { TransportFeesFeeQuery } from "./fee-query.model";

export interface TransportFeesFee {
    amount: number;
    condition: string;
    query: TransportFeesFeeQuery;
    type: string;
    units: string;
}