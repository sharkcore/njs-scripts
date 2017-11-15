#!/usr/bin/env node
import Yargs from 'yargs';
import { build } from './commands';

function main() {
    // eslint-disable-next-line no-unused-expressions
    Yargs.command(
        'build',
        'Transforms code with babel',
        yargs =>
            yargs.options({
                src: {
                    describe: 'source code directory',
                    default: 'src',
                    normalize: true,
                },
                lib: {
                    describe: 'destination code directory',
                    default: 'lib',
                    normalize: true,
                },
            }),
        build,
    ).argv;
}

if (process.env.NODE_ENV !== 'test') {
    main();
}
