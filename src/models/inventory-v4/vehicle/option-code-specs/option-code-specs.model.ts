import { OptionCodeSpecsCallouts } from "./option-code-specs-callouts.model";
import { OptionCodeSpecsDesign } from "./option-code-specs-design.model";
import { OptionCodeSpecsOpts } from "./option-code-specs-opts.model";
import { OptionCodeSpecsSpecs } from "./option-code-specs-specs.model";

export interface OptionCodeSpecs {
    C_SPECS: OptionCodeSpecsSpecs;
    C_DESIGN: OptionCodeSpecsDesign;
    C_CALLOUTS: OptionCodeSpecsCallouts;
    C_OPTS: OptionCodeSpecsOpts;
}