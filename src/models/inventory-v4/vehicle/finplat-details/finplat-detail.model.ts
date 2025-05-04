import { FinplatDetailAutoLeaseOperationalLeaseCtPrivate } from "./auto-lease-operational-lease-ct-private.model";
import { FinplatDetailAutoLoanLoanCtPrivate } from "./auto-loan-loan-ct-private.model";
import { FinplatDetailFinplatDetailsWithTaxIncentive } from "./finplat-details-with-tax-incentive.model";

export interface FinplatDetail {
    "AUTO_LEASE:OPERATIONAL_LEASE:CT_PRIVATE": FinplatDetailAutoLeaseOperationalLeaseCtPrivate;
    "AUTO_LOAN:LOAN:CT_PRIVATE": FinplatDetailAutoLoanLoanCtPrivate;
    FinplatDetailsWithTaxIncentive: FinplatDetailFinplatDetailsWithTaxIncentive;
}