import path from 'path';
import { spawn } from 'child_process';
import chalk from 'chalk';

const BABEL = path.normalize(
    path.join(
        path.dirname(path.dirname(__dirname)),
        'node_modules',
        '.bin',
        'babel',
    ),
);

const { log } = console;

export default argv => {
    const extra = argv._.slice(1);
    const flags = [argv.src, '-d', argv.lib, ...extra];
    log(chalk.blue(`$ babel ${flags.join(' ')}`));
    spawn(BABEL, flags, { stdio: 'inherit' });
};
