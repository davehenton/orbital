import { CommandExecutor } from './command-executor';
import { CommandMapper } from './command-mapper';
import { ArgumentParser } from './argument-parser';
import { CLIMetadata } from './decorators/cli/cli-metadata';
import { getClassMetadata } from './reflection/class';
import { arrayIsPopulated } from './util/array';
import { Constructor } from './util/constructor';

export class OrbitalFactoryStatic {

    private metadata: CLIMetadata;

    /**
     * Constructs dependency tree and puts commands in their place.
     * @param cli the CLI module to bootstrap
     */
    bootstrap(cli: Constructor<any>): this {
        this.metadata = getClassMetadata(cli);
        return this;
    }

    /**
     * This actually tells Node to run your CLI.
     * @param args pass in your process.argv
     */
    execute(args: any[] = []): void {
        let hasRun = false;
        const commands = this.metadata.commands || [];

        if (arrayIsPopulated(commands)) {
            const commandMap = CommandMapper.map(commands);
            const input = ArgumentParser.parseArguments(args);
            if (commandMap) {
                hasRun = CommandExecutor.execute(input, commandMap);
            }
        }

        if (!hasRun) {
            throw new Error('Show help');
            // TODO: SHOW HELP
        }
    }
}

export const OrbitalFactory = new OrbitalFactoryStatic();
