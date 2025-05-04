export interface OptionCodeData {
    acceleration_unit_long?: string;
    acceleration_unit_short?: string;
    acceleration_value?: string;
    code: string;
    description?: string;
    group: string;
    long_name?: string;
    name?: string;
    price?: number;
    range_label_source?: string;
    range_source?: string;
    range_source_inventory_new?: string;
    top_speed_label?: string;
    unit_long?: string;
    unit_short?: string;
    value?: string;
    [key: string]: any; // Allow additional properties for flexibility
}