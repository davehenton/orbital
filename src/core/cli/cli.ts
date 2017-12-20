import { CLIMetadata } from './cli-metadata';
import { Constructor } from '../util/constructor';
import { setClassMetadata } from '../reflection/class';

/**
 * Decorator function defining the CLI entry point
 *
 * @param configuration Declaration of the CLI
 */
export function CLI(configuration: CLIMetadata): ClassDecorator {
    return (constructor) => {
        return setClassMetadata(constructor, configuration);
    };
}
