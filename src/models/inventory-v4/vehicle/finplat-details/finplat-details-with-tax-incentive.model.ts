import { FinplatDetailAutoLeaseOperationalLeaseCtPrivate } from "./auto-lease-operational-lease-ct-private.model";
import { FinplatDetailAutoLoanLoanCtPrivate } from "./auto-loan-loan-ct-private.model";

export interface FinplatDetailFinplatDetailsWithTaxIncentive {
    "AUTO_LEASE:OPERATIONAL_LEASE:CT_PRIVATE": FinplatDetailAutoLeaseOperationalLeaseCtPrivate;
    "AUTO_LOAN:LOAN:CT_PRIVATE": FinplatDetailAutoLoanLoanCtPrivate;
}