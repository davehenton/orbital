import { TestCLI } from './shared/cli/test-cli';
import { expect } from 'chai';
import { getClassMetadata } from '@orbital/core/reflection/class';

/** TODO: Test should be split into two different projects
 *  Unit test which this is
 *  And e2e test which the cli.spec.ts is
 */
describe('CLI decorator', () => {
    it('Should attatch metadata', () => {
        const metadata = getClassMetadata(TestCLI);
        expect(metadata)
            .to.haveOwnProperty('name')
            .and.equal('test-cli');
        expect(metadata)
            .to.haveOwnProperty('version')
            .and.equal('1.0.0');
    });
});
