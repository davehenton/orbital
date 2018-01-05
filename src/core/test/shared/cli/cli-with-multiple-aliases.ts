import { CLI, Command } from '@orbital/core';
// tslint:disable:max-classes-per-file
// tslint:disable:no-empty

@Command({
    name: 'alpha',
    alias: ['a', 'b'],
})
export class Alpha {
    execute() { }
}

@Command({
    name: 'beta',
    alias: ['a', 'b'],
})
export class Beta {
    execute() { }
}

@CLI({
    name: 'test-cli',
    commands: [
        Alpha,
        Beta,
    ],
})
export class MultipleAliases { }
