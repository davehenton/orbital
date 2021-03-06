import { OptionMetadata } from '../decorators/option';
import { ParamMetadata } from '../decorators/param';
import { Executable } from '../executable';

export type ModifiedParamMetadata = ParamMetadata & { index: number; };
export type ModifiedOptionMetadata = OptionMetadata & { propertyKey: string; name: string; type: string; };

export interface CommandInstance {
    instance: Executable & any;
    name: string;
    alias: string[];
    params: ModifiedParamMetadata[];
    description: string;
    paramTypes: any[];
    options: {
        [propName: string]: ModifiedOptionMetadata;
    };
}
